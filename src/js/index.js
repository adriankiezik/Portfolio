'use strict';

import AOS from 'aos';

AOS.init();

const scroll = document.querySelector(".header__scroll");

window.addEventListener("scroll", event => {
    if(window.scrollY > 20) {
        scroll.classList.add("header__fadeOut");
    } else {
        scroll.classList.remove("header__fadeOut");
    }
})