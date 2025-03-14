let gameSeq=[]
let userSeq=[]

let btns=["red","green","yellow","purple"]

let started=false
let level=0

let h2=document.querySelector("h2")

// Step1:Game started by pressing any key
document.addEventListener("keypress",function(){
    if(started==false){
        alert("Game Started!")
        started=true
    }
    levelUp()
})

//Step2: flashing colors

function gameFlash(btn){
    btn.classList.add("flash")
    setTimeout(()=>{
        btn.classList.remove("flash")
    },500)
}

function userFlash(btn){
    btn.classList.add("userFlash")
    setTimeout(()=>{
        btn.classList.remove("userFlash")
    },500)
}
function levelUp(){
   userSeq=[]
    level++;
    h2.innerText=`level ${level}`;

    let randIdx=Math.floor(Math.random()*4)
    let randColor=btns[randIdx]
    let randBtn=document.querySelector(`.${randColor}`)
    gameSeq.push(randColor)
    console.log(gameSeq)
    gameFlash(randBtn);
   
}

//step4:Check Answer
function checkAns(idx){
  //console.log("current level",level)
  if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
      setTimeout(levelUp,1000)
    }
  }
  else{
    h2.innerHTML=`Game Over! Your Score was<b>${level}</b> <br> press any key to restart`
    let body=document.querySelector("body")
    body.classList.add("bg")
     setTimeout(function(){
       body.style.backgroundColor="white"
     },250)
    reset()
  }
}

// step3: user clicking

function btnPress(){
   
    let btn=this
    userFlash(btn)

    userColor=btn.getAttribute("id")
    userSeq.push(userColor)

    checkAns(userSeq.length-1)
  
  }

let allBtns=document.querySelectorAll(".btn")
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}
//step5: Resetting the game after end
function reset(){
  started=false
  gameSeq=[]
  userSeq=[]
  level=0
}