
document.querySelectorAll(".heart-icon").forEach(heart => {
    heart.addEventListener("click", function() {
        this.classList.toggle("liked");
    });
});


document.querySelectorAll(".heart-icon").forEach((heart) => {
    heart.addEventListener("click", function () {
        const modal = document.getElementById("like-modal");
        const mirrorName = this.nextElementSibling.nextElementSibling.textContent; // Get mirror name
        modal.querySelector("p").innerHTML = `You liked the <strong>${mirrorName}</strong>. You have great Choice! 😉✨`;
        modal.classList.add("show");
    });
});

document.querySelector(".close-btn").addEventListener("click", function () {
    document.getElementById("like-modal").classList.remove("show");
});

// Close modal when clicking outside
window.addEventListener("click", function (event) {
    const modal = document.getElementById("like-modal");
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 2,
        loop: true,
        margin: 20,
        nav: true,
        autoplay:false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive:{
            0:{ items: 1 },
            768:{ items: 2 }
        }
    });
});

const carousel = document.getElementById('carouselExample');
const radios = document.querySelectorAll('.carousel-radio-buttons input');
const carouselInstance = new bootstrap.Carousel(carousel);

carousel.addEventListener('slid.bs.carousel', function (event) {
    radios[event.to].checked = true;
});

function changeSlide(index) {
    carouselInstance.to(index);
}

   // Get current page URL
   let currentPage = window.location.pathname.split("/").pop();

   // Get all nav links
   let navLinks = document.querySelectorAll(".nav-link");

   navLinks.forEach(link => {
       if (link.getAttribute("href") === currentPage) {
           link.classList.add("active");
       }
   });

   document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".custom-tab-content");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove("active"));
            // Hide all content sections
            contents.forEach(content => content.classList.remove("active"));

            // Add active class to clicked button
            this.classList.add("active");
            // Show corresponding content
            document.getElementById(this.dataset.target).classList.add("active");
        });
    });
});

// MIRROR CUSTOMIZATION SCRIPT
