const NewDate = document.querySelector(".date span");
const cursor = document.querySelector("#mini-circle");

NewDate.innerHTML = new Date().getFullYear();

function cursorMaker() {
    window.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, {
            x: dets.clientX,
            y: dets.clientY,
            duration: 1
        });
    });
}
cursorMaker();

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
