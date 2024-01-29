const body = document.querySelector('body');
const mobileMenuBtn = document.querySelector('.home__banner--mobile__bottom');
const hamburgerBtn = document.querySelector('.header__top--left__hamburger');

mobileMenuBtn.addEventListener('click',()=>{
    body.classList.toggle('active');
})
hamburgerBtn.addEventListener('click',()=>{
    body.classList.toggle('active');
})