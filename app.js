

let gameArr = ['r', 's', 'p']; 
player1Score = 0;
player2Score = 0;
player1ScorePanel = document.querySelector('#playerScorePanel1')
player1ScorePanel2 = document.querySelector('#playerScorePanel2')
winInfoPanel1 = document.querySelector('#winGame1');
winInfoPanel2 = document.querySelector('#winGame2');




////
function compAttack(arr){
let random = Math.floor(Math.random()*arr.length);
return arr[random]
}

//let comp = compAttack(gameArr);
///

function startGame(e){
    let userAttack = e.key;
    let comp = compAttack(gameArr);
   

    if(gameArr.indexOf(userAttack) === -1){
        alert("please only use 'r', 's', 'p' !");
        return;
    }
    if(userAttack ==="p" && comp === "r"){
        console.log('User Win');
        playerScore1 ++
        player1ScorePanel.innerHtml = `Score: ${player1Score}`
    } else if(userAttack ="s" && comp === "p"){
        console.log("User Win");
        playerScore1 ++
        player1ScorePanel.innerHtml = `Score: ${player1Score}`
    } else if(userAttack === "r" && comp === "s"){
        console.log("user Win");
        player1Score ++
        player1ScorePanel.innerHtml = `Score: ${player1Score}`
        winInfoPanel1.innerHtml = " Win";
        winInfoPanel2.innerHtml = "lose";

    } else if(userAttack === comp){
        console.log("Equality! Try again");

    } else{
        console.log("comp win");
        player2Score ++
    }
console.log("----------------------");
    console.log( "user", userAttack);
    console.log("comp", comp)
}

window.onkeydown = startGame