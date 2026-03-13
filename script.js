const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    origin: "bottom",
    distance: "200px",
    duration: 1000,
};

ScrollReveal().reveal(".header_image img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".header_content p", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header_btns", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".destination_card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".showcase_image img", {
    ...scrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".showcase_content h4", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".showcase_content p", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".showcase_btn", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".banner_card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".discover_card", {
    ...scrollRevealOption,
    interval: 500,
});

const isDesktop = window.innerWidth > 768;

ScrollReveal().reveal(".header_image img", {
    ...scrollRevealOption,
    origin: "right",
    distance: isDesktop ? "200px" : "50px", 
});

const swiper = new Swiper(".swiper", {
    loop: true, 
    slidesPerView: 1,
    spaceBetween: 20, 
    autoHeight: true,
    autoplay: {
        delay: 2000, 
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

window.addEventListener("resize", () => {
    swiper.update();
});

const journeyCards = document.querySelectorAll(".journey_card");

journeyCards.forEach((card) => {
  card.addEventListener("click", () => {
    if (card.classList.contains("active")) {
      card.classList.remove("active"); 
    } else {
      // Close other cards first
      journeyCards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active"); 
    }
  });
});