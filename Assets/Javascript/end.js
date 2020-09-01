// Global DOM elements for END page
var username = document.querySelector('#username')
var saveBtn = document.querySelector('#saveBtn')
var finalScoreEl = document.querySelector('#finalScore')
var mostRecentScoreEl = localStorage.getItem('mostRecentScore')

var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var MAX_HIGH_SCORES = 5


// Function on Save button click
finalScoreEl.innerHTML = mostRecentScoreEl

username.addEventListener("keyup", () => {
    saveBtn.disabled = !username.value;
});

saveScore = e => {
    console.log("clicked button");
    e.preventDefault();

    var score = {
        score: mostRecentScoreEl,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a,b) => b.score - a.score)
    highScores.splice(5);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("index.html")
};

