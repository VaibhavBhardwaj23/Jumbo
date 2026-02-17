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

