const menuMobile = document.querySelector("#menu-mobile")
const menuNavbar = document.querySelector("#menu-navbar")
const navbar = document.querySelector("#navbar")

menuMobile.addEventListener("click",()=>{
  menuNavbar.classList.toggle("active-nav")
  menuNavbar.classList.toggle("inactive-nav")
})

//animate navbar

window.addEventListener("scroll",()=>{
  const windowPosition = window.scrollY > 0;
  navbar.classList.toggle("scroll-nav",windowPosition)
})