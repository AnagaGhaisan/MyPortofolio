// toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// scroll section active link

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll= () => {
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

    // remove toggle and navbar when scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
// scroll reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200

});
ScrollReveal().reveal('.home-content, .heading, .portofolio',{origin: ('top')});
ScrollReveal().reveal('.about-img, .service-container, contact form',{origin: ('left')});
ScrollReveal().reveal('.home-img, .about-content, .services-container',{origin: ('right')});
ScrollReveal().reveal('.adress-container, form, .portofolio-container',{origin: ('bottom')});
// typed js
const typed = new Typed('.multiple',{
    strings:['Front-End Developer', 'Android Developer', 'Student'],
    typespeed: 100,
    backspeed: 300,
    backdelay: 1000,
    loop: true

});