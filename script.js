const NewDate = document.querySelector(".date span");
const cursor = document.querySelector("#mini-circle");
const ELEM = document.querySelectorAll(".elem");
const loading = document.querySelector("#preloader");

NewDate.innerHTML = new Date().getFullYear();

// Custom cursor tracking
function cursorMaker(xscale = 1, yscale = 1) {
    window.addEventListener("mousemove", function (event) {
        gsap.to(cursor, {
            x: event.clientX,
            y: event.clientY,
            scaleX: xscale,
            scaleY: yscale,
            duration: 0.5,
        });
    });
}

cursorMaker(); // Initialize cursor tracking


// Animation for first page load
function firstPageAnimation() {
    const tl = gsap.timeline();

    tl.to(["#nav a", "#nav h4"], {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
    });

    tl.to([".bounding h1", ".fitcontent h1"], {
        y: 0,
        duration: 0.5,
        opacity: 0.5,
        ease: "power2.out",
    });

    tl.to(".fitcontent p", {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
        opacity: 1,
    });

    tl.to("#head p", {
        y: 0,
        duration: 0.5,
        ease: "power2.out",
    });

    tl.from("#heroFooter", {
        opacity: 0,
    });
}

// Interactions with specific elements
ELEM.forEach(function (elem) {
    elem.addEventListener("mousemove", function (event) {
        const diff = event.clientY - elem.getBoundingClientRect().top;

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power1.easeInOut,
            top: diff,
            left: event.clientX,
        });

        cursor.classList.add("expand");
    });

    elem.addEventListener("mouseleave", function () {
        cursor.classList.remove("expand");
    });
});

// Preloader
window.addEventListener("load", function () {
    loading.style.display = "none";
});

// First-page animation trigger
window.addEventListener("load", firstPageAnimation);
