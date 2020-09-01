const username = document.querySelector('#username')
const saveBtn = document.querySelector('#saveBtn')
var finalScoreEl = document.querySelector('#finalScore')
var mostRecentScoreEl = document.querySelector('#mostRecentScore')

username.addEventListener("keyup", () => {
    saveBtn.disabled = !username.value;
});

saveScore = e => {
    console.log("clicked button");
    e.preventDefault();
};
