const entryf = document.querySelector('.entry');
const submitb = document.querySelector('.submitbtn');
const focus = document.querySelector('.ntask');
let nitem =focus.childElementCount;
let storage = [];

function memory(x){
    entryf.value = '';
    const ntask = document.querySelector('.ntask');
    const newe = document.createElement('li');
    newe.innerText = `(${nitem}) ${x}` ;
    newe.classList.add(`li${nitem}`)
    ntask.appendChild(newe)
}
function adding(){
    const limite = document.querySelector('.ntask').childElementCount;
    if(entryf.value !== ''){
        if(limite > 20) return;
        memory(entryf.value);
        nitem++;
    }
}
    
function addbtn() {

    submitb.addEventListener('click',adding);
    entryf.addEventListener('keypress',(e)=>{
        if(e.key === 'Enter') adding();
})}




addbtn();


