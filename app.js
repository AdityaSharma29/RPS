var userScore = 0;
var computerScore = 0;
var srcObj = {
    1: "rock",
    2: "paper",
    3: "scissors"
};
function proceed() {
    var val = document.getElementById("selector").value;
    if (val == 7 || val == 20 || val == 50) location.href = "page1.html" + "?para=" + val;
    else document.getElementById("warning").innerText = "Please select from given options.";
}; 
function redirect(str) {
    if (confirm(str + "Wanna play again")) location.replace("index.html");
    else location.replace("https://www.google.co.in/");
};
function game(userChoice) {
    var rndmNmb = Math.floor(Math.random() * 3 + 1)
    var source = srcObj[rndmNmb] + ".png";
    document.getElementById("computer-imgs").src = source;
    if (userChoice !== srcObj[rndmNmb]) {
        if (userChoice == "rock" && srcObj[rndmNmb] == "scissors") userScore++;
        else if (userChoice == "paper" && srcObj[rndmNmb] == "rock") userScore++;
        else if (userChoice == "scissors" && srcObj[rndmNmb] == "paper") userScore++;
        else computerScore++;
    }
    document.getElementById("user-score").innerText = userScore;
    document.getElementById("computer-score").innerText = computerScore;
    var limit = decodeURIComponent(window.location.search).slice(6);
    if (userScore == limit) redirect("Congratulations !! ");
    else if (computerScore == limit) redirect("Better luck next time. ");
};
document.getElementById("rock").addEventListener("click", function () { game("rock"); });
document.getElementById("paper").addEventListener("click", function () { game("paper"); });
document.getElementById("scissors").addEventListener("click", function () { game("scissors"); });

