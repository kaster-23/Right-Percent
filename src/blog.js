//import gsap from "../dist/gsap.js";
import { ScrollTrigger } from "./gsap/all.js";


gsap.registerPlugin(ScrollTrigger);
function blog() {


const blogSection = document.querySelector('#blog')
function setupPaginationListener() {
  
  const paginationButtons = document.querySelectorAll('.pagination-current'); 
  paginationButtons.forEach(button => {
    button.addEventListener('click', () => {
      setTimeout(() => {
        destroyScroll(); 
        initializeScroll();
        blogSection?.scrollIntoView({ behavior: 'smooth' });
      }, 300); 
    });
  });
}


  // smooth scroll
  document.addEventListener('load', () => {


  // Refrescar ScrollTrigger
  ScrollTrigger.refresh();
    setupPaginationListener()

  });

 // refresh scrolltrigger
let links = document.querySelectorAll(".cc-refresh")
links.forEach(link => {
  link.addEventListener('click', () => {
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 300)
  })
})


  // BG nav dropdown open

  document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".c-dropdown");
    const navBg = document.querySelector(".c-nav-bg-open");
    let lastOpenedDropdown = null;

    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("click", (event) => {
        event.stopPropagation();

        if (lastOpenedDropdown === dropdown) {
          // Close dropdown if click on same dropdown
          lastOpenedDropdown = null;
          navBg.style.display = "none";
        } else {
          // If another dropdown is clicked, close the others and open the new one.
          dropdowns.forEach((otherDropdown) => {
            otherDropdown.classList.remove("open");
          });
          dropdown.classList.add("open");
          navBg.style.display = "block";
          lastOpenedDropdown = dropdown;
        }
      });
    });

    document.addEventListener("click", (event) => {
      if (!event.target.classList.contains("c-dropdown")) {
        // If you click outside of all the dropdowns, close them all
        dropdowns.forEach((dropdown) => {
          dropdown.classList.remove("open");
        });
        navBg.style.display = "none";
        lastOpenedDropdown = null; // Reinitialise the last open dropdown
      }
    });

    navBg.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent click propagation to the outside
      navBg.style.display = "none";
      lastOpenedDropdown = null; // Reinitialise the last open dropdown
    });
  });

  // anim txt hero

  gsap.fromTo(".c-text-container.cc-relative", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    delay: 0.3,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-text-container.cc-relative',
      start: 'bot 85%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".c-hero-blog-img-wrapper", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    delay: 0.6,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-hero-blog-img-wrapper',
      start: 'bot 85%',
      toggleActions: "play none none reverse",
    }
  });

  /*


  ScrollTrigger.matchMedia({

    // large
    "(min-width: 992px)": function () {
      // Marquee on scroll

      gsap.to(".c-scroll-marquee-wrapper", {
        scrollTrigger: {
          trigger: ".c-scroll-marquee-wrapper",
          start: "top 100%",
          scrub: true,
        },
        xPercent: -20,
        ease: "quart.easeOut",
      });

    },
    // medium
    "(min-width: 767px) and (max-width: 991px)": function () {
      /&
      // Marquee on scroll

      gsap.to(".c-scroll-marquee-wrapper", {
        scrollTrigger: {
          trigger: ".c-scroll-marquee-wrapper",
          start: "top 100%",
          scrub: true,
        },
        xPercent: -20,
        ease: "quart.easeOut",
      });


    },
    // small
    "(max-width: 767px)": function () {
      // Marquee on scroll

      gsap.to(".c-scroll-marquee-wrapper", {
        scrollTrigger: {
          trigger: ".c-scroll-marquee-wrapper",
          start: "top 100%",
          scrub: true,
        },
        xPercent: -80,
        ease: "quart.easeOut",
      });


    },
  })
  */

}

export default blog

