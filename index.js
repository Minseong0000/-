// ***** vertical progress-bar *****
document.addEventListener("DOMContentLoaded", function () {
  const jobsSection = document.querySelector(".jobs");

  const progress = () => {
    // 문서 전체 높이. 스크롤바로 숨겨진 부분까지 포함
    const scrollHtJs = document.documentElement.scrollHeight;
    const visualHt = document.querySelector(".main-visual").scrollHeight;

    // 스크롤바 미포함 브라우저 내부 높이
    const clientHtjQ = $(window).height();
    const clientHtJs = document.documentElement.clientHeight;
    console.log(clientHtjQ, clientHtJs);

    // .jobs 섹션의 top이 뷰포트의 top을 지난 경우에만 프로그레스 바 업데이트
    const jobsTop = jobsSection.getBoundingClientRect().top;
    const scrollY = window.scrollY - visualHt;

    if (jobsTop <= 0) {
      const total = scrollHtJs - clientHtJs - visualHt;

      const preWt = (scrollY / total) * 100;

      $(".progress-bar").css({ width: preWt + "%" });
    } else {
      // 스크롤이 .jobs 섹션 이전으로 돌아간 경우, 프로그레스 바 숨기기
      $(".progress-bar").css({ width: "0%" });
    }
  };

  $(window).on("scroll", () => {
    requestAnimationFrame(progress);
  });
});
// ***** circular progress-bar *****
document.addEventListener("DOMContentLoaded", function () {
  const jobsSection = document.querySelector(".jobs");
  const visualHt = document.querySelector(".main-visual").scrollHeight;

  let scrollPercentage = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop - visualHt;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight -
      visualHt;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    // Check the position of the .jobs section
    let jobsTop = jobsSection.getBoundingClientRect().top;

    if (jobsTop <= 0) {
      scrollProgress.style.background = `conic-gradient(red ${scrollValue}%, transparent ${scrollValue}%)`;
      progressValue.textContent = `${scrollValue}%`;
    } else {
      scrollProgress.style.background = `conic-gradient(transparent 0%, transparent 100%)`;
      progressValue.textContent = ``;
    }
  };

  window.onscroll = scrollPercentage;
});

//li reveal
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const listItems = document.querySelectorAll(
    ".side-bar .progress .sec-title li"
  );

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(showListItem, options);

  sections.forEach((section) => {
    observer.observe(section);
  });

  function showListItem(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Get the index of the current section
        const index = Array.from(sections).indexOf(entry.target) - 1; // Start from second section

        // Remove the .show class from all li elements
        listItems.forEach((item) => item.classList.remove("show"));

        // Add the .show class to the corresponding li element
        if (index >= 0 && listItems[index]) {
          listItems[index].classList.add("show");
        }
      }
    });
  }
});

// ***** video pin *****
gsap.registerPlugin(ScrollTrigger);

gsap.to(".main-visual", {
  scrollTrigger: {
    trigger: ".main-visual",
    start: "top top",
    end: "+=500px",
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

// background-change
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // 50% threshold
  };

  const observer = new IntersectionObserver(changeBackgroundColor, options);

  sections.forEach((section) => {
    observer.observe(section);
  });

  function changeBackgroundColor(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const newColor = entry.target.getAttribute("data-bgcolor");
        if (newColor) {
          document.body.style.backgroundColor = newColor;
        }
      }
    });
  }
});

//life-typo
document.addEventListener("DOMContentLoaded", function () {
  const targetSection = document.getElementsByClassName("main-life")[0];
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // 50% threshold
  };

  const observer = new IntersectionObserver(changeOpacity, options);
  if (targetSection) {
    observer.observe(targetSection);
  }

  function changeOpacity(entries) {
    const entry = entries[0];
    const content = entry.target.querySelector(".life-inner .life-typo p");
    if (content) {
      // 요소가 존재하는지 확인합니다
      if (
        entry.isIntersecting &&
        entry.boundingClientRect.top < window.innerHeight / 2
      ) {
        content.style.opacity = "1";
      } else {
        content.style.opacity = "0";
      }
    }
  }
});

//people-symbol
document.addEventListener("DOMContentLoaded", function () {
  const targetSection = document.getElementsByClassName("main-people")[0];
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // 50% threshold
  };

  const observer = new IntersectionObserver(changeStyle, options);
  if (targetSection) {
    observer.observe(targetSection);
  }

  function changeStyle(entries) {
    const entry = entries[0];
    const contents = entry.target.querySelectorAll(".content");
    if (contents.length > 0) {
      // 요소가 존재하는지 확인합니다
      if (
        entry.isIntersecting &&
        entry.boundingClientRect.top < window.innerHeight / 2
      ) {
        for (let i = 0; i < contents.length; i++) {
          const styleType = contents[i].dataset.style;
          if (styleType === "opacity") {
            contents[i].style.opacity = "1";
          } else if (styleType === "color") {
            contents[i].style.color = "#242424";
          } else if (styleType === "border") {
            contents[i].style.border = "2px solid #242424";
          }
        }
      } else {
        for (let i = 0; i < contents.length; i++) {
          const styleType = contents[i].dataset.style;
          if (styleType === "opacity") {
            contents[i].style.opacity = "0";
          } else if (styleType === "color") {
            contents[i].style.color = "#fafafa";
          } else if (styleType === "border") {
            contents[i].style.border = "2px solid #fafafa";
          }
        }
      }
    }
  }
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

//slick slider - story

$(document).ready(function () {
  var $slick = $(".slick-track");

  $slick.slick({
    dots: false,
    infinite: false,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    /*    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"), */
    cssEase: "ease",
    variableWidth: true,
  });

  $slick.on("afterChange", function (event, slick, currentSlide) {
    if (currentSlide === slick.$slides.length - 3) {
      setTimeout(function () {
        $slick.slick("slickGoTo", 0); // Slide back to the beginning
      }, 2000); // Optional delay
    }
  });
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

//scroll 

document.addEventListener("DOMContentLoaded", function() {
  const targetSection = document.querySelector('.jobs');
  const otherSection = document.querySelector('.footer-btn-wrapper');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
        otherSection.classList.add('progress');
      } else if (entry.isIntersecting) {
        otherSection.classList.remove('progress');
      }
    });
  }, {
    rootMargin: '-100% 0px 0px 0px'
  });

  observer.observe(targetSection);
});

//bthn position
/* document.addEventListener("DOMContentLoaded", function() {
  const mainStory = document.querySelector('.main-story');
  const btnWrapper = document.querySelector('.footer-btn-wrapper');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting && entry.boundingClientRect.bottom < 0) {
        btnWrapper.classList.add('absolute');
      } else if (entry.isIntersecting || entry.boundingClientRect.bottom >= 0) {
        btnWrapper.classList.remove('absolute');
      }
    });
  }, {
    rootMargin: '0px 0px -100% 0px'
  });

  observer.observe(mainStory);
});
 */
