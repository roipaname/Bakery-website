//const { doc } = require("prettier");

let navbar = document.querySelector(".navbar");
document.querySelector("#menu-bar").onclick = () => {
    navbar.classList.toggle("active");
};

let search = document.querySelector(".search");
document.querySelector("#search").onclick = () => {
    search.classList.toggle("active");
};

const box2 = document.querySelector(".box2");
const box = document.querySelector(".boxtu");

const email = ["ebbe@", "roor", "opp", "gghyj"];

console.log(email.sort());

function check(num) {
    return num.includes("@") && num.includes(".com");
}

box2.addEventListener("click", function(e) {
    e.preventDefault();
    email[0] = box.value;

    if (!check(email[0])) {
        alert("Enter a proper email");
    } else {
        box.value = "";
        alert("You have subscribed succesfully");
    }
});

let swiper1 = new Swiper(".product-row", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
let swiper2 = new Swiper(".blogs-row", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 1,
        },
    },
});

let swiper3 = new Swiper(".review-row", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

const time = 0.0;

const GCD = function(a, b) {
    if (b === 0) return a;
    if (b != 0) return GCD(b, a % b);
};

const LCM = function(a, b) {
    const result = Math.abs(a * b) / GCD(a, b);
    return result;
};

console.log(LCM(4, 3));
console.log(GCD(2, 8));

const review = document.querySelectorAll(".section");

const revealSection = function(entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
});

review.forEach(function(section) {
    sectionObserver.observe(section);
    section.classList.add("section--hidden");
});

let activateAlert = false;
const title = "Lin's Delicious And Ornamental Cakes and Pasteries";
const msg = "Order Now!!!";
const changeTitle = setInterval(() => {
    document.title = activateAlert ? title : msg;
    activateAlert = !activateAlert;
}, 2000);