// Prevent right click, copy, cut, paste globally if we are on assessment pages
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('copy', event => event.preventDefault());
document.addEventListener('cut', event => event.preventDefault());
document.addEventListener('paste', event => event.preventDefault());

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
            mobile: document.getElementById('mobile').value.trim(),
            college: document.getElementById('college').value.trim(),
            degree: document.getElementById('degree').value.trim(),
            gradYear: document.getElementById('gradYear').value.trim(),
            startTime: new Date().toISOString()
        };

        if (validateForm(candidateInfo)) {
            localStorage.setItem('assessment_candidate', JSON.stringify(candidateInfo));
            window.location.href = 'assessment.html';
        }
    });
}

function validateForm(data) {
    // Basic HTML5 validation is handled by the browser due to 'required' and 'pattern' attributes.
    // Additional custom validation can go here if needed.
    if(data.mobile.length !== 10 || isNaN(data.mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return false;
    }
    return true;
}
