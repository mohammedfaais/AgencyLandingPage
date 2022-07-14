let hamburgerMenu = document.getElementById("hamburger");
let navbar = document.getElementById("navbar");


hamburgerMenu.addEventListener("click", function(){
    hamburgerMenu.classList.toggle("active");
    navbar.classList.toggle("active");
})