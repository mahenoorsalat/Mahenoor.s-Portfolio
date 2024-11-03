const NewDate = document.querySelector(".date span");
const cursor = document.querySelector("#mini-circle");
const ELEM = document.querySelectorAll(".elem");
const loading = document.querySelector("#preloader");

NewDate.innerHTML = new Date().getFullYear();

function cursorMaker(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, {
            x: dets.clientX,
            y: dets.clientY,
            scaleX: xscale, 
            scaleY: yscale, 
            duration: 0.5 
        });
    });
}



function skewingMouse() {
    let xscale = 1;
    let yscale = 1;

    let xprev = 0;
    let yprev = 0;

    window.addEventListener("mousemove", function (dets) {
        xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        cursorMaker(xscale, yscale);
    });
}

skewingMouse();

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnimation() {
    var tl = gsap.timeline();

    tl.to(["#nav a", "#nav h4"], {
        y: 0, 
        duration: 0.3, 
        ease: "power2.out" 
    });

    tl.to([".bounding h1", ".fitcontent h1"], {
        y: 0, 
        duration: 0.5, 
        opacity: 0.5, 
        ease: "power2.out" 
    });

    tl.to(".fitcontent p", {
        y: 0,
        duration: 0.3,
        ease: "power2.out", 
        opacity: 1
    });

    tl.to("#head p", { 
        y: 0,
        duration: 0.5,
        ease: "power2.out", 
    });

    tl.from("#heroFooter", {
        opacity: 0
    });
    
}

ELEM.forEach(function(elem){
    elem.addEventListener("mousemove" , function(dets){
       var diff =  dets.clientY - elem.getBoundingClientRect().top;
       gsap.to(elem.querySelector("img") , {
        opacity : 1 , 
        ease : Power1 , 
        top : diff ,
        left : dets.clientX, 
       }) 

       cursor.classList.add("expand");
    })

    elem.addEventListener("mouseleave", function () {
        cursor.classList.remove("expand");
    });
})





window.addEventListener("load" , function(){
    loading.style.display = "none";
})

window.addEventListener('load', firstPageAnimation);
