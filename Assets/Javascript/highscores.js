// Global DOM elements for storage of Highscores
var highScoresListEl = document.getElementById("highScoresList");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// Function for mapping Highscores High to Low
highScoresListEl.innerHTML = highScores
    .map(score => {
        return `<li class="high-score">${score.name}-${score.score}</li>`;
    })
    .join("");