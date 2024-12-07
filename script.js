const NewDate = document.querySelector(".date span");
const cursor = document.querySelector("#mini-circle");
const ELEM = document.querySelectorAll(".elem");
const loading = document.querySelector("#preloader");
const serviceCards = document.querySelectorAll('.service-card');

NewDate.innerHTML = new Date().getFullYear();


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

    // Initialize service cards animation
   
}

function setupServiceCards() {
    serviceCards.forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            scale:0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: card,
                start: "top 100%",
                end: "top 100%",
                toggleActions: "play none none reverse",
                
            }
        });

        // Add hover animation
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                duration: 1.5,
                ease: "power2.out"
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                duration: 1.5,
                ease: "power2.out"
            });
        });
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

// Initialization function
function init() {
    // Initialize cursor
    cursorMaker();
    
    // Hide preloader
    gsap.to(loading, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
            loading.style.display = "none";
        }
    });

    // Start first page animation
    firstPageAnimation();
    setupServiceCards();
}

// Start everything on load
window.addEventListener("load", init);

// Handle resize events
window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
});