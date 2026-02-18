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

