const headerBody = document.querySelector('body'); 
const mobileMenuBtn = document.querySelector('.home__banner--mobile__bottom');
const hamburgerBtn = document.querySelector('.header__top--left__hamburger');
const btnCloseLoginSignForm = document.querySelector('.login__signup--box__close');
const btnOpenLoginSignFormPc = document.querySelector('.header__top--right__itemlast.open__login--signup__form');
const btnOpenLoginSignForm = document.querySelector('.open__login--signup__form ion-icon');
const btnTransEmailLoginSignForm = document.querySelector('#login__signup--box__container--main__btn--email');
const btnTransNumberLoginSignForm = document.querySelector('#login__signup--box__container--main__btn--numberphone');

mobileMenuBtn.addEventListener('click',()=>{
    headerBody.classList.toggle('active');
})
hamburgerBtn.addEventListener('click',()=>{
    headerBody.classList.toggle('active');
})
btnOpenLoginSignForm.addEventListener('click',()=>{
    headerBody.classList.add('LoginSignUpForm');
})
btnOpenLoginSignFormPc.addEventListener('click',()=>{
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
