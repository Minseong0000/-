## 현대모비스 홈페이지 퍼블리싱

### 0. 현대모비스 홈페이지

사용기술: JavaScript, GSAP, Slick-slider, jQuery

작업기간: 2024.06.08 ~ 2024.06.17 (9Days)

작업유형: 개인 프로젝트(기여도 100%)

![현대모비스](https://github.com/Minseong0000/adsf/assets/160007497/7614683e-391d-4d56-ac9f-27197f254542)


---

### 1. 이 프로젝트를 통해 얻고자 하는 게 무엇인가?

- 현재 가진 기술들의 활용도 및 이해를 높이고 싶었다.
- 내가 가진 기술들로 하여금 어디까지 구현이 가능한지, 나 자신을 시험해 보고 싶었다.

---

### 2. 프로젝트를 하며 느낀 점

- 같은 언어라도, 내가 모르는 사용 방식이 너무나 많다는 것을 알게 되었다.
- 코드가 길면 길어질 수록, 수정을 염두에 둔 퍼블리싱 가이드라인의 중요성이 더 깊게 와 닿았다.

---

### 3. 디렉토리 구조
![디렉토리](https://github.com/Minseong0000/adsf/assets/160007497/f88c2fe9-f931-4892-a5d0-5b8188ccb5e9)
---

### 4.문제 & 해결

**문제**

Scroll progress가 원하는 구간부터 진행이 되게 해야 했다.

**해결**

    const  visualHt  =  document.querySelector(".main-visual").scrollHeight;
    const  scrollY  =  window.scrollY  -  visualHt;
    if (jobsTop  <=  0) {

    const  total  =  scrollHtJs  -  clientHtJs  -  visualHt;
    const  preWt  = (scrollY  /  total) *  100;

    $(".progress-bar").css({ width:  preWt  +  "%" });
    } else {
    // 스크롤이 프로그래스 섹션 이전으로 돌아간 경우, 프로그레스 바 숨기기
    $(".progress-bar").css({ width:  "0%" });
    }

미포함 되어야 하는 영역의 높이값을 선언후, 전체 스크롤 높이값에서 빼주었음.

![progress-bar](https://github.com/Minseong0000/adsf/assets/160007497/0b2e2d24-2bc9-4e89-b391-e4bbb98dbde2)
![progress-bar2](https://github.com/Minseong0000/adsf/assets/160007497/819f6533-932c-41be-b7fa-b305dcbb6803)

---

**문제**

각 섹션의 viewport 진입시 다른 배경색 설정을 해야 했다.

**해결**

    document.addEventListener("DOMContentLoaded", function () {
        const  sections  =  document.querySelectorAll("section");
        const  options  = {
    	    root:  null,
    	    rootMargin:  "0px",
    	    threshold:  0.5, // 50% threshold
    	};

        const  observer  =  new  IntersectionObserver(changeBackgroundColor, options);

        sections.forEach((section) => {
    	    observer.observe(section);
        });

        function  changeBackgroundColor(entries) {
    	    entries.forEach((entry) => {
    		    if (entry.isIntersecting) {
    			    const  newColor  =  entry.target.getAttribute("data-bgcolor");
    			    if (newColor) {
    				    document.body.style.backgroundColor  =  newColor;
    				}
    			}
    		});
    	}
    });

각 섹션에 data-bgcolor의 값을 주고, forEach()를 사용하여 각 섹션이 뷰포트 진입시 설정된 data-bgcolor값의 배경색을 가지게 식을 썻다.
![배경](https://github.com/Minseong0000/adsf/assets/160007497/8780d19d-a6b3-4d2e-8418-283d3082b745)
![배경2](https://github.com/Minseong0000/adsf/assets/160007497/135eeafa-c1e6-4c26-9a89-2728e0510adb)


---

### - 프로젝트 후기

**나에게 없는 기술을 습득하는 방법을 깨달았다.**

이번 프로젝트를 통해서 내가 한번도 사용해보지 못한 이펙트들을 사용할 때 이전에는 코드 하나하나를 공부하고 이해하려 했던 반면, 원본 사이트의 소스를 참고하거나 인공지능의 도움을 받아 효율적으로 새로운 기술을 참고, 습득하여 적용시키는 방법들을 배웠다.



<a href="./index.html" target="_blank" style="text-decoration: none;">프로젝트 바로가기</a>
