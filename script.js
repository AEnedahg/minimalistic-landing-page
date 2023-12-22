const menu = document.getElementById('menu');
const navMenu = document.getElementsByClassName('nav-menu')[0];

menu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  
})
