// document.addEventListener("DOMContentLoaded", function () {
//   var navbarToggle = document.getElementById("navbar_toggle");
//   var navbarMenu = document.querySelector(".navbar_menu");

//   navbarToggle.addEventListener("click", function () {
//     if (navbarMenu.classList.contains("active")) {
//       navbarMenu.classList.remove("active");
//     } else {
//       navbarMenu.classList.add("active");
//     }
//   });
// });

$(document).ready(function () {
  $("#navbar_toggle").click(function () {
    $("#navbar_menu").toggleClass("active");
  });
});
