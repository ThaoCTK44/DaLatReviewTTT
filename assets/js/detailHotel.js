const btnDetailHotelRate = document.querySelector('.detailHotel__info--summary__left.rate');
const btnDetailHotelRate2 = document.querySelector('.detailHotel__list--body__reviews--content__overview.rate');
const closeDetailHotelRate = document.querySelector('.detailHotel__list--body__reviews--wrap__icon ion-icon');
const closeDetailHotelBlur = document.querySelector('.detailHotel__backgroup--blur');

const detailHotelBody = document.querySelector('body');
btnDetailHotelRate.addEventListener('click', ()=>{
    detailHotelBody.classList.add('listDetailHotelRate')
    detailHotelBody.classList.add('detailHotelBlur')
})
btnDetailHotelRate2.addEventListener('click', ()=>{
    detailHotelBody.classList.add('listDetailHotelRate2')
    detailHotelBody.classList.add('detailHotelBlur')
})
closeDetailHotelRate.addEventListener('click', ()=>{
    detailHotelBody.classList.remove('listDetailHotelRate')
})
closeDetailHotelBlur.addEventListener('click', ()=>{
    detailHotelBody.classList.remove('listDetailHotelRate')
    detailHotelBody.classList.remove('detailHotelBlur')

})


function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readMore");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Xem tất cả chính sách"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Rút gọn"; 
      moreText.style.display = "inline";
    }
  }