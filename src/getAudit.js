
//import gsap from "../dist/gsap.js";
import { ScrollTrigger } from "./gsap/all.js";
import { SplitText } from "./gsap/all.js";

gsap.registerPlugin(ScrollTrigger, SplitText);
function getAudit() {

  document.addEventListener('DOMContentLoaded', () => {

    ScrollTrigger.refresh();

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
  
  // Testimonial animation
  window.addEventListener('load', function () {
    gsap.utils.toArray(".c-testimonial-container").forEach((element, index) => {
      gsap.from(element, {
        opacity: 0,
        y: "6.25rem",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse",
          stagger: 0.2 * index
        }
      });
    });
  });

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

  gsap.fromTo(".c-text-container", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    delay: 0.3,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-text-container',
      start: 'bot 85%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".c-contact-form-wrapper", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    delay: 0.6,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-contact-form-wrapper',
      start: 'bot 85%',
      toggleActions: "play none none reverse",
    }
  });



}

export default getAudit
