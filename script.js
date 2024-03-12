let intervalId; // existing interval ID

function countdown(endDate) {
  const now = new Date().getTime();
  if (endDate < now) {
    // if the endDate in the past
    alert("Please select a future date.");
    return;
  }

  clearInterval(intervalId); // Clear any existing countdown

  intervalId = setInterval(() => {
    const now = new Date().getTime();
    const difference = endDate - now;
    if (difference <= 0) {
      clearInterval(intervalId); // Stop the interval if the countdown reaches 0
      return;
    }
    // time calculations
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days-value").textContent = formatTime(days);
    document.getElementById("hours-value").textContent = formatTime(hours);
    document.getElementById("minutes-value").textContent = formatTime(minutes);
    document.getElementById("seconds-value").textContent = formatTime(seconds);
  }, 1000);
}
// just for better formatting
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

document
  .getElementById("start-countdown")
  .addEventListener("click", function () {
    const countdownDate = document.getElementById("countdown-date").value;
    const endDate = new Date(countdownDate).getTime();

    countdown(endDate);
    // document.getElementById("countdown-date").value = "";
    // the above commented line reset the countdown-date every time you click the button
  });
