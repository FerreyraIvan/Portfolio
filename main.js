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


const darkToggle = document.querySelector('.dark-mode-toggle');
const body = document.querySelector('body')
darkToggle.addEventListener('click',()=>{
  darkToggle.classList.toggle('d-active');
  body.classList.toggle('active')
})