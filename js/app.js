const toggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const menuLinks = document.querySelector(".site-nav ul")

toggle.addEventListener("click", function () {
  if (siteNav.classList.contains("site-nav--open")) {
    siteNav.classList.remove("site-nav--open");
    toggle.classList.remove("open");

    siteNav.classList.add("site-nav--closed", "closing");
    setTimeout(() => {
      siteNav.style.backgroundColor = "inherit"
    }, 750)
  } else {
    siteNav.classList.remove("site-nav--closed", "closing");
    toggle.classList.add("open");

    siteNav.classList.add("site-nav--open");
    siteNav.style.backgroundColor = "white"
  }
});

menuLinks.addEventListener("click", () => {
  if (siteNav.classList.contains("site-nav--open")) {
    siteNav.classList.remove("site-nav--open");
    toggle.classList.remove("open");

    siteNav.classList.add("site-nav--closed", "closing");
    setTimeout(() => {
      siteNav.style.backgroundColor = "inherit"
    }, 750)
  } else {
    siteNav.classList.remove("site-nav--closed", "closing");
    toggle.classList.add("open");

    siteNav.classList.add("site-nav--open");
    siteNav.style.backgroundColor = "white"
  }
})