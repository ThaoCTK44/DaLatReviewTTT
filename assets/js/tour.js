const primaryDropdown = document.querySelector('.primary__dropdown--button');
// const primaryDropdownHidden = document.querySelector('.primary__dropdown--content');

primaryDropdown.addEventListener('click', ()=> {
    primaryDropdown.classList.toggle('active');
});

  window.primaryDropdown = function() {
    document.getElementById("primaryDropdownHidden").classList.toggle("show");
  };


window.onclick = function(event) {
  if (!event.target.matches('.primary__dropdown--button')) {
    var dropdowns = document.getElementsByClassName("primary__dropdown--content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
