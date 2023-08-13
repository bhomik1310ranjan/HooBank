import './style.css';

'use strict';

const preloader = document.querySelector('#preloader');

window.addEventListener('load', () => {
    preloader.classList.add('opacity-0');
    preloader.classList.add('invisible');
    document.body.classList.remove('overflow-hidden');
});

const navbar = document.querySelector('#navbar');
const menuButton = document.querySelector('#menu-button');
const mobileMenu = document.querySelector('#mobile-menu');

let menuOpen = false;

const openMenu = () => {
    navbar.classList.add('navbar-menu-opened');
    menuButton.classList.add('toggle-menu-button');
    mobileMenu.classList.remove('translate-x-full');
    document.body.classList.add('overflow-hidden');
    menuOpen = true;
}

const closeMenu = () => {
    navbar.classList.remove('navbar-menu-opened');
    menuButton.classList.remove('toggle-menu-button');
    mobileMenu.classList.add('translate-x-full');
    document.body.classList.remove('overflow-hidden');
    menuOpen = false;
}

const toggleMenu = () => {
    if(!menuOpen){
        openMenu();
    }else{
        closeMenu();
    }
};

menuButton.addEventListener('click', toggleMenu);
mobileMenu.addEventListener('click', toggleMenu);

window.addEventListener('resize', () => {
    if(window.innerWidth > 768 && menuOpen){
        closeMenu();
    }
});

window.addEventListener('scroll', () => {
    navbar.classList[window.scrollY > 100 ? 'add' : 'remove']('navbar-active');    
});

const leftSectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.remove('left-section');
            observer.unobserve(entry.target);
        }
    });
});

const leftSectionElements = document.querySelectorAll('.left-section');
leftSectionElements.forEach(element => leftSectionObserver.observe(element));

const rightSectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.remove('right-section');
            observer.unobserve(entry.target);
        }
    });
});

const rightSectionElements = document.querySelectorAll('.right-section');
rightSectionElements.forEach(element => rightSectionObserver.observe(element));

const heroRightSectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.remove('right-hero-section');
            observer.unobserve(entry.target);
        }
    });
});

const heroRightSectionElement = document.querySelector('.right-hero-section');
heroRightSectionObserver.observe(heroRightSectionElement);

const counterSectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            const counterElements = document.querySelectorAll('.counter');
            const steps = 20;
            counterElements.forEach((currentElement) => {
                const targetValue = parseInt(currentElement.getAttribute('data-target'));
                let initialValue = 0;
                const incrementNumber = targetValue/steps;
                const counter = setInterval(() => {
                    initialValue += incrementNumber;
                    currentElement.innerText = initialValue;
                    if(initialValue === targetValue){
                        clearInterval(counter);
                    }
                }, 100);
            });
            observer.unobserve(entry.target);
        }
    });
});

const counterSection = document.querySelector('#counter-section');
counterSectionObserver.observe(counterSection);

const fromDownObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.remove('from-down');
            observer.unobserve(entry.target);
        }
    });
});

const fromDownElement = document.querySelectorAll('.from-down');
fromDownElement.forEach((element) => fromDownObserver.observe(element));

const opacityZeroElementObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
        }
    });
});

const testimonialElements = document.querySelectorAll('.testimonial-card');
testimonialElements.forEach(element => opacityZeroElementObserver.observe(element));

const footer = document.querySelector('.footer');
opacityZeroElementObserver.observe(footer);