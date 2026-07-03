// Assessment Logic
const API_URL = 'data/questions.json';

// State variables
let questions = [];
let currentQuestionIndex = 0;
let answers = {}; // { questionId: { selectedOption: string, originalIndex: number } }
let questionStatuses = {}; // { questionId: 'not-visited' | 'answered' | 'not-answered' | 'marked' }
let tabSwitches = 0;
let timer = null;

// DOM Elements
const els = {
    qNumber: document.getElementById('q-number'),
    qCategory: document.getElementById('q-category'),
    qDifficulty: document.getElementById('q-difficulty'),
    qText: document.getElementById('q-text'),
    optionsContainer: document.getElementById('options-container'),
    btnPrev: document.getElementById('btn-prev'),
    btnNext: document.getElementById('btn-next'),
    btnMark: document.getElementById('btn-mark'),
    btnClear: document.getElementById('btn-clear'),
    btnSubmit: document.getElementById('btn-submit-test'),
    paletteGrid: document.getElementById('palette-grid'),
    progressBar: document.getElementById('progress-bar'),
    codingContainer: document.getElementById('coding-container'),
    codingTextarea: document.getElementById('coding-textarea')
};

// Anti-Cheat: Tab Switch Tracking
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        tabSwitches++;
        if (tabSwitches >= 3) {
            alert('Assessment automatically submitted due to multiple tab switches.');
            submitAssessment();
        } else {
            alert(`Warning: You switched tabs or minimized the browser! You have ${3 - tabSwitches} warning(s) left before auto-submission.`);
        }
    }
});

// Initialize
async function init() {
    // Check if candidate info exists
    if (!localStorage.getItem('assessment_candidate')) {
        window.location.href = 'index.html';
        return;
    }

    await loadQuestions();
    
    // Restore state or initialize new
    const savedState = JSON.parse(localStorage.getItem('assessment_state'));
    if (savedState && savedState.questions && savedState.questions.length > 0) {
        // Restore
        questions = savedState.questions;
        currentQuestionIndex = savedState.currentQuestionIndex || 0;
        answers = savedState.answers || {};
        questionStatuses = savedState.questionStatuses || {};
        tabSwitches = savedState.tabSwitches || 0;
        
        timer = new AssessmentTimer(60, submitAssessment);
        timer.restore(savedState.timeRemaining);
    } else {
        // Initialize new
        shuffleQuestions();
        questions.forEach(q => {
            questionStatuses[q.id] = 'not-visited';
        });
        questionStatuses[questions[0].id] = 'not-answered';
        
        timer = new AssessmentTimer(60, submitAssessment);
    }
    
    timer.start();
    buildPalette();
    renderQuestion();
    setupEventListeners();
}

async function loadQuestions() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        questions = data;
    } catch (error) {
        console.error("Failed to load questions", error);
        alert("Error loading assessment. Please try again.");
    }
}

function shuffleArray(array) {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
}

function shuffleQuestions() {
    questions = shuffleArray(questions);
    
    // Shuffle options for each question while keeping track of correct answer
    questions = questions.map(q => {
        if (q.type === 'coding' || !q.options) {
            return q;
        }

        // Create objects with original index to track the answer
        let ops = q.options.map((text, idx) => ({ text, isCorrect: idx === q.answer }));
        ops = shuffleArray(ops);
        
        return {
            ...q,
            shuffledOptions: ops
        };
    });
}

function renderQuestion() {
    if (questions.length === 0) return;
    const q = questions[currentQuestionIndex];
    
    els.qNumber.textContent = `Question ${currentQuestionIndex + 1}`;
    els.qCategory.textContent = q.category;
    els.qDifficulty.textContent = q.difficulty;
    els.qText.textContent = q.question;
    
    els.optionsContainer.innerHTML = '';
    
    if (q.type === 'coding') {
        els.optionsContainer.style.display = 'none';
        els.codingContainer.style.display = 'block';
        
        // Restore previous answer if any
        if (answers[q.id]) {
            els.codingTextarea.value = answers[q.id].text;
        } else {
            els.codingTextarea.value = '';
        }

        // Remove old event listeners by cloning
        const newTextarea = els.codingTextarea.cloneNode(true);
        els.codingTextarea.parentNode.replaceChild(newTextarea, els.codingTextarea);
        els.codingTextarea = newTextarea; // update reference

        els.codingTextarea.addEventListener('input', (e) => {
            const val = e.target.value;
            if (val.trim().length > 0) {
                answers[q.id] = { text: val, isCorrect: false }; // Cannot auto-grade coding
                if (questionStatuses[q.id] !== 'marked') {
                    questionStatuses[q.id] = 'answered';
                }
            } else {
                delete answers[q.id];
                if (questionStatuses[q.id] !== 'marked') {
                    questionStatuses[q.id] = 'not-answered';
                }
            }
            updatePalette();
            saveState();
        });

    } else {
        els.optionsContainer.style.display = 'flex';
        els.codingContainer.style.display = 'none';
        
        q.shuffledOptions.forEach((opt, idx) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option-item';
            
            const isSelected = answers[q.id] && answers[q.id].text === opt.text;
            if (isSelected) optionDiv.classList.add('selected');
            
            const radioId = `opt-${idx}`;
            optionDiv.innerHTML = `
                <input type="radio" name="option" id="${radioId}" value="${opt.text}" ${isSelected ? 'checked' : ''}>
                <label for="${radioId}" class="option-text">${opt.text}</label>
            `;
            
            optionDiv.addEventListener('click', () => {
                // Unselect others visually
                document.querySelectorAll('.option-item').forEach(el => el.classList.remove('selected'));
                optionDiv.classList.add('selected');
                document.getElementById(radioId).checked = true;
                
                // Save answer
                answers[q.id] = {
                    text: opt.text,
                    isCorrect: opt.isCorrect
                };
                
                if (questionStatuses[q.id] !== 'marked') {
                    questionStatuses[q.id] = 'answered';
                }
                updatePalette();
                saveState();
            });
            
            els.optionsContainer.appendChild(optionDiv);
        });
    }
    
    // Button states
    els.btnPrev.disabled = currentQuestionIndex === 0;
    els.btnNext.textContent = currentQuestionIndex === questions.length - 1 ? 'Save & Next' : 'Next';
    
    // Update Progress
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    els.progressBar.style.width = `${progress}%`;
    
    updatePalette();
}

function buildPalette() {
    els.paletteGrid.innerHTML = '';
    questions.forEach((q, idx) => {
        const btn = document.createElement('button');
        btn.className = 'palette-btn';
        btn.textContent = idx + 1;
        btn.id = `pal-${q.id}`;
        
        btn.addEventListener('click', () => {
            navigateTo(idx);
        });
        
        els.paletteGrid.appendChild(btn);
    });
    updatePalette();
}

function updatePalette() {
    questions.forEach((q, idx) => {
        const btn = document.getElementById(`pal-${q.id}`);
        if (!btn) return;
        
        // Clear classes
        btn.className = 'palette-btn';
        
        const status = questionStatuses[q.id];
        if (status) btn.classList.add(status);
        
        if (idx === currentQuestionIndex) {
            btn.classList.add('current');
            // If current but not visited, mark not-answered
            if (status === 'not-visited' || !status) {
                questionStatuses[q.id] = 'not-answered';
                btn.classList.add('not-answered');
                btn.classList.remove('not-visited');
            }
        }
    });
}

function navigateTo(index) {
    if (index >= 0 && index < questions.length) {
        currentQuestionIndex = index;
        renderQuestion();
        saveState();
    }
}

function setupEventListeners() {
    els.btnPrev.addEventListener('click', () => navigateTo(currentQuestionIndex - 1));
    
    els.btnNext.addEventListener('click', () => {
        if (currentQuestionIndex < questions.length - 1) {
            navigateTo(currentQuestionIndex + 1);
        } else {
            // Final question
            navigateTo(currentQuestionIndex); // just save state
        }
    });
    
    els.btnMark.addEventListener('click', () => {
        const qId = questions[currentQuestionIndex].id;
        questionStatuses[qId] = 'marked';
        updatePalette();
        saveState();
    });
    
    els.btnClear.addEventListener('click', () => {
        const qId = questions[currentQuestionIndex].id;
        delete answers[qId];
        questionStatuses[qId] = 'not-answered';
        
        if (questions[currentQuestionIndex].type === 'coding') {
            els.codingTextarea.value = '';
        } else {
            // uncheck radios
            document.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);
            document.querySelectorAll('.option-item').forEach(el => el.classList.remove('selected'));
        }
        
        updatePalette();
        saveState();
    });
    
    els.btnSubmit.addEventListener('click', () => {
        const modal = document.getElementById('confirm-modal');
        if (modal) {
            modal.style.display = 'flex';
        } else {
            submitAssessment();
        }
    });

    const btnModalCancel = document.getElementById('btn-modal-cancel');
    const btnModalConfirm = document.getElementById('btn-modal-confirm');
    const modal = document.getElementById('confirm-modal');

    if (btnModalCancel) {
        btnModalCancel.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    if (btnModalConfirm) {
        btnModalConfirm.addEventListener('click', () => {
            modal.style.display = 'none';
            submitAssessment();
        });
    }
}

function saveState() {
    const state = {
        questions,
        currentQuestionIndex,
        answers,
        questionStatuses,
        tabSwitches,
        timeRemaining: timer ? timer.timeRemaining : 3600
    };
    localStorage.setItem('assessment_state', JSON.stringify(state));
}

function submitAssessment() {
    if (timer) timer.stop();
    
    // Calculate results
    let correct = 0;
    let wrong = 0;
    let unanswered = 0;
    let mcqCount = 0;
    
    questions.forEach(q => {
        const ans = answers[q.id];
        
        if (!ans) {
            unanswered++;
        } else {
            // If it is coding, it is answered but we don't count it towards correct/wrong auto-grading
            if (q.type !== 'coding') {
                if (ans.isCorrect) {
                    correct++;
                } else {
                    wrong++;
                }
            }
        }
        
        if (q.type !== 'coding') {
            mcqCount++;
        }
    });
    
    // Percentage based on MCQs only
    const percentage = mcqCount > 0 ? ((correct / mcqCount) * 100).toFixed(1) : 0;

    const results = {
        total: questions.length,
        attempted: questions.length - unanswered,
        correct,
        wrong,
        unanswered,
        score: correct,
        percentage: percentage,
        timeTaken: timer ? timer.getTimeTaken() : 0
    };
    
    localStorage.setItem('assessment_results', JSON.stringify(results));
    
    // Clear state so user can't go back
    localStorage.removeItem('assessment_state');
    
    window.location.href = 'completed.html';
}

// Start
init();
