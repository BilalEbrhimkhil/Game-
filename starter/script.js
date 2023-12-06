'use strict';

const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const bntCloseModal=document.querySelector('.close-modal');
const bntShowModal=document.querySelectorAll('.show-modal'); 

const openModel = function(){

    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModel = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
 

for(let i=0; i < bntShowModal.length; i++){
    
        bntShowModal[i].addEventListener('click', openModel);
    
}
bntCloseModal.addEventListener('click',closeModel);
overlay.addEventListener('click',closeModel);


document.addEventListener('keydown',function(event)
{
console.log(event.key);

if(event.key === 'Escape' && !modal.classList.contains('hidden')){

    closeModel();
}

});