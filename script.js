


const spans = document.querySelectorAll('.slider-span');
let current = 0;
function showSpan(idx) {
    spans.forEach((span, i) => {
        span.classList.remove('active', 'out');
        if (i === idx) {
            span.classList.add('active');
        }
    });
}
function nextSpan() {
    spans[current].classList.add('out');
    current = (current + 1) % spans.length;
    setTimeout(() => {
        showSpan(current);
    }, 500);
}
function startSlider() {
    showSpan(current);
    setInterval(nextSpan, 3500);
}




//-------------------------- Toggle Menu -----------------------//
// const clickMenu = document.querySelector('#toggleMenu');
const navLinks = document.getElementById('maxHeightNav');
navLinks.style.maxHeight = "0px";
function showM() {
    if (navLinks.style.maxHeight == "0px") {
        navLinks.style.maxHeight = "400px"
        navLinks.style.transition = " all 0.6s ease-in-out, max-height 0.6s ease-in-out !important";
    }
    else {
        navLinks.style.maxHeight = "0px";
        navLinks.style.transition = " all 0.6s ease-in-out, max-height 0.6s ease-in-out !important";
    }
}
function closeMenu() {
    navLinks.style.maxHeight = "0px";
}



// ----------------- Window On Scroll Nav Fixed------------------//

const navbar_Stick = document.getElementById('navB');
navbar_Stick.classList.remove('navbar-nav');
const bannerSection = document.getElementById('bannerSec');

window.addEventListener("scroll", function () {
    if (window.scrollY >= 25) {
        navbar_Stick.classList.add('navbar-nav');
        // bannerSection.style.marginTop = "110px";
        // document.querySelector(".navbar-links").style.top = "14%";

    }
    else {
        navbar_Stick.classList.remove('navbar-nav');
        // bannerSection.style.marginTop = "0";
    }
})




// -------------------Banner Section---------------------//
const imagesSec2 = document.querySelectorAll('.banner-img');
const indicatorsSec2 = document.querySelectorAll('.indicator-line');
let currentImgSec2 = 0;
function showImageSec2(idxSec2) {
    imagesSec2.forEach((imgSec2, iSec2) => {
        imgSec2.style.opacity = (iSec2 === idxSec2) ? '1' : '0';
    });
    indicatorsSec2.forEach((lineSec2, iSec2) => {
        lineSec2.style.width = (iSec2 === idxSec2) ? '100px' : '50px';
        lineSec2.style.background = (iSec2 === idxSec2) ? '#fff' : '#888';
    });
}
function nextImageSec2() {
    currentImgSec2 = (currentImgSec2 + 1) % imagesSec2.length;
    showImageSec2(currentImgSec2);
}
function startBannerSec2() {
    showImageSec2(currentImgSec2);
    setInterval(nextImageSec2, 2500);
}
window.onload = function () {
    startBannerSec2();
    startSlider();
};



//-------------------CAROUSEL----------------------------------//
const wrapper = document.querySelector(".wrapper");
const wrapper2 = document.querySelector(".wrapper2");
const wrapper3 = document.querySelector(".wrapper3");

const carousel = document.querySelector(".carousel");
const carousel2 = document.querySelector(".carousel2");
const carousel3 = document.querySelector(".carousel3");

const arrowBtns = document.querySelectorAll(".wrapper i");
const arrowBtns2 = document.querySelectorAll(".wrapper2 i");
const arrowBtns3 = document.querySelectorAll(".wrapper3 i");

const firstCardWidth = carousel.querySelector(".card").offsetWidth;

let isDragging = false, startX, startScrollLeft, timeoutId;
let isDragging3 = false, startX3, startScrollLeft3, timeoutId3;

const carouselChildrens = [...carousel.children];
const carousel2Childrens = [...carousel2.children];
const carousel3Childrens = [...carousel3.children];

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
let cardPerView2 = Math.round(carousel2.offsetWidth / firstCardWidth);
let cardPerView3 = Math.round(carousel3.offsetWidth / firstCardWidth);

carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
})
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
})
carousel2Childrens.slice(-cardPerView2).reverse().forEach(card2 => {
    carousel2.insertAdjacentHTML("afterbegin", card2.outerHTML);
})
carousel2Childrens.slice(0, cardPerView2).forEach(card2 => {
    carousel2.insertAdjacentHTML("beforeend", card2.outerHTML);
})
carousel3Childrens.slice(-cardPerView3).reverse().forEach(card3 => {
    carousel3.insertAdjacentHTML("afterbegin", card3.outerHTML);
})
carousel3Childrens.slice(0, cardPerView3).forEach(card3 => {
    carousel3.insertAdjacentHTML("beforeend", card3.outerHTML);
})

let isDragging2 = false, startX2, startScrollLeft2, timeoutId2;

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left-1" ? -firstCardWidth : firstCardWidth;
    })
})
arrowBtns2.forEach(btn2 => {
    btn2.addEventListener("click", () => {
        carousel2.scrollLeft += btn2.id === "left-2" ? -firstCardWidth : firstCardWidth;
    })
})
arrowBtns3.forEach(btn3 => {
    btn3.addEventListener("click", () => {
        carousel3.scrollLeft += btn3.id === "left-3" ? -firstCardWidth : firstCardWidth;
    })
})


const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragStart2 = (e) => {
    isDragging2 = true;
    carousel2.classList.add("dragging");
    startX2 = e.pageX;
    startScrollLeft2 = carousel2.scrollLeft;
}

const dragStart3 = (e) => {
    isDragging3 = true;
    carousel3.classList.add("dragging");
    startX3 = e.pageX;
    startScrollLeft3 = carousel3.scrollLeft;
}


const dragging = (e) => {
    if (!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    //   carousel.scrollLeft = e.pageX;
}

const dragging2 = (e) => {
    if (!isDragging2) return;
    carousel2.scrollLeft = e.pageX;
    carousel2.scrollLeft = startScrollLeft2 - (e.pageX - startX2);
}

const dragging3 = (e) => {
    if (!isDragging3) return;
    carousel3.scrollLeft = e.pageX;
    carousel3.scrollLeft = startScrollLeft3 - (e.pageX - startX3);
}


const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}
const dragStop2 = () => {
    isDragging2 = false;
    carousel2.classList.remove("dragging");
}

const dragStop3 = () => {
    isDragging3 = false;
    carousel3.classList.remove("dragging");
}


const autoPlay = () => {
    if (window.innerWidth < 100) return;
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 1500);
}
const autoPlay2 = () => {
    if (window.innerWidth < 100) return;
    timeoutId2 = setTimeout(() => carousel2.scrollLeft += firstCardWidth, 1500);
}
const autoPlay3 = () => {
    if (window.innerWidth < 100) return;
    timeoutId3 = setTimeout(() => carousel3.scrollLeft += firstCardWidth, 1500);
}
autoPlay();
autoPlay2();
autoPlay3();


const infiniteScroll = () => {
    if (carousel.scrollLeft === 0) {
        console.log("left end");
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        console.log("right end");
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
    clearTimeout(timeoutId);
    if (!wrapper.matches(":hover")) autoPlay();
}

const infiniteScroll2 = () => {

    if (carousel2.scrollLeft === 0) {
        console.log("left end");
        carousel2.classList.add("no-transition");
        carousel2.scrollLeft = carousel2.scrollWidth - (2 * carousel2.offsetWidth);
        carousel2.classList.remove("no-transition");
    } else if (Math.ceil(carousel2.scrollLeft) === carousel2.scrollWidth - carousel2.offsetWidth) {
        console.log("right end");
        carousel2.classList.add("no-transition");
        carousel2.scrollLeft = carousel2.offsetWidth;
        carousel2.classList.remove("no-transition");
    }

    clearTimeout(timeoutId2);
    if (!wrapper2.matches(":hover")) autoPlay2();
}

const infiniteScroll3 = () => {

    if (carousel3.scrollLeft === 0) {
        console.log("left end");
        carousel3.classList.add("no-transition");
        carousel3.scrollLeft = carousel3.scrollWidth - (2 * carousel3.offsetWidth);
        carousel3.classList.remove("no-transition");
    } else if (Math.ceil(carousel3.scrollLeft) === carousel3.scrollWidth - carousel3.offsetWidth) {
        console.log("right end");
        carousel3.classList.add("no-transition");
        carousel3.scrollLeft = carousel3.offsetWidth;
        carousel3.classList.remove("no-transition");
    }

    clearTimeout(timeoutId3);
    if (!wrapper3.matches(":hover")) autoPlay3();
}



carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("scroll", infiniteScroll);

document.addEventListener("mouseup", dragStop);
document.addEventListener("mouseup", dragStop2);
document.addEventListener("mouseup", dragStop3);

carousel2.addEventListener("mousemove", dragging2);
carousel2.addEventListener("mousedown", dragStart2);
carousel2.addEventListener("scroll", infiniteScroll2);

carousel3.addEventListener("mousemove", dragging3);
carousel3.addEventListener("mousedown", dragStart3);
carousel3.addEventListener("scroll", infiniteScroll3);

wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

wrapper2.addEventListener("mouseenter", () => clearTimeout(timeoutId2));
wrapper2.addEventListener("mouseleave", autoPlay2);

wrapper3.addEventListener("mouseenter", () => clearTimeout(timeoutId3));
wrapper3.addEventListener("mouseleave", autoPlay3);



window.addEventListener('load', function () {
    const preloader = this.document.getElementById('attach');
    setTimeout(function () {
        preloader.style.transform = 'translateY(-100%)'
        setTimeout(function () {
            preloader.style.display = 'none';
            document.body.style.overflow = 'visible';
        }, 800);
    }, 2200)
})

