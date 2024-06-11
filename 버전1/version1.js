// document.addEventListener("DOMContentLoaded", () => {
//   const targetElement = document.getElementById("targetElement");
//   let lastScrollY = window.scrollY;

//   window.addEventListener("scroll", () => {
//     let currentScrollY = window.scrollY;
//     if (scrollY > "10px") {
//       targetElement.classList.add("scrolled");
//     } else {
//       targetElement.classList.remove("scrolled");
//     }
//     lastScrollY = currentScrollY;
//   });
// });

const elem = document.documentElement;
$(window).on("scroll", () => {
  if (scrollY > 1) {
    $(".main-video-text").addClass("on");
    $(".video-text-second").addClass("change");
    $(".video-container").addClass("colorch");
  } else {
    $(".main-video-text").removeClass("on");
    $(".video-text-second").removeClass("change");
    $(".video-container").removeClass("colorch");
  }
});
// ===================================================
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* var appendNumber = 12;
var prependNumber = 1; */
