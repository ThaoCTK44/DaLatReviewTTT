
const closeInfoCarFormBlur = document.querySelector('.header__background--blur__fullview');
const closeInfoCarFormBtn = document.querySelector('.detail__car--info__header--icon');
const detailCarBody = document.querySelector('body');


function openInfoCarFormBtn(){
    detailCarBody.classList.add('InfoCarForm');
}
closeInfoCarFormBtn.addEventListener('click',()=>{
    detailCarBody.classList.remove('InfoCarForm');
})
closeInfoCarFormBlur.addEventListener('click',()=>{
    detailCarBody.classList.remove('InfoCarForm');
})