let list = document.querySelectorAll('.li_link');

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
  sideBar.classList.toggle('side-bar-active');
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