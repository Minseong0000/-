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
          document.body.style.backgroundColor = "#FAFAFA";
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
      rootMargin: "-50% 0px -50% 0px",
    }
  );

  observer.observe(lifeTypo);
});

//pin main-life
let o = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-life",
    pin: !0,
    scrub: 1,
    start: "100px top",
    end: "+=4000",
  },
});

o.to(
  ".motion-container.first .img-wrapper.first",
  { y: "10vh", duration: 1 },
  "first01"
);
o.to(
  ".motion-container.first .img-wrapper.second",
  { y: "-17vh", duration: 1 },
  "first01"
);
o.to(
  ".motion-container.first .img-wrapper.third",
  { y: "-8vh", duration: 1 },
  "first01"
);
o.to(
  ".motion-container.first .typo",
  { backgroundSize: "200% 100%", duration: 1 },
  "first01"
);
o.to(
  ".motion-container.first .img-wrapper.first",
  { opacity: 0, duration: 0.3 },
  "first02"
);
o.to(
  ".motion-container.first .img-wrapper.second",
  { opacity: 0, duration: 0.3 },
  "first02"
);
o.to(
  ".motion-container.first .img-wrapper.third",
  { opacity: 0, duration: 0.3 },
  "first02"
);
o.to(
  ".motion-container.first .typo",
  { opacity: 0, duration: 0.3, scale: 0.8 },
  "first02"
);
// first page done

o.from(".motion-container.second .typo", {
  opacity: 0,
  duration: 0.1,
  scale: 0.8,
});
o.from(
  ".motion-container.second .img-wrapper.first",
  { opacity: 0, duration: 0.3 },
  "second01"
);
o.from(
  ".motion-container.second .img-wrapper.second",
  { opacity: 0, duration: 0.3 },
  "second01"
);
o.from(
  ".motion-container.second .img-wrapper.third",
  { opacity: 0, duration: 0.3 },
  "second01"
);
o.to(
  ".motion-container.second .img-wrapper.first",
  { y: "5vh", duration: 1 },
  "second02"
);
o.to(
  ".motion-container.second .img-wrapper.second",
  { y: "-14vh", duration: 1 },
  "second02"
);
o.to(
  ".motion-container.second .img-wrapper.third",
  { y: "35vh", duration: 1 },
  "second02"
);
o.to(
  ".motion-container.second .typo",
  { backgroundSize: "200% 100%", duration: 1 },
  "second02"
);
o.to(
  ".motion-container.second .img-wrapper.first",
  { opacity: 0, duration: 0.3 },
  "second03"
);
o.to(
  ".motion-container.second .img-wrapper.second",
  { opacity: 0, duration: 0.3 },
  "second03"
);
o.to(
  ".motion-container.second .img-wrapper.third",
  { opacity: 0, duration: 0.3 },
  "second03"
);
o.to(
  ".motion-container.second .typo",
  { opacity: 0, duration: 0.3, scale: 0.8 },
  "second03"
);
// second page done
o.from(".motion-container.third .typo", {
  opacity: 0,
  duration: 0.1,
  scale: 0.8,
});
o.from(
  ".motion-container.third .img-wrapper.first",
  { opacity: 0, duration: 0.3 },
  "third01"
);
o.from(
  ".motion-container.third .img-wrapper.second",
  { opacity: 0, duration: 0.3 },
  "third01"
);
o.from(
  ".motion-container.third .img-wrapper.third",
  { opacity: 0, duration: 0.3 },
  "third01"
);
o.to(
  ".motion-container.third .img-wrapper.first",
  { y: "15vh", duration: 1 },
  "third02"
);
o.to(
  ".motion-container.third .img-wrapper.second",
  { y: "-15vh", duration: 1 },
  "third02"
);
o.to(
  ".motion-container.third .img-wrapper.third",
  { y: "-12vh", duration: 1 },
  "third02"
);
o.to(
  ".motion-container.third .typo",
  { backgroundSize: "200% 100%", duration: 1 },
  "third02"
);
o.from(
  ".main-life .life-inner .btn-wrapper",
  { y: "400%", duration: 1 },
  "third02"
);
