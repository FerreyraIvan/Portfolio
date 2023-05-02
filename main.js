let list = document.querySelectorAll('.li_link');
let headerToggle = document.getElementById('header-toggle')

list.forEach(item => {
    item.addEventListener('click', () => {
      list.forEach(item => {
        item.classList.remove('active');
      });
  
      item.classList.add('active');
    });
  });
/* SIDE BAR - TOGGLE */ 

let sideToggle = document.getElementById('header-toggle');
let sideBar = document.querySelector('.side-bar')
sideToggle.addEventListener('click', ()=>{
  if(!sideBar.classList.contains('side-bar-active') ){
    headerToggle.classList.replace('bx', 'fa-solid');
    headerToggle.classList.replace('bx-menu', 'fa-xmark');
    sideBar.classList.toggle('side-bar-active');
    sideBar.style.display = 'block';
  }else{
    sideBar.classList.toggle('side-bar-active');
    headerToggle.classList.replace('fa-solid', 'bx');
    headerToggle.classList.replace('fa-xmark', 'bx-menu');
    sideBar.style.display = 'none';
  }
})


const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

/* DARK / LIGHT - TOGGLE */
const darkToggle = document.querySelector('.dark-mode-toggle');
const body = document.querySelector('body');
let getMode = localStorage.getItem('mode');

if(getMode === 'light'){
  body.classList.add('active')
}




darkToggle.addEventListener('click',()=>{

  darkToggle.classList.toggle('d-active');

  body.classList.toggle('active')

  if(body.classList.contains('active')){
    return localStorage.setItem("mode", "light")
  } 
    localStorage.setItem("mode", "dark")
})

const headerIndicator = document.getElementById('header-indicator')

window.addEventListener('load', ()=>{
  setTimeout(() => {
    headerIndicator.style.opacity = '0'
  }, 2000);
  if(getMode === 'light'){
    headerIndicator.style.color = '#171817'
  }
  
})