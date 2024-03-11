let countdownInterval;

function setCountdown() {
  clearInterval(countdownInterval);

  const targetDateInput = document.getElementById("target-date");
  const targetDate = new Date(targetDateInput.value).getTime(); // Get target date in milliseconds
  const now = new Date().getTime();
  let distance = targetDate - now;

  if (distance > 0) {
    updateCountdown(distance);
    countdownInterval = setInterval(function () {
      distance -= 1000; // Decrease distance by one second (1000 milliseconds)
      updateCountdown(distance);
      if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Countdown expired";
      }
    }, 1000);
  } else {
    alert("Please select a future date and time.");
  }
}

function updateCountdown(distance) {
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const countdownDisplay = document.getElementById("countdown");
  countdownDisplay.innerHTML = `${formatTime(days)}d ${formatTime(
    hours
  )}h ${formatTime(minutes)}m ${formatTime(seconds)}s`;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
