let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "green", "red", "purple"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("Game is start");
        started=true;

        levelUp();
    }
})

function gameFlash(btn){
  btn.classList.add("flash");   
  setTimeout(function(){
    btn.classList.remove("flash");
  }, 300);
}

function userflash(btn){
  btn.classList.add("userflash");   
  setTimeout(function(){
    btn.classList.remove("userflash");
  }, 300);
}

function levelUp(){
  userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
   
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx]; 
    let randBtn = document.querySelector(`.${randColor}`);
    
    gameSeq.push(randColor);
    
    console.log(gameSeq);
    
    gameFlash(randBtn);
}

function checkAns(idx){
  if(userSeq[idx]===gameSeq[idx]){
   if(userSeq.length==gameSeq.length){
   setTimeout(levelUp, 1000);
   }
  }else{
      h2.innerHTML = `Game Over! your score was <b>${level}</b> <br>Press any key to start the game.`;
      document.querySelector("body").style.backgroundColor = "red";
      setTimeout(function(){
         document.querySelector("body").style.backgroundColor= "rgba(235, 230, 222, 1)";
      }, 160);
      reset();
  }
}

function btnPress(){
  let btn  = this;
  userflash(btn);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length-1); 
}

let allBtn  = document.querySelectorAll(".btn");
for(btn of allBtn){
  btn.addEventListener("click", btnPress);
}


function reset(){
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;

}


























































































































