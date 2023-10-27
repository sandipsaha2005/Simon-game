let gameseq=[];
let userseq=[];
let level=0;
let started=false;
let btns=['red','blue','green','yellow'];
let h3=document.querySelector('h3');
let allbtns=document.querySelectorAll('.box');
let start=document.querySelector('.start');
let restBtn=document.querySelector('.reset');
let song=new Audio('music.mp3');
let sound=new Audio('sound.mp3');

start.addEventListener('click',function(){
    if(started==false){
        started=true;
        let name=prompt("enter your name : ");
        song.play();
        startGame();
    }
})


function sysFlash(btn){
    btn.classList.add('sysFlash');
    setTimeout(() => {
        btn.classList.remove('sysFlash');
    }, 250);
}



function userFlash(btn){
    btn.classList.add('userFlash');
    setTimeout(() => {
        btn.classList.remove('userFlash');
    }, 250);
}



function startGame(){
    level++;
    h3.innerText=`your level is ${level}`;
    let randNo=Math.floor(Math.random()*4);
    let randBtnName=btns[randNo];
    let randBtn=document.querySelector(`.${randBtnName}`);
    sysFlash(randBtn);
    gameseq.push(randBtnName);
    console.log(gameseq);
}


for(btn of allbtns){
    btn.addEventListener('click',pressBtn);
}


function pressBtn(){
    let btn=this;
    userFlash(btn);
    let userBtn=btn.getAttribute('id');
    userseq.push(userBtn);
    chekcWin();
    // sound.play();
}



function arrayCheck(arr1,arr2){
    if(arr1.length!==arr2.length){
        return false;
    }
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!==arr2[i]){
            return false;
        }
    }
    
    return true;
}


function chekcWin(){
    if(userseq.length===gameseq.length){
        if(arrayCheck(gameseq,userseq)){
            userseq=[];
            setTimeout(startGame,500);
        }else{
            alert('wrong');
            h3.innerText=`your score is ${level};`
            
            
        }
    }

}


function resetGame(){
    gameseq=[];
    userseq=[];
    level=0;
    started=false
    h3.innerText='Press start to start the game';
    song.pause();
}


restBtn.addEventListener('click',resetGame);