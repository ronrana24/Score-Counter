var player1_score = document.querySelector("#player1_score");
var player2_score = document.querySelector("#player2_score");
var game_number = document.querySelector("#game_number");
var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");
var reset = document.querySelector("#reset");
var game = document.querySelector("input")
var p1_score = 0;
var p2_score = 0;
var gameOver = false;
var winningScore = 5;

player1.addEventListener("click", function() {
    if(!gameOver) {
        p1_score++;
        if(p1_score === winningScore) {
            gameOver = true;
            player1_score.classList.add("green");
        }
        player1_score.innerHTML = p1_score;
    }
});
player2.addEventListener("click", function() {
    if(!gameOver) {
        p2_score++;
        if(p2_score === winningScore) {
            gameOver = true;
            player2_score.classList.add("green");
        }
        player2_score.innerHTML = p2_score;
    }
});

function reset() {
    gameOver = false;
    p1_score = 0;
    p2_score = 0;
    player1_score.classList.remove("green");
    player2_score.classList.remove("green");
    player1_score.innerHTML = 0;
    player2_score.innerHTML = 0;
};

reset.addEventListener("click", function() {
    reset();
 });

game.addEventListener("change", function() {
    game_number.innerHTML = this.value;
    winningScore = Number(this.value);
    reset();
})