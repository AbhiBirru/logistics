function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function toggleMenu() {
  var navList = document.getElementById("navList");
  var hamburgerIcon = document.getElementById("hamburgerIcon");
  var closeIcon = document.getElementById("closeIcon");

  navList.classList.toggle("show");
  hamburgerIcon.classList.toggle("hide");
  closeIcon.classList.toggle("show");
}

function toggleDropdown() {
  var dropdownContent = document.getElementById("myDropdown");
  dropdownContent.classList.toggle("show");
}
