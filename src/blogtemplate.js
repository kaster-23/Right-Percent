//import gsap from "../dist/gsap.js";
import { ScrollTrigger } from "./gsap/all.js";
import { SplitText } from "./gsap/all.js";


gsap.registerPlugin(ScrollTrigger, SplitText);
function blogtemplate() {
 // Webflow.push(function () {

  // smooth scroll
  document.addEventListener('DOMContentLoaded', () => {

   document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', () => ScrollTrigger.refresh());
  });


        ScrollTrigger.refresh();
  })

document.addEventListener('DOMContentLoaded', () => {
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

  gsap.fromTo(".c-template-blog-wrapper", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    delay: 0.3,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-template-blog-wrapper',
      start: 'bot 85%',
      toggleActions: "play none none reverse",
    }
  });

  //

    function elementApparition(targetSelector) {
      gsap.fromTo(targetSelector, {
        y: '5rem',
        opacity: 0
      }, {
        y: '0rem',
        duration: 0.8,
        opacity: 1,
        scrollTrigger: {
          trigger: targetSelector,
          start: 'bot 75%',
          toggleActions: 'play none none reverse'
        }
      });
    }

  // List target
  const targets = [
    '.cc-top-fade-in',
    //'.button-wrapper-center'
  ];

  // Create the animation for each target
  targets.forEach((element) => document.querySelectorAll(element).forEach(target => elementApparition(target)));

  // Collection cards

   const items = document.querySelectorAll(".collection-item.resources-cms_wrapper");
  
  if (items.length > 0) {
        gsap.fromTo(".collection-item.resources-cms_wrapper", 
          { y: "5rem", opacity: 0 },
          { 
            y: "0rem",               
            opacity: 1,
            delay: .2,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {          
              trigger: ".c-blog-article-container",  
              start: "top 80%",     
              toggleActions: "play none none reverse" 
            }
          }
        );
  }
  // MARQUEE ON SCROLL

 /*
  gsap.to(".c-scroll-marquee-wrapper", {
    scrollTrigger: {
      trigger: ".c-scroll-marquee-wrapper",
      start: "top 100%",
      scrub: true,
    },
    xPercent: -20,
    ease: "quart.easeOut",
  });

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
    "(max-width: 480px)": function () {
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
  });
  

}

export default blogtemplate
