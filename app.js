let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;

let h2=document.querySelector("h2");

let btns=["red","yellow","green","purple"];

document.addEventListener("keypress",function(){
    if(started==false)
        {
            console.log("game is started");
            started=true;
            levelup();
        }

});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}


function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}


function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn= document.querySelector(`.${randColor}`);
    /*console.log(randBtn);
    console.log(randColor);
    console.log(randIdx);*/
    
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameflash(randBtn);

}

function checkAns(idx){
    if(gameSeq[idx]===userSeq[idx]){
        if(userSeq.length==gameSeq.length) {
            setTimeout(levelup,1000);
        }
    } else{
        h2.innerHTML=`Game over! Your score was <b>${level}</b> <br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

        },150);
        reset();
    }    
}


function btnpress(){
    console.log(this);
    let btn= this;
    userflash(btn);

    usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
     gameSeq=[];
     userSeq=[];
     started=0;
     level=0;

}