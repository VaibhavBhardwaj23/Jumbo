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

/* BUTTONS (can exist multiple times) */
const appStoreBtns = document.querySelectorAll(".appStore");
const playStoreBtns = document.querySelectorAll(".playStore");

/* OVERLAYS */
const overLayIphone = document.querySelector(".overLayIphone");
const overLayAndroid = document.querySelector(".overLayAndroid");

/* BOXES */
const boxI = document.querySelector(".iphoneQRBox");
const boxA = document.querySelector(".androidQRBox");


/* OPEN POPUPS */
appStoreBtns.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    overLayIphone.classList.add("show");
    document.body.classList.add("noScroll");
  });
});

playStoreBtns.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    overLayAndroid.classList.add("show");
    document.body.classList.add("noScroll");
  });
});


/* CLOSE ON OVERLAY CLICK */
overLayIphone.addEventListener("click", ()=>{
  overLayIphone.classList.remove("show");
  document.body.classList.remove("noScroll");
});

overLayAndroid.addEventListener("click", ()=>{
  overLayAndroid.classList.remove("show");
  document.body.classList.remove("noScroll");
});


/* PREVENT CLOSE WHEN CLICKING BOX */
boxI.addEventListener("click", e => e.stopPropagation());
boxA.addEventListener("click", e => e.stopPropagation());


// CTA Functionality
document.querySelector(".downloadApp").addEventListener("click", function(e){
  e.preventDefault();

  const ua = navigator.userAgent.toLowerCase();

  const isAndroid = ua.includes("android");
  const isIOS = /iphone|ipad|ipod/.test(ua);

  if(isAndroid){
    window.location.href = "https://play.google.com/store/apps/details?id=YOUR.APP";
  }
  else if(isIOS){
    window.location.href = "https://apps.apple.com/in/app/jumbo-shop-free-games-win/id6475365928";
  }
});





const carousel = document.querySelector('.carousel');
const slideWrapper = document.querySelector('.carousel__slides');
const slides = document.querySelectorAll('.carousel__slide');
const navdotWrapper = document.querySelector('.carousel__navdots');

const n_slides = slides.length;
const pause = 6000;

let slideWidth = slides[0].offsetWidth;
let gap = Number(getComputedStyle(slideWrapper).columnGap.replace('px','')) || 0;

// create dots
for(let i=0;i<n_slides;i++){
  const b=document.createElement('button');
  if(i===0) b.classList.add('is-active');
  navdotWrapper.appendChild(b);
}
const navdots=document.querySelectorAll('.carousel__navdots button');

function currentIndex(){
  return Math.round(slideWrapper.scrollLeft/(slideWidth+gap));
}

function goto(index){
  slideWrapper.scrollTo({
    left:(slideWidth+gap)*index,
    behavior:'smooth'
  });
}

navdots.forEach((dot,i)=>{
  dot.addEventListener('click',()=>goto(i));
});

slideWrapper.addEventListener('scroll',()=>{
  const c=currentIndex();
  navdots.forEach(d=>d.classList.remove('is-active'));
  if(navdots[c]) navdots[c].classList.add('is-active');
});

// autoplay
let itv;
function play(){
  clearInterval(itv);
  itv=setInterval(()=>{
    let next=currentIndex()+1;
    if(next>=n_slides) next=0;
    goto(next);
  },pause);
}
function stop(){ clearInterval(itv); }

carousel.addEventListener('pointerenter',stop);
carousel.addEventListener('pointerleave',play);
carousel.addEventListener('touchstart',stop);

window.addEventListener('resize',()=>{
  slideWidth=slides[0].offsetWidth;
});

goto(0);
play();


