function outcomes() {
   // anim hero

  gsap.fromTo(".c-text-wrapper.cc-hero-one", {
    y: '5rem',
    opacity: 0,
  }, {
    y: '0rem',
    delay: 0,
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
  function textApparition(targetSelector) {
    gsap.fromTo(targetSelector, {
      y: '5rem',
      opacity: 0
    }, {
      y: '0rem',
      duration: 0.8,
      opacity: 1,
      scrollTrigger: {
        trigger: targetSelector,
        start: 'bot 95%',
        toggleActions: 'play none none reverse'
      }
    });
  }

  // List target
  const targets = [
    '.cc-top-fade-in',
   'h2'
  ];

  // Create the animation for each target
  targets.forEach(target => textApparition(target));

 
 ScrollTrigger.matchMedia({

    // large
    "(min-width: 992px)": function () {
          let st = ScrollTrigger.create({
            trigger: ".c-sticky-wrapper",
            pin: ".c-sticky-left-wrapper",
            start: "top center",
            end: () => `+=${document.querySelector(".c-sticky-wrapper").offsetHeight - document.querySelector(".c-sticky-left-wrapper").offsetHeight - 145}`,
            pinSpacing: false,
          });

     
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

      gsap.to(".c-scroll-marquee-wrapper", {
        scrollTrigger: {
          trigger: ".c-scroll-marquee-wrapper",
          start: "top 100%",
          scrub: true,
        },
        xPercent: -20,
        ease: "quart.easeOut",
      });

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
