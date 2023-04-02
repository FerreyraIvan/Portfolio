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


