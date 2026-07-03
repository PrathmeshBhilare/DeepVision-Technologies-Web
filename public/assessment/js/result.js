// Prevent text selection context menus globally
document.addEventListener('contextmenu', event => event.preventDefault());

function initResult() {
    const candidateJson = localStorage.getItem('assessment_candidate');
    const resultsJson = localStorage.getItem('assessment_results');
    
    if (!candidateJson || !resultsJson) {
        window.location.href = 'index.html';
        return;
    }
    
    const candidate = JSON.parse(candidateJson);
    const results = JSON.parse(resultsJson);
    
    // Populate Candidate Details
    document.getElementById('c-name').textContent = candidate.fullName;
    document.getElementById('c-email').textContent = candidate.email;
    document.getElementById('c-college').textContent = candidate.college;
    document.getElementById('c-degree').textContent = `${candidate.degree} (${candidate.gradYear})`;
    
    // Populate Performance Summary
    document.getElementById('r-total').textContent = results.total;
    document.getElementById('r-attempted').textContent = results.attempted;
    document.getElementById('r-correct').textContent = results.correct;
    document.getElementById('r-wrong').textContent = results.wrong;
    document.getElementById('r-unanswered').textContent = results.unanswered;
    
    // Time Formatting
    const minutes = Math.floor(results.timeTaken / 60);
    const seconds = results.timeTaken % 60;
    document.getElementById('r-time').textContent = `${minutes}m ${seconds}s`;
    
    // Pass/Fail Logic (70% required)
    const percentage = parseFloat(results.percentage);
    const passed = percentage >= 70;
    
    const badge = document.getElementById('pass-fail-badge');
    const message = document.getElementById('result-message');
    const circlePath = document.getElementById('circle-path');
    const scoreText = document.getElementById('score-text');
    
    scoreText.textContent = `${percentage}%`;
    circlePath.setAttribute('stroke-dasharray', `${percentage}, 100`);
    
    if (passed) {
        badge.textContent = 'Passed';
        badge.className = 'badge-result badge-pass';
        message.textContent = 'Congratulations! You have successfully qualified for the next stage.';
        circlePath.setAttribute('stroke', '#22c55e');
    } else {
        badge.textContent = 'Failed';
        badge.className = 'badge-result badge-fail';
        message.textContent = 'Thank you for participating. We encourage you to continue improving your skills.';
        circlePath.setAttribute('stroke', '#ef4444');
    }
}

initResult();
