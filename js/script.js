const lenis = new Lenis()
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)


// Mouse Follow

let circleElement = document.querySelector(".circle");

const mouse = { x: 0, y: 0 };
const circle = { x: 0, y: 0 };

window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

const speed = 0.175;

const tick = () => {
    circle.x += (mouse.x - circle.x) * speed;
    circle.y += (mouse.y - circle.y) * speed;

    const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

    circleElement.style.transform = `${translateTransform}`;

    window.requestAnimationFrame(tick);
};

tick();






// Animations

let header = document.getElementById("header");

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add("head__scrolled")
    } else {
        header.classList.remove("head__scrolled")
    }
})


let tl = gsap.timeline();

tl.from('.logo', { y: -200 }, 0.5)
    .from('.nav a', { y: -200, stagger: 0.1 }, "<")
    .from('.register', { x: 200, duration: 0.5 }, "<")
    .from('.hero-section-left', { x: -1000, stagger: 0.1, duration: 0.5 }, "<")
    .from('.hero-section-right', { x: 700, stagger: 0.1, duration: 0.5 }, "<")



// Scroll Triggers

let elements = document.querySelectorAll('.to-observe');

const options = {
    root: null,
    threshold: 0,
    rootMargin: "150px 200px 50px",
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, options);


setTimeout(() => {
    elements.forEach((element) => {
        observer.observe(element);
    });
}, 500)

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

let nav = document.getElementById('nav');

function closeOverlay() {
    nav.style.right = '-100%';
    nav.style.display = 'none'
}

function openOverlay() {
    nav.style.right = '0%';
    nav.style.display = 'flex'
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 1023 && nav.style.display == 'none') {
        nav.style.display = 'flex';
    }
})