var adviceId = document.getElementById("adviceId")
var adviceQuote = document.getElementById("adviceQuote")
var randomBtn = document.querySelector(".randomBtn")
var advice;

function onLoadAdvice() {
  fetch('https://api.adviceslip.com/advice', {cache: 'no-store'}).then(function(response) {
    return response.json();
  }).then(function (adviceData) {
    advice = adviceData.slip
    adviceQuote.innerHTML = advice.advice;
    adviceId.innerHTML = "Advice #" + String(advice.id);
  })['catch'](function (error) {
    console.log(error);
  });
}
randomBtn.addEventListener('click', onLoadAdvice);

window.onload = function() {
  onLoadAdvice();
};
