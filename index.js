document.addEventListener("DOMContentLoaded", () => {
  const icons = document.querySelectorAll(
    "#nav-icon1, #nav-icon2, #nav-icon3, #nav-icon4"
  );
  const menu = document.querySelector(".mobileOptions");

  icons.forEach((icon) => {
    icon.addEventListener("click", function () {
      this.classList.toggle("open");

      /* only toggle menu if this is nav-icon1 */
      if (this.id === "nav-icon1" && menu) {
        menu.classList.toggle("show");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {

  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const dotsWrap = document.querySelector(".carousel-dots");

  if (!track || slides.length === 0) return;

  let index = 0;
  let slideWidth;
  let auto;

  /* CLONE FOR TRUE INFINITE LOOP */
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  track.appendChild(firstClone);
  track.insertBefore(lastClone, slides[0]);

  const allSlides = document.querySelectorAll(".carousel-track .slide");

  function setWidth() {
    slideWidth = allSlides[0].getBoundingClientRect().width;
    moveTo(index + 1, false);
  }

  window.addEventListener("resize", setWidth);
  setWidth();

  function moveTo(i, animate = true){
    if(!animate) track.style.transition = "none";
    else track.style.transition = "transform .6s cubic-bezier(.77,0,.18,1)";
    track.style.transform = `translateX(-${i * slideWidth}px)`;
  }

  /* DOTS */
  slides.forEach((_,i)=>{
    const dot = document.createElement("span");
    if(i===0) dot.classList.add("active");
    dotsWrap.appendChild(dot);
  });

  const dots = dotsWrap.querySelectorAll("span");

  function updateDots(){
    dots.forEach(d=>d.classList.remove("active"));
    dots[index].classList.add("active");
  }

  /* AUTO SLIDE */
  function start(){
    auto = setInterval(()=>{
      index++;
      moveTo(index+1,true);
      updateDots();
    },3500);
  }
  start();

  /* RESET LOOP WITHOUT JUMP */
  track.addEventListener("transitionend",()=>{
    if(index >= slides.length){
      index = 0;
      moveTo(1,false);
    }
    if(index < 0){
      index = slides.length-1;
      moveTo(slides.length,false);
    }
  });

  /* SWIPE SUPPORT */
  let startX=0;
  track.addEventListener("touchstart",e=>{
    clearInterval(auto);
    startX=e.touches[0].clientX;
  });

  track.addEventListener("touchend",e=>{
    const diff=e.changedTouches[0].clientX-startX;
    if(diff>50) index--;
    if(diff<-50) index++;
    moveTo(index+1,true);
    updateDots();
    start();
  });

});


