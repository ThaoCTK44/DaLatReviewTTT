const btnHotelDetail = document.querySelector('.hotel__fitter');
const btnHotelSearch = document.querySelector('.hotel__fitter--search');
const btnHotelRoom = document.querySelector('.hotel__fitter--search.room');
const closeHotelFitterBlur = document.querySelector('.hotel__fitter--blur');

const secondDropDownBody = document.querySelector('body');
btnHotelDetail.addEventListener('click', ()=>{
    secondDropDownBody.classList.add('listHotelFitter')
    secondDropDownBody.classList.add('hotelFitterBlur')
})
btnHotelSearch.addEventListener('click', ()=>{
    secondDropDownBody.classList.add('listHotelSearch')
})
btnHotelRoom.addEventListener('click', ()=>{
    secondDropDownBody.classList.add('listHotelRoom')

})
closeHotelFitterBlur.addEventListener('click', ()=>{
    secondDropDownBody.classList.remove('listHotelFitter')
    secondDropDownBody.classList.remove('listHotelSearch')
    secondDropDownBody.classList.remove('listHotelRoom')
    secondDropDownBody.classList.remove('hotelFitterBlur')

})