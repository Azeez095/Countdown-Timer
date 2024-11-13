let countdownTime = 60 * 60;
let timer;
let timeLeft = countdownTime;
let isRunning = false;

function displayTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsLeft = seconds % 60;

    document.getElementById("countdown").textContent =
        `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secondsLeft.toString().padStart(2, "0")}`;
}


function startCountdown() {
    if (isRunning) return; 

    isRunning = true;
    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById("countdown").textContent = "Time's up!";
            isRunning = false;
            return;
        }

        timeLeft--;
        displayTime(timeLeft);
    }, 1000);
}


function stopCountdown() {
    clearInterval(timer);
    isRunning = false;
}


function resetCountdown() {
    stopCountdown();
    timeLeft = countdownTime;
    displayTime(timeLeft);
}

document.getElementById("start").addEventListener("click", startCountdown);
document.getElementById("stop").addEventListener("click", stopCountdown);
document.getElementById("reset").addEventListener("click", resetCountdown);

displayTime(timeLeft);

