
import { SplitText } from "./gsap/all.js";


gsap.registerPlugin(SplitText);
function outcomes() {
    // anim Fast txt

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
      quote.anim = gsap.from(quote.split.words, {
        scrollTrigger: {
          trigger: quote,
          toggleActions: "play none none reverse",
          start: "top 80%",
        },
        duration: 0.5,
        opacity: 0,
        y: 5,
        stagger: 0.1,
      });
    });
  }

  ScrollTrigger.addEventListener("refresh", setupSplits);
  setupSplits();

  
    
   // anim hero

  gsap.fromTo(".c-text-wrapper.cc-hero-one", {
    y: '5rem',
    opacity: 0,
  }, {
    y: '0rem',
    delay: .2,
    duration: 0.8,
    opacity: 1,
  });

  gsap.fromTo(".c-text-wrapper.cc-hero-two", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    delay: 0.6,
    duration: 0.8,
    opacity: 1,
  });

  gsap.fromTo(".c-text-wrapper.cc-hero-three", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    delay: 1,
    duration: 0.8,
    opacity: 1,
  });

  gsap.fromTo(".c-button-wrapper.cc-hero", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    delay: 1,
    duration: 0.8,
    opacity: 1,
  });
 

// Tag us text animation
function textApparition(target, start) {
  gsap.fromTo(target, {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    delay: .3,
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: target,        
      start: start || 'bottom bottom',
      toggleActions: 'play none none reverse'
    }
  });
}

// List target selectors
const targetSelectors = [
  '.cc-top-fade-in'
];

// Apply animation to each element individually

 document.querySelectorAll('.cc-top-fade-in-block').forEach(element => {
    textApparition(element, 'top 90%');
  });
  document.querySelectorAll('.cc-top-fade-in').forEach(element => {
    textApparition(element);
  });

 
 ScrollTrigger.matchMedia({

    // large
    "(min-width: 992px)": function () {
          let st = ScrollTrigger.create({
            trigger: ".c-sticky-wrapper .row",
            pin: ".c-sticky-left-wrapper",
            start: "top center",
            end: () => `+=${document.querySelector(".c-sticky-wrapper").offsetHeight - document.querySelector(".c-sticky-left-wrapper").offsetHeight - 75}`,
            pinSpacing: false,
          });


      
  

            const sticktContainers = document.querySelectorAll(".c-sticky-right-container");
            const stickyTexts = document.querySelectorAll('.c-sticky-right-container .c-text-s')
            const stickyTitles = document.querySelectorAll('.c-sticky-right-container .c-title-s')

  

        sticktContainers.forEach((container) => {
          const title = container.querySelector('.c-title-s')
          const text = container.querySelector('.c-text-s')
        
          ScrollTrigger.create({
            trigger: title, 
            start: "top 55%", 
            end: "bottom center", 
            trigger: container,
            onEnter: () => {
              stickyTitles.forEach((t) => t.style.color = "#fff"); 
              title.style.color = "#62C6A5"; 
            },
            onEnterBack: () => {
              stickyTitles.forEach((t) => t.style.color = "#fff"); 
              title.style.color = "#62C6A5"; 
            },
          });
        
          ScrollTrigger.create({
            trigger: text, 
            start: "top 55%", 
            end: "bottom center", 
            trigger: container,
            onEnter: () => {
              stickyTexts.forEach((t) => t.style.color = "#fff"); 
              text.style.color = "#62C6A5"; 
            },
            onEnterBack: () => {
              stickyTexts.forEach((t) => t.style.color = "#fff"); 
              text.style.color = "#62C6A5"; 
            },
          });
          
        })

        gsap.fromTo(".hero-highligts_item", 
          { y: "5rem", opacity: 0 },
          { 
            y: "0rem",               
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {          
              trigger: ".hero-highlights_wrapper",  
              start: "top 80%",     
              toggleActions: "play none none reverse" 
            }
          }
        );

        

     
      // Marquee on scroll

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
      */

        // GROWING IMG CTA FOOTER

      gsap.to(".c-img-cta-footer.cc-one", {
        scrollTrigger: {
          trigger: ".c-cta-footer-wrapper",
          start: "top 100%",
          scrub: true,
        },
        scaleX: '300%',
        scaleY: '300%',
        x: "21rem",
        ease: "quart.easeOut",
      });

      gsap.to(".c-img-cta-footer.cc-two", {
        scrollTrigger: {
          trigger: ".c-cta-footer-wrapper",
          start: "top 100%",
          scrub: true,
        },
        scaleX: '900%',
        scaleY: '900%',
        x: "-20rem",
        y: "5rem",
        ease: "quart.easeOut",
      });

      gsap.to(".c-img-cta-footer.cc-three", {
        scrollTrigger: {
          trigger: ".c-cta-footer-wrapper",
          start: "top 100%",
          scrub: true,
        },
        scaleX: '780%',
        scaleY: '780%',
        x: "-10rem",
        y: "5rem",
        ease: "quart.easeOut",
      });
    },
    // medium
    "(min-width: 767px) and (max-width: 991px)": function () {
            let st = ScrollTrigger.create({
          trigger: ".c-sticky-wrapper",
          pin: ".c-sticky-left-wrapper",
          start: "top center",
          end: "bottom bottom",
        });
     
      // Marquee on scroll
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
*/
 // GROWING IMG CTA FOOTER

      gsap.to(".c-img-cta-footer.cc-one", {
        scrollTrigger: {
          trigger: ".c-cta-footer-wrapper",
          start: "top 100%",
          scrub: true,
        },
        scaleX: '400%',
        scaleY: '400%',
        x: "21rem",
        ease: "quart.easeOut",
      });

      gsap.to(".c-img-cta-footer.cc-two", {
        scrollTrigger: {
          trigger: ".c-cta-footer-wrapper",
          start: "top 100%",
          scrub: true,
        },
        scaleX: '600%',
        scaleY: '600%',
        x: "-10rem",
        y: "5rem",
        ease: "quart.easeOut",
      });

      gsap.to(".c-img-cta-footer.cc-three", {
        scrollTrigger: {
          trigger: ".c-cta-footer-wrapper",
          start: "top 100%",
          scrub: true,
        },
        scaleX: '380%',
        scaleY: '380%',
        x: "-10rem",
        y: "5rem",
        ease: "quart.easeOut",
      });
    },
    // small
    "(max-width: 767px)": function () {
      // Marquee on scroll

        /*
      gsap.to(".c-scroll-marquee-wrapper", {
        scrollTrigger: {
          trigger: ".c-scroll-marquee-wrapper",
          start: "top 100%",
          scrub: true,
        },
        xPercent: -80,
        ease: "quart.easeOut",
      });
      */
  // GROWING IMG CTA FOOTER

      gsap.to(".c-img-cta-footer.cc-one", {
        scrollTrigger: {
          trigger: ".c-cta-footer-wrapper",
          start: "top 100%",
          scrub: true,
        },
        scaleX: '200%',
        scaleY: '200%',
        x: "10rem",
        ease: "quart.easeOut",
      });

      gsap.to(".c-img-cta-footer.cc-two", {
        scrollTrigger: {
          trigger: ".c-cta-footer-wrapper",
          start: "top 100%",
          scrub: true,
        },
        scaleX: '350%',
        scaleY: '350%',
        x: "-10rem",
        y: "5rem",
        ease: "quart.easeOut",
      });

      gsap.to(".c-img-cta-footer.cc-three", {
        scrollTrigger: {
          trigger: ".c-cta-footer-wrapper",
          start: "top 100%",
          scrub: true,
        },
        scaleX: '280%',
        scaleY: '280%',
        x: "0rem",
        y: "5rem",
        ease: "quart.easeOut",
      });

    }
  })

}

export default outcomes;
