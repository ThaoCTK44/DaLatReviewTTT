const btnDetailHotelRate = document.querySelector('.detailHotel__info--summary__left.rate');
const btnDetailHotelRate2 = document.querySelector('.detailHotel__list--body__reviews--content__overview--link.rate');
const btnDetailHotelRate3 = document.querySelector('.detailHotel__list--body__reviews--content__item.rate');
const btnDetailHotelPrice = document.querySelector('.detailHotel__list--body__list--wrap__item--right__body.price');
const btnDetailHotelPrice2 = document.querySelector('.detailHotel__list--body__list--wrap__item--right__body.prices');
const btnDetailHotelSlides = document.querySelector('.detailHotel__img.slides');
const btnDetailHotelSlides2 = document.querySelector('.detailHotel__list--body__list--wrap__item--left__img.slides');
const btnDetailHotelSevice = document.querySelector('.detailHotelMobile__info--summary.sevice');
const btnDetailHotelSevice2 = document.querySelector('.detailHotel__list--footer.sevice');
const btnDetailHotelRoom = document.querySelector('.detailHotel__list--body__list--wrap__item--left.room');
const btnDetailHotelTypeRoom = document.querySelector('.detail__list--body__select--rom');


const closeDetailHotelPrice = document.querySelector('.detailHotel__list--body__list--wrapper__icon ion-icon');
const closeDetailHotelRate = document.querySelector('.detailHotel__list--body__reviews--wrap__icon ion-icon');
const closeDetailHotelBlur = document.querySelector('.detailHotel__backgroup--blur');

const ListSlide = document.querySelector('.detailHotelMobile__slides--show__item');
const slides = document.querySelectorAll('.detailHotelMobile__slides--show__item img');
const lenght = slides.length;
let current = 0;

const detailHotelBody = document.querySelector('body');
btnDetailHotelRate.addEventListener('click', ()=>{
    detailHotelBody.classList.add('listDetailHotelRate')
    detailHotelBody.classList.add('detailHotelBlur')
})
btnDetailHotelRate2.addEventListener('click', ()=>{
    detailHotelBody.classList.add('listDetailHotelRate2')
    detailHotelBody.classList.add('detailHotelBlur')
})
btnDetailHotelRate3.addEventListener('click', ()=>{
    detailHotelBody.classList.add('listDetailHotelRate3')
    detailHotelBody.classList.add('detailHotelBlur')
})
btnDetailHotelPrice.addEventListener('click', ()=>{
    detailHotelBody.classList.add('listDetailHotelPrice')
    detailHotelBody.classList.add('detailHotelBlur')
})
btnDetailHotelPrice2.addEventListener('click', ()=>{
    detailHotelBody.classList.add('listDetailHotelPrice2')
    detailHotelBody.classList.add('detailHotelBlur')
})
btnDetailHotelSlides.addEventListener('click', ()=>{
    detailHotelBody.classList.add('listDetailHotelSlides')
    detailHotelBody.classList.add('detailHotelBlur')
})
btnDetailHotelSlides2.addEventListener('click', ()=>{
    detailHotelBody.classList.add('listDetailHotelSlides2')
    detailHotelBody.classList.add('detailHotelBlur')
})
btnDetailHotelSevice.addEventListener('click', ()=>{
    detailHotelBody.classList.add('listDetailHotelSevice')
    detailHotelBody.classList.add('detailHotelBlur')
})
btnDetailHotelSevice2.addEventListener('click', ()=>{
    detailHotelBody.classList.add('listDetailHotelSevice2')
    detailHotelBody.classList.add('detailHotelBlur')
})
btnDetailHotelRoom.addEventListener('click', ()=>{
    detailHotelBody.classList.toggle('listDetailHotelRoom')
})
btnDetailHotelTypeRoom.addEventListener('click', ()=>{
    detailHotelBody.classList.toggle('listDetailHotelTypeRoom')
})
closeDetailHotelPrice.addEventListener('click', ()=>{
  detailHotelBody.classList.remove('listDetailHotelPrice')
  detailHotelBody.classList.remove('listDetailHotelPrice2')

})
closeDetailHotelRate.addEventListener('click', ()=>{
    detailHotelBody.classList.remove('listDetailHotelRate')
    detailHotelBody.classList.remove('listDetailHotelRate2')
    detailHotelBody.classList.remove('listDetailHotelRate3')
})
closeDetailHotelBlur.addEventListener('click', ()=>{
    detailHotelBody.classList.remove('listDetailHotelRate')
    detailHotelBody.classList.remove('listDetailHotelRate2')
    detailHotelBody.classList.remove('listDetailHotelRate3')
    detailHotelBody.classList.remove('listDetailHotelPrice')
    detailHotelBody.classList.remove('listDetailHotelPrice2')
    detailHotelBody.classList.remove('listDetailHotelSlides')
    detailHotelBody.classList.remove('listDetailHotelSlides2')
    detailHotelBody.classList.remove('listDetailHotelSevice')
    detailHotelBody.classList.remove('listDetailHotelSevice2')
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

  const handleChangeSlide = () =>{
    if(current == lenght - 1){
        current = 0;
        let width = slides[0].offsetWidth;
        ListSlide.style.transform = `translateX(0px)`;
    }else{
        current ++;
        let width = slides[0].offsetWidth;
        ListSlide.style.transform = `translateX(${width * -1 * current}px)`;
    }
}

setInterval(handleChangeSlide,4000);
