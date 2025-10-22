const preloader = document.querySelector(".preloader");
window.addEventListener("load", function(){
  setTimeout(() => {
    preloader.classList.add("loaded");
  }, 5000);
});

// Scroll on windows header
const header = document.querySelector(".header");
const actionBg = document.querySelector(".action-bg");
window.addEventListener("scroll", function(){
  if (window.scrollY > 100){
    header.classList.add("active");
    actionBg.classList.add("active");
  }else{
    header.classList.remove("active");
    actionBg.classList.remove("active");
  }
});

// Opening the navbar and overlay on clicking the menu button
const menuBtn = document.querySelector(".menu-btn");
const navBar = document.querySelector(".main-nav");
const overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", function(){
  navBar.classList.toggle("active");
  overlay.classList.toggle("open");
  menuBtn.classList.toggle("open");
});
overlay.addEventListener("click", function(){
  overlay.classList.remove("open");
  navBar.classList.remove("active");
  menuBtn.classList.remove("open");
});

// Seek page on clicking the navbarlink
const navBarLinks = document.querySelectorAll(".main-nav-link");
navBarLinks.forEach((navbarlink) => {
  navbarlink.addEventListener("click", function(){
    overlay.classList.remove("open");
    navBar.classList.remove("active");
    menuBtn.classList.remove("open");
  });
});
