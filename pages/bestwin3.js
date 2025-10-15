const infoPara = document.getElementById('maxHeightInfo');
const angleD = document.getElementById('angleT');
infoPara.style.maxHeight = "51px";
function triggerInfo() {
  // alert()
  if (infoPara.style.maxHeight == "51px") {
    infoPara.style.maxHeight = "450px"
    infoPara.style.transition = " all 0.6s ease-in-out, max-height 0.6s ease-in-out !important";
    angleD.style.transform = "rotateZ(180deg)"
  }
  else {
    infoPara.style.maxHeight = "51px";
    infoPara.style.transition = " all 0.6s ease-in-out, max-height 0.6s ease-in-out !important";
    angleD.style.transform = "rotateZ(0deg)"
  }


}


const infoPara2 = document.getElementById('maxHeightInfo2');
const angleD2 = document.getElementById('angleT2');
infoPara2.style.maxHeight = "51px";
function triggerInfo2() {
  // alert()
  if (infoPara2.style.maxHeight == "51px") {
    infoPara2.style.maxHeight = "450px"
    infoPara2.style.transition = " all 0.6s ease-in-out, max-height 0.6s ease-in-out !important";
    angleD2.style.transform = "rotateZ(180deg)"
  }
  else {
    infoPara2.style.maxHeight = "51px";
    infoPara2.style.transition = " all 0.6s ease-in-out, max-height 0.6s ease-in-out !important";
    angleD2.style.transform = "rotateZ(0deg)"
  }


}


const infoPara3 = document.getElementById('maxHeightInfo3');
const angleD3 = document.getElementById('angleT3');
infoPara3.style.maxHeight = "51px";
function triggerInfo3() {
  // alert()
  if (infoPara3.style.maxHeight == "51px") {
    infoPara3.style.maxHeight = "450px"
    infoPara3.style.transition = " all 0.6s ease-in-out, max-height 0.6s ease-in-out !important";
    angleD3.style.transform = "rotateZ(180deg)"
  }
  else {
    infoPara3.style.maxHeight = "51px";
    infoPara3.style.transition = " all 0.6s ease-in-out, max-height 0.6s ease-in-out !important";
    angleD3.style.transform = "rotateZ(0deg)"
  }


}















// Local images you provided (used for both main and thumbs)
const srcList_nw = [
  "../bestwin-images-2/bestwin-blackgold-silver.webp",
  "../bestwin-images-2/bestwin-2-org/bestwin-blackgold-silver-org.webp",
  "../bestwin-images-2/bestwin-blueglass.webp",
  "../bestwin-images-2/bestwin-2-org/bestwin-blueglass-org.jpg"
];

const images_nw = srcList_nw.map(src => ({ main: src, thumb: src }));

const galleryEl_nw = document.getElementById('gallery_nw');
const mainEl_nw = document.getElementById('main_nw');
const thumbsEl_nw = document.getElementById('thumbs_nw');
const prevBtn_nw = document.getElementById('prev_nw');
const nextBtn_nw = document.getElementById('next_nw');

let currentIndex_nw = 0;

// Autoplay config
const AUTOPLAY_DELAY_nw = 2000; // 2 seconds
let autoplayInterval_nw = null;
let isHovered_nw = false;

// Create main image element
function createMainImage_nw(src, idx) {
  const img_nw = document.createElement('img');
  img_nw.className = 'slide-img_nw';
  img_nw.src = src;
  img_nw.alt = `Image ${idx + 1}`;
  img_nw.dataset.index = idx;
  img_nw.style.opacity = '1';
  return img_nw;
}

// initial main
const initialMain_nw = createMainImage_nw(images_nw[0].main, 0);
mainEl_nw.appendChild(initialMain_nw);

// Build thumbnails
images_nw.forEach((it, idx) => {
  const t_nw = document.createElement('img');
  t_nw.className = 'thumb_nw';
  t_nw.src = it.thumb;
  t_nw.alt = `Thumb ${idx + 1}`;
  t_nw.dataset.index = idx;
  if (idx === 0) t_nw.classList.add('active_nw');
  t_nw.addEventListener('click', () => {
    showImage_nw(idx);
    restartAutoplay_nw();
  });
  thumbsEl_nw.appendChild(t_nw);
});

// Center a thumbnail inside the thumbs container (only scrolls the thumbs container)
function centerThumbInView_nw(index) {
  const thumbEl_nw = thumbsEl_nw.querySelector(`.thumb_nw[data-index="${index}"]`);
  if (!thumbEl_nw) return;
  const containerRect_nw = thumbsEl_nw.getBoundingClientRect();
  const thumbRect_nw = thumbEl_nw.getBoundingClientRect();
  // relative position taking into account existing scroll
  const relativeLeft_nw = thumbRect_nw.left - containerRect_nw.left + thumbsEl_nw.scrollLeft;
  const desired_nw = Math.max(0, relativeLeft_nw + (thumbEl_nw.offsetWidth / 2) - (thumbsEl_nw.clientWidth / 2));
  thumbsEl_nw.scrollTo({ left: desired_nw, behavior: 'smooth' });
}

// Show image with slide + fade animation.
function showImage_nw(index) {
  if (index === currentIndex_nw) return;

  // Determine direction so forward/backward (including wrap) animate intuitively
  let direction_nw;
  const nextIndex_nw = (currentIndex_nw + 1) % images_nw.length;
  const prevIndex_nw = (currentIndex_nw - 1 + images_nw.length) % images_nw.length;
  if (index === nextIndex_nw) direction_nw = 1;       // coming from right for "next"
  else if (index === prevIndex_nw) direction_nw = -1; // coming from left for "prev"
  else direction_nw = index > currentIndex_nw ? 1 : -1; // fallback

  const oldImg_nw = mainEl_nw.querySelector('.slide-img_nw');
  const newImg_nw = createMainImage_nw(images_nw[index].main, index);

  // Start new image off-screen at the side
  newImg_nw.style.transform = `translateX(${direction_nw * 100}%)`;
  newImg_nw.style.opacity = '0';
  newImg_nw.style.zIndex = 2;
  mainEl_nw.appendChild(newImg_nw);

  // Force a reflow so the transition will run
  newImg_nw.getBoundingClientRect();

  // Animate new in
  newImg_nw.style.transform = 'translateX(0)';
  newImg_nw.style.opacity = '1';

  // Animate old out
  if (oldImg_nw) {
    oldImg_nw.style.zIndex = 1;
    oldImg_nw.style.transform = `translateX(${-direction_nw * 100}%)`;
    oldImg_nw.style.opacity = '0';
    // remove old element after transition completes
    oldImg_nw.addEventListener('transitionend', function handler(e) {
      if (e.propertyName === 'opacity') {
        if (oldImg_nw.parentNode) oldImg_nw.parentNode.removeChild(oldImg_nw);
        oldImg_nw.removeEventListener('transitionend', handler);
      }
    });
  }

  currentIndex_nw = index;
  updateActiveThumb_nw();
  centerThumbInView_nw(index);
}

function updateActiveThumb_nw() {
  thumbsEl_nw.querySelectorAll('.thumb_nw').forEach(t => {
    t.classList.toggle('active_nw', Number(t.dataset.index) === currentIndex_nw);
  });
}

// Prev/next buttons: move to previous/next image and ensure thumbnail is visible
prevBtn_nw.addEventListener('click', (e) => {
  e.preventDefault();
  const newIndex_nw = (currentIndex_nw - 1 + images_nw.length) % images_nw.length;
  showImage_nw(newIndex_nw);
  restartAutoplay_nw();
  prevBtn_nw.blur();
});
nextBtn_nw.addEventListener('click', (e) => {
  e.preventDefault();
  const newIndex_nw = (currentIndex_nw + 1) % images_nw.length;
  showImage_nw(newIndex_nw);
  restartAutoplay_nw();
  nextBtn_nw.blur();
});

// Autoplay using setInterval
function startAutoplay_nw() {
  stopAutoplay_nw(); // ensure a single interval
  if (images_nw.length <= 1) return;
  autoplayInterval_nw = setInterval(() => {
    if (!isHovered_nw && !document.hidden) {
      const newIndex_nw = (currentIndex_nw + 1) % images_nw.length;
      showImage_nw(newIndex_nw);
    }
  }, AUTOPLAY_DELAY_nw);
}
function stopAutoplay_nw() {
  if (autoplayInterval_nw) {
    clearInterval(autoplayInterval_nw);
    autoplayInterval_nw = null;
  }
}
function restartAutoplay_nw() {
  stopAutoplay_nw();
  startAutoplay_nw();
}

// Pause when the mouse is over the main image (only main image), resume when it leaves
mainEl_nw.addEventListener('mouseenter', () => {
  isHovered_nw = true;
  stopAutoplay_nw();
});
mainEl_nw.addEventListener('mouseleave', () => {
  isHovered_nw = false;
  startAutoplay_nw();
});

// Also pause on touch while interacting with the main image (mobile)
mainEl_nw.addEventListener('touchstart', () => {
  isHovered_nw = true;
  stopAutoplay_nw();
}, { passive: true });
mainEl_nw.addEventListener('touchend', () => {
  isHovered_nw = false;
  startAutoplay_nw();
}, { passive: true });

// Make vertical wheel scroll the thumbnails horizontally (nice UX)
thumbsEl_nw.addEventListener('wheel', (e) => {
  if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
    thumbsEl_nw.scrollLeft += e.deltaY;
    e.preventDefault();
  }
}, { passive: false });

// keyboard arrows for convenience + reset autoplay
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    const newIndex_nw = (currentIndex_nw - 1 + images_nw.length) % images_nw.length;
    showImage_nw(newIndex_nw);
    restartAutoplay_nw();
  } else if (e.key === 'ArrowRight') {
    const newIndex_nw = (currentIndex_nw + 1) % images_nw.length;
    showImage_nw(newIndex_nw);
    restartAutoplay_nw();
  }
});

// Pause autoplay if the page is hidden; resume when visible (but don't start while hovered)
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    stopAutoplay_nw();
  } else if (!isHovered_nw) {
    startAutoplay_nw();
  }
});

// Start autoplay on load
startAutoplay_nw();


(function () {
  const reshuffleBtn_qwe = document.getElementById('reshuffle_qwe');
  const cardsNodeList_qwe = Array.from(document.querySelectorAll('#cardsList_qwe .card_qwe'));

  function shuffle_qwe(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function pickAndShow_qwe() {
    // hide all first
    cardsNodeList_qwe.forEach(c => { c.classList.remove('show_qwe'); c.style.display = 'none'; });

    const indices = cardsNodeList_qwe.map((_, i) => i);
    shuffle_qwe(indices);
    const chosen = indices.slice(0, 4);

    chosen.forEach((i, idx) => {
      const el = cardsNodeList_qwe[i];
      el.style.display = '';
      // staggered reveal
      requestAnimationFrame(() => setTimeout(() => el.classList.add('show_qwe'), idx * 80));
    });
  }

  reshuffleBtn_qwe.addEventListener('click', () => { pickAndShow_qwe(); reshuffleBtn_qwe.focus(); });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', pickAndShow_qwe); else pickAndShow_qwe();
})();






const showPop = document.getElementById("containerPopup");
const formPop = document.getElementById("formPopUp");
function popupMenu(){
  showPop.classList.add("showPop");
  // formPop.classList.add("nowPop")
}
function closePop(){
  showPop.classList.remove("showPop");
  // showPop.style.visibility="hidden";
}
