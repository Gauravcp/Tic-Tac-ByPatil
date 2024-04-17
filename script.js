console.log('yah tak sahi hai 7');


const boxes = document.querySelectorAll(".box");
const gameinfo = document.querySelector(".game-info");
const newgamebtn = document.querySelector(".btn");

console.log('vhal gaya2');

let currentPlayer;
let gameGrid;


console.log('vhal gaya3');

const winningPosition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

console.log('vhal gaya4');

// function for initial condition

function initGame() {
    

    currentPlayer = "X";
    gameGrid=["","","","","","","","",""];

    // ui pe hi hatana padega
    boxes.forEach((box, index)=>{
        box.innerText = ""; 
        boxes[index].style.pointerEvents = "all";
        box.classList = `box box${index+1}`;
       
    });
    
        newgamebtn.classList.remove('active');
    gameinfo.innerHTML = `Current Player - ${currentPlayer}`;

}

initGame();
console.log('vhal gaya 6');

function swapTurn(){
    if(currentPlayer== "X"){
        currentPlayer="0";

    }else{
        currentPlayer="X"
    }
    
    gameinfo.innerText=`Current Player - ${currentPlayer}`;
}


function checkGameOver(){
    

 let answer = "";
    winningPosition.forEach((position)=>{

        // check ya t empty ya fir same
        if( (gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "") 
            && (gameGrid[position[0]] === gameGrid[position[1]]) && (gameGrid[position[1]] === gameGrid[position[2]])){
                

                if(gameGrid[position[0]] === "X"){
                    answer="X"
                }else{
                    answer = "O";

                }
                boxes.forEach((box) =>{
                     
                    box.style.pointerEvents = "none";

                });

                boxes[position[0]].classList.add("win");
                boxes[position[1]].classList.add("win");
                boxes[position[2]].classList.add("win");
                

             
            }


 });


//  winner milene ke bad
 if(answer !== "" ){
    gameinfo.innerText = `winnner player - ${answer}`;
    newgamebtn.classList.add('active');
    
    return;
 }

// agar ti ho gaya to

 let fillcount = 0;
 gameGrid.forEach((box)=>{
    if(box !== ""){
        fillcount++;
    }
 });

 if(fillcount === 9){
    gameinfo.innerText =`Game Tied !`;
    newgamebtn.classList.add('active')
 }


}


function handleClick(index){
    if(gameGrid[index] === ""){

        boxes[index].innerHTML = currentPlayer;
        gameGrid[index] = currentPlayer;

        
        boxes[index].style.pointerEvents = "none";

        // player swap kardo
        swapTurn();

        // winner delho 
        checkGameOver();
    }
}


boxes.forEach((box,index)=>{
   

    box.addEventListener("click", () => {
        handleClick(index);
    })

});


newgamebtn.addEventListener("click", initGame);




