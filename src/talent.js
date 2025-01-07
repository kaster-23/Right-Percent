//import gsap from "../dist/gsap.js";
import { ScrollTrigger } from "./gsap/all.js";
import { ScrollSmoother } from "./gsap/all.js";
import { SplitText } from "./gsap/all.js";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
function talent() {

  // smooth scroll
  document.addEventListener('DOMContentLoaded', () => {
    let smoother = ScrollSmoother.create({
      wrapper: '.smooth-wrapper',
      content: '.smooth-content',
      smooth: 1,
      smoothTouch: 0.1,
      effects: true
    });

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

  //swiper
  const swiper = new Swiper(".swiper", {
    effect: "cards",
    grabCursor: true,
    keyboard: true,
  });

  // Create a GSAP timeline for the swiper
  var timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".c-swiper-free-wrapper",
      start: "top top",
      end: "+=100%",
      pin: true,
      scrub: 1,
      onUpdate: function (self) {
        // Calculate the progression
        const progressPerSlide = 1 / (swiper.slides.length - 1);
        const index = Math.floor(self.progress / progressPerSlide);

        // Change slide based on the progress
        if (index !== swiper.activeIndex) {
          swiper.slideTo(index);
        }
      },
    },
  });



  // FOOTER ANIM

  // footer cta 

  const quotes = document.querySelectorAll(".cc-split");

  function setupSplits() {
    quotes.forEach(quote => {
      // Reset if needed
      if (quote.anim) {
        quote.anim.progress(1).kill();
        quote.split.revert();
      }

      quote.split = new SplitText(quote, {
        type: "lines,words,chars",
        linesClass: "split-line"
      });

      // Set up the anim
      quote.anim = gsap.from(quote.split.chars, {
        scrollTrigger: {
          trigger: quote,
          toggleActions: "play none none reverse",
          start: "top 80%",
        },
        duration: 0.5,
        opacity: 0,
        y: 5,
        stagger: 0.05,
      });
    });
  }

  ScrollTrigger.addEventListener("refresh", setupSplits);
  setupSplits();

  // TESTIMONIAL ANIMATION

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

  // footer chart anim

  gsap.to(".c-img-chart-footer.cc-one", {
    scrollTrigger: {
      trigger: ".c-chart-footer-wrapper",
      start: "top 100%",
      end: "bottom -10%",
      scrub: true,
    },
    y: '-11rem',
    ease: "quart.easeOut",
  });

  gsap.to(".c-img-chart-footer.cc-two", {
    scrollTrigger: {
      trigger: ".c-chart-footer-wrapper",
      start: "top 100%",
      end: "bottom -10%",
      scrub: true,
    },
    y: '-20rem',
    ease: "quart.easeOut",
  });

  gsap.to(".c-img-chart-footer.cc-three", {
    scrollTrigger: {
      trigger: ".c-chart-footer-wrapper",
      start: "top 100%",
      end: "bottom -10%",
      scrub: true,
    },
    y: '-7rem',
    ease: "quart.easeOut",
  });

  gsap.to(".c-img-chart-footer.cc-four", {
    scrollTrigger: {
      trigger: ".c-chart-footer-wrapper",
      start: "top 100%",
      end: "bottom -10%",
      scrub: true,
    },
    y: '-2rem',
    ease: "quart.easeOut",
  });

  gsap.to(".c-img-chart-footer.cc-five", {
    scrollTrigger: {
      trigger: ".c-chart-footer-wrapper",
      start: "top 100%",
      end: "bottom -10%",
      scrub: true,
    },
    y: '-6rem',
    ease: "quart.easeOut",
  });

  gsap.to(".c-img-chart-footer.cc-six", {
    scrollTrigger: {
      trigger: ".c-chart-footer-wrapper",
      start: "top 100%",
      end: "bottom -10%",
      scrub: true,
    },
    y: '-11rem',
    ease: "quart.easeOut",
  });


  //responsive
  ScrollTrigger.matchMedia({

    // large
    "(min-width: 992px)": function () {

      // STICKY SECTION

      let st = ScrollTrigger.create({
        trigger: ".c-sticky-wrapper",
        pin: ".c-sticky-left-wrapper",
        start: "top center",
        end: "bottom 78%",
      });


      // growing img cta footer

      gsap.to(".c-img-cta-footer.cc-circle-alone", {
        scrollTrigger: {
          trigger: ".c-cta-footer-wrapper",
          start: "top 100%",
          end: 'bottom 80%',
          scrub: true,
        },
        y: "-28rem",
        ease: "quart.easeOut",
      });


    },
    // medium
    "(min-width: 768px) and (max-width: 991px)": function () {

      // STICKY SECTION

      let st = ScrollTrigger.create({
        trigger: ".c-sticky-wrapper",
        pin: ".c-sticky-left-wrapper",
        start: "top center",
        end: "bottom 78%",
      });


      // growing img cta footer

      gsap.to(".c-img-cta-footer.cc-circle-alone", {
        scrollTrigger: {
          trigger: ".c-cta-footer-wrapper",
          start: "top 100%",
          scrub: true,
        },
        y: "-39rem",
        ease: "quart.easeOut",
      });


    },
    // small
    "(max-width: 480px)": function () {


      // growing img cta footer

      gsap.to(".c-img-cta-footer.cc-circle-alone", {
        scrollTrigger: {
          trigger: ".c-cta-footer-wrapper",
          start: "top 100%",
          scrub: true,
          end: 'bottom 80%'
        },
        y: "-35rem",
        ease: "quart.easeOut",
      });


    },
  })

}

export default talent