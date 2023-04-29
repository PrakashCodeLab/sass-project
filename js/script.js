const navbar=document.querySelector(".navbar__section");
const hamburger=document.querySelector(".hamburger");


hamburger.addEventListener("click",function(e){
    e.preventDefault(); 
    navbar.classList.toggle("nav__mobile--active");
})   
