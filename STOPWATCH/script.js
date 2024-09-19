// Variables to store time and control the stopwatch
let hours = 0;
let minutes = 0;
let seconds = 0;
let interval = null;
let isRunning = false;

// Function to update the display
function updateDisplay() {
    const timeDisplay = document.getElementById("time");
    const formattedTime = 
        String(hours).padStart(2, '0') + ":" + 
        String(minutes).padStart(2, '0') + ":" + 
        String(seconds).padStart(2, '0');
    timeDisplay.textContent = formattedTime;
}

// Start the stopwatch
document.getElementById("start-btn").addEventListener("click", function() {
    if (!isRunning) {
        interval = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateDisplay();
        }, 1000);
        isRunning = true;
    }
});

// Stop the stopwatch
document.getElementById("stop-btn").addEventListener("click", function() {
    clearInterval(interval);
    isRunning = false;
});

// Reset the stopwatch
document.getElementById("reset-btn").addEventListener("click", function() {
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    isRunning = false;
    updateDisplay();
});
