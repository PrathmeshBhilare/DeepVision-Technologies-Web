// Timer Module
class AssessmentTimer {
    constructor(durationMinutes, onExpire) {
        this.totalSeconds = durationMinutes * 60;
        this.timeRemaining = this.totalSeconds;
        this.onExpire = onExpire;
        this.timerInterval = null;
        this.displayElement = document.getElementById('time-left');
        this.timerContainer = document.getElementById('timer-display');
    }

    start() {
        this.updateDisplay();
        this.timerInterval = setInterval(() => {
            this.timeRemaining--;
            
            // Warning at 5 minutes
            if (this.timeRemaining === 300) {
                this.timerContainer.classList.add('warning');
            }

            if (this.timeRemaining <= 0) {
                this.stop();
                this.updateDisplay();
                if (this.onExpire) this.onExpire();
            } else {
                this.updateDisplay();
            }
            
            // Save state periodically (every 5 seconds)
            if (this.timeRemaining % 5 === 0) {
                this.saveState();
            }
        }, 1000);
    }

    stop() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    updateDisplay() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        this.displayElement.textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    saveState() {
        const state = JSON.parse(localStorage.getItem('assessment_state')) || {};
        state.timeRemaining = this.timeRemaining;
        localStorage.setItem('assessment_state', JSON.stringify(state));
    }

    restore(savedSeconds) {
        if (savedSeconds !== undefined && savedSeconds !== null) {
            this.timeRemaining = parseInt(savedSeconds);
            if (this.timeRemaining <= 300) {
                this.timerContainer.classList.add('warning');
            }
        }
    }
    
    getTimeTaken() {
        return this.totalSeconds - this.timeRemaining;
    }
}
