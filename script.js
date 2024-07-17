const scroll = new LocomotiveScroll({
    el: document.querySelector('.main-box'),
    smooth: true
});



document.querySelector("#menu")
.addEventListener("mousehover", function() {
    gsap.to(".hide-ul", {
         top: 0,
         duration: 0.8,
         ease: "power4.out",
    }); 
})
 
document.querySelector("#cross ")
.addEventListener("click", function() {
    gsap.to(".hide-ul", {
        top:'-100vh',
        duration: 0.7,
        ease: "power4.in",
    }); 
})

