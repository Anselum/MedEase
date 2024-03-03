const serviceID = 'service_8k2u11u';
const contact_templateID = 'template_trp24nc';

function ContactForm() {
    let contact_name = document.getElementById('contact_name');
    let contact_email = document.getElementById('contact_email');
    let contact_phone = document.getElementById('contact_phone');
    let contact_msg = document.getElementById('contact_textarea');
    try {
        emailjs.send(serviceID, contact_templateID, {
            from_name: contact_name.value,
            from_email: contact_email.value,
            from_phone: contact_phone.value,
            from_msg: contact_msg.value,
        }).then(
            (response) => {
            },
            (error) => {
            },
        );
    } catch (e) {
    }
}


function appointmentForm() {
    let name = document.getElementById("name");
    let age = document.getElementById("age");
    let phone = document.getElementById("phone");
    let time = document.getElementById("time");
    let msg = document.getElementById("msg");

    try {
        emailjs.send(serviceID, contact_templateID, {
            from_name: name.value,
            from_age: age.value,
            from_phone: phone.value,
            from_time: time.value,
            from_msg: msg.value,
        }).then(
            (response) => {
            },
            (error) => {
            },
        );
    } catch (e) {
    }
}


/* 
// Intersection 

let heroSvg = document.getElementById("hero-svg");
let aboutSvg = document.getElementById("about-svg");
let featureSvg = document.getElementById("feature-svg");
let pricingSvg = document.getElementById("pricing-svg");
let contactSvg = document.getElementById("contact-svg");

const sections = document.getElementsByClassName("section");

const targetIds = ['hero', 'about', 'feature', 'pricing', 'contact'];
const svg = [heroSvg, aboutSvg, featureSvg, pricingSvg, contactSvg];

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let el = targetIds.indexOf(entry.target.id);
            svg[el].classList.add("sideBar-active");
        }
        else {
            let el = targetIds.indexOf(entry.target.id);
            svg[el].classList.remove("sideBar-active");
        }
    });
}, options);

Array.from(sections).forEach(section => {
    observer.observe(section);
});



let ob_els = document.querySelectorAll(".to_observe");

const fade_in_options = {
    root: null,
    threshold: 0,
    rootMargin: "150px 200px 50px",
};

const fade_in_observer = new IntersectionObserver((entries, fade_in_observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade_in');
            let trans_delay = entry.target.dataset.delay;
            entry.target.style.transitionDelay = trans_delay ? trans_delay : "0s";
            observer.unobserve(entry.target);

        }
    });
}, fade_in_options)


ob_els.forEach((el) => {
    fade_in_observer.observe(el);
})
 */
