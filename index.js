// ***** vertical progress-bar *****
const progress = () => {
  // 문서 전체 높이. 스크롤바로 숨겨진 부분까지 포함
  const scrollHtjQ = $(document).height();
  const scrollHtJs = document.documentElement.scrollHeight;
  // console.log(scrollHtjQ, scrollHtJs);

  // 스크롤바 미포함 브라우저 내부 높이
  const clientHtjQ = $(window).height();
  const clientHtJs = document.documentElement.clientHeight;
  console.log(clientHtjQ, clientHtJs);

  const total = scrollHtJs - clientHtJs;

  const preWt = (scrollY / total) * 100;

  $(".progress-bar").css({ width: preWt + "%" });
};

// addEventListener('scroll', () => {})
$(window).on("scroll", () => {
  requestAnimationFrame(progress);
});

// ***** circular progress-bar *****
let scrollPercentage = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  scrollProgress.style.background = `conic-gradient(red ${scrollValue}%, transparent ${scrollValue}%)`;
};
window.onscroll = scrollPercentage;
// window.onload = scrollPercentage;

// ***** video pin *****
gsap.registerPlugin(ScrollTrigger);

gsap.to(".main-visual", {
  scrollTrigger: {
    trigger: ".main-visual",
    start: "top top",
    end: "+=100px",
    scrub: true,
    markers: false,
    pin: true,
  },
  duration: 3,
});

// ***** scroll Y *****
const elem = document.documentElement;
$(window).on("scroll", () => {
  if (scrollY > 1) {
    $(".side-bar").addClass("on");
    $(".footer-btn-wrapper").addClass("on");
    $(".main-visual .main-inner .main-slogan").addClass("on");
    $(".main-visual .main-inner .main-job").addClass("on");
    $(".main-visual .video-wrapper .youtube").addClass("on");
    $(".side-bar .btn-home .nav-home").addClass("on");
    $(".side-bar .btn-job .nav-job").addClass("on");
  } else {
    $(".side-bar").removeClass("on");
    $(".footer-btn-wrapper").removeClass("on");
    $(".main-visual .main-inner .main-slogan").removeClass("on");
    $(".main-visual .main-inner .main-job").removeClass("on");
    $(".main-visual .video-wrapper .youtube").removeClass("on");
    $(".side-bar .btn-home .nav-home").removeClass("on");
    $(".side-bar .btn-job .nav-job").removeClass("on");
  }
});

// swiper

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  effect: "slide", // Can be 'slide', 'fade', 'cube', 'coverflow', 'flip'
  speed: 500, // Transition speed
});
