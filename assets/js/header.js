const headerBody = document.querySelector('body'); 
const btnLogin1 = document.querySelector('.login2');
const btnLogin2 = document.querySelector('.login2');
const btnLogout = document.querySelector('.header__top--right__item.logout');
const mobileMenuBtn = document.querySelector('.home__banner--mobile__bottom');
const loginChecker = document.querySelector('.header__top--right__item--checker');
const hamburgerBtn = document.querySelector('.header__top--left__hamburger');
const btnCloseLoginSignForm = document.querySelector('.login__signup--box__close');
const btnOpenLoginSignFormPc1 = document.querySelector('.header__top--right__item.open__login--signup__form');
const btnOpenLoginSignFormPc2 = document.querySelector('.header__top--right__itemlast.open__login--signup__form');
const btnOpenLoginSignForm = document.querySelector('.open__login--signup__form ion-icon');
const btnTransEmailLoginSignForm = document.querySelector('#login__signup--box__container--main__btn--email');
const btnTransNumberLoginSignForm = document.querySelector('#login__signup--box__container--main__btn--numberphone');

window.onload=function(){
    mobileMenuBtn.addEventListener('click',mobileMenu);
    hamburgerBtn.addEventListener('click',hamburger);
}

function mobileMenu() {
    headerBody.classList.toggle('active');
}
// mobileMenuBtn.addEventListener('click',()=>{
//     headerBody.classList.toggle('active');
// })
hamburgerBtn.addEventListener('click',()=>{
    headerBody.classList.toggle('active');
})

btnLogin2.addEventListener('click',()=>{
    headerBody.classList.add('checker');
})
btnLogin1.addEventListener('click',()=>{
    headerBody.classList.add('checker');
})
btnLogout.addEventListener('click',()=>{
    headerBody.classList.remove('checker');
})

btnOpenLoginSignForm.addEventListener('click',()=>{
    headerBody.classList.add('LoginSignUpForm');
})
btnOpenLoginSignFormPc1.addEventListener('click',()=>{
    headerBody.classList.add('LoginSignUpForm');
})
btnOpenLoginSignFormPc2.addEventListener('click',()=>{
    headerBody.classList.add('LoginSignUpForm');
})
btnCloseLoginSignForm.addEventListener('click',()=>{
    headerBody.classList.remove('LoginSignUpForm');
})
btnTransEmailLoginSignForm.addEventListener('click',()=>{
    headerBody.classList.add('TransLoginSignForm');
})
btnTransNumberLoginSignForm.addEventListener('click',()=>{
    headerBody.classList.remove('TransLoginSignForm');
})
