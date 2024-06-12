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

// slick-slider

$(document).ready(function () {
  var $slickSlider = $(".slick-slider");

  $slickSlider.slick({
    dots: false,
    infinite: false,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"),
    cssEase: "ease",
    variableWidth: true,
  });

  $slickSlider.on("afterChange", function (event, slick, currentSlide) {
    if (currentSlide === slick.$slides.length - 3) {
      setTimeout(function () {
        $slickSlider.slick("slickGoTo", 0); // Slide back to the beginning
      }, 2000); // Optional delay
    }
  });
});

// background-change

document.addEventListener("DOMContentLoaded", (event) => {
  const sectionLife = document.querySelector(".main-life");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.body.style.backgroundColor = "#1F3BD9";
        } else {
          document.body.style.backgroundColor = "#242424";
        }
      });
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "-50% 0px -50% 0px",
    }
  );

  observer.observe(sectionLife);

  /*   const bottomObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          document.body.style.backgroundColor = "#242424";
        }
      });
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "0px 0px -50% 0px",
    }
  );

  bottomObserver.observe(sectionLife); */
});

//life-typo
document.addEventListener("DOMContentLoaded", (event) => {
  const lifeTypo = document.querySelector(".life-inner .life-typo p");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          lifeTypo.style.opacity = "1";
        } else {
          lifeTypo.style.opacity = "0";
        }
      });
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "-50% 0px -33% 0px",
    }
  );

  observer.observe(lifeTypo);
});
