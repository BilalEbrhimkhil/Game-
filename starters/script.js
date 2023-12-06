'use strict';
/*
console.log( document.querySelector(".message").textContent);
document.querySelector(".message").textContent = 'correctNember';
console.log( document.querySelector(".message").textContent);
document.querySelector(".number").textContent=13;
document.querySelector(".score").textContent=10;
document.querySelector('guess').value;
 console.log(document.querySelector('guess').value =23);\
 */



const secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;

 document.querySelector('.number').textContent=secretNumber;

 // check button
document.querySelector('.check').addEventListener('click',function(){
    const guess= Number(document.querySelector('.guess').value);
    console.log('guess');
// no guess 
    if(! guess){

        document.querySelector(".message").textContent = 'No Nember';
     // coerrct number 
    }else if(guess === secretNumber){

        document.querySelector(".message").textContent = 'correctNember';
        document.querySelector('body').style .backgroundColor=' #60b347';
        document.querySelector('.number').style.width='30rem';

    }
// too high
  else if(guess > secretNumber){
    document.querySelector(".message").textContent = 'Too high';
    document.querySelector('.score').textContent = score;
    score--;
  } 
  else if(guess < secretNumber){
    document.querySelector(".message").textContent = 'Too low';
    document.querySelector('.score').textContent = score;
    score--;
  }
  else{
    score=0;
    document.querySelector('.message').textContent='YOU LOST'
  }
}
);