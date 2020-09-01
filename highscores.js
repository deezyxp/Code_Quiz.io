var highScoresListEl = document.getElementById("highScoresList");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresListEl.innerHTML = highScores
    .map(score => {
        return `<li class="high-score">${score.name}-${score.score}</li>`;
    })
    .join("");