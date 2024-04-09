let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let winMsg = document.querySelector("p#msg");
let turnLabel = document.querySelector(".chance"); 
let count = 0;
let turn0 = true;
let hvhBtn = document.querySelector(".human");
let hvcBtn = document.querySelector(".comp");
let scorePanel = document.querySelector(".turn"); 
let how = document.querySelector(".choose");



const enableBoxes = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
        winMsg.innerText = "";
        turnLabel.innerText = "O TURN";
        count=0;
    }
};

const resetGame = ()=>{
    turn0 = true;
    enableBoxes();
};

resetBtn.addEventListener("click",resetGame);

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const checkWinner = () =>{
    count++;
    let winnerFound = false;
    for(let pattern of winPattern){
        let pos1Val =  boxes[pattern[0]].innerText;
        let pos2Val =  boxes[pattern[1]].innerText;
        let pos3Val =  boxes[pattern[2]].innerText;
        if(pos1Val != ""  && pos2Val != "" && pos3Val != ""  ){
            if(pos1Val === pos2Val &&  pos2Val === pos3Val){
                let winner = pos1Val;
                winMsg.innerText = `${winner} WINS`;
                turnLabel.innerText = "NEW GAME";
                for (let box of boxes){
                    box.disabled = true;
                }
                winnerFound = true;
                break;
            }
        }
    };
    if(!winnerFound && count === 9){
        winMsg.innerText = "TIE";
        turnLabel.innerText = "NEW GAME";
    }

};

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turn0 == true){
            turnLabel.innerText = "X TURN";
            box.innerText = "O";
            turn0 = false;
        }else if(turn0 ==false){
            turnLabel.innerText = "O TURN";
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

// COMPUTER VS HUMAN GAME
