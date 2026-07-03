// Handle Candidate Form Submission
const form = document.getElementById('candidate-form');

if (form) {
    // Clear previous session if any
    localStorage.removeItem('assessment_state');
    localStorage.removeItem('assessment_candidate');
    localStorage.removeItem('assessment_results');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const candidateInfo = {
            fullName: document.getElementById('fullName').value.trim(),
            email: document.getElementById('email').value.trim(),
            testKey: document.getElementById('testKey').value.trim(),
            startTime: new Date().toISOString()
        };

        if (validateForm(candidateInfo)) {
            localStorage.setItem('assessment_candidate', JSON.stringify(candidateInfo));
            window.location.href = 'assessment.html';
        }
    });
}

function validateForm(data) {
    const errorEl = document.getElementById('testKeyError');
    if (data.testKey !== 'DeepVisionTech@90') {
        if (errorEl) {
            errorEl.style.display = 'block';
        } else {
            alert("Wrong Test key");
        }
        return false;
    }
    
    if (errorEl) {
        errorEl.style.display = 'none';
    }
    return true;
}
