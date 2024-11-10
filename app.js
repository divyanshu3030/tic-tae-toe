let boxes = document.querySelectorAll(".box");
let resetgame = document.querySelector("#resetgame");
let newgame = document.querySelector("#newgame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");



let turnO =true;

const winpatterns=[
           [0,1,2],
           [0,3,6],
           [0,4,8],
           [1,4,7],
           [2,5,8],
           [3,4,5],
           [6,4,2],
           [6,7,8],
];


//event listener
boxes.forEach((box) => {
 box.addEventListener( "click", ()=> {
 if(turnO){
box.innerText="O";
turnO=false;
}else{
box.innerText="X";
turnO=true;
}
box.disabled=true;//dubara click krne par repeat nhi hoga
checkwinner();
   });
});

const disableBoxes = () => {
 for(let box of boxes) {
    box.disabled= true;
}
};
// when new game start new game was enable

const enableBoxes = () => {
 for(let box of boxes) {
    box.disabled= false;
box.innerText="";
}
};


const showWinner = (winner) =>{
msg.innerText = `congratulations, Winner is ${winner}`;
msgContainer.classList.remove("hide");
disableBoxes();
};

const checkwinner= () => {
  //check winner
  for(pattern of winpatterns){
let pos1val = boxes[pattern[0]].innerText;
let pos2val = boxes[pattern[1]].innerText;
let pos3val = boxes[pattern[2]].innerText;

if(pos1val != "" && pos2val != "" && pos3val != ""){
if(pos1val===pos2val && pos2val===pos3val){
showWinner(pos1val);
   }
  }
 }
};

const resetGame = () => {
 turn0 = true;
enableBoxes();
msgContainer.classList.add("hide"); // new game start hoga winner msg hide krna hai
};

newgame.addEventListener("click", resetGame);
resetgame.addEventListener("click", resetGame);