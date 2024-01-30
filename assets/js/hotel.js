const btnHotelLocation = document.querySelector('.hotel__left--content.location');
const btnHotelFitter = document.querySelector('.hotel__left--content.fitter');
const btnHotelMobileLocation = document.querySelector('.hotelMobie__header--filter__item.location');
const btnHotelMobileFitter = document.querySelector('.hotelMobie__header--filter__item.fitter');
const btnHotelMobileRange = document.querySelector('.hotelMobie__header--filter__item.range');
const closeHotelMobileLocation = document.querySelector('.hotelMobie__fitter--box__header ion-icon');
const closeHotelMobileFitter = document.querySelector('.hotelMobie__fitter--box__header.fitter ion-icon');
const closeHotelBlur = document.querySelector('.hotel__backgroup--blur');



const hotelBody = document.querySelector('body');
btnHotelLocation.addEventListener('click', ()=>{
    hotelBody.classList.add('listHotelMobileLocation')
})
btnHotelFitter.addEventListener('click', ()=>{
    hotelBody.classList.add('listHotelMobileFitter')
})

btnHotelMobileLocation.addEventListener('click', ()=>{
    hotelBody.classList.add('listHotelMobileLocation')
})
closeHotelMobileLocation.addEventListener('click', ()=>{
    hotelBody.classList.remove('listHotelMobileLocation')
})
closeHotelMobileFitter.addEventListener('click', ()=>{
    hotelBody.classList.remove('listHotelMobileFitter')
})
btnHotelMobileFitter.addEventListener('click', ()=>{
    hotelBody.classList.add('listHotelMobileFitter')
})
btnHotelMobileRange.addEventListener('click', ()=>{
    hotelBody.classList.add('listHotelMobileRange')
    hotelBody.classList.add('hotelBlur')
})
closeHotelBlur.addEventListener('click', ()=>{
    hotelBody.classList.remove('listHotelMobileRange')
    hotelBody.classList.remove('hotelBlur')
    
})
