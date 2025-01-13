function outcomes() {
 // growth animation

  gsap.fromTo(".c-text-wrapper.cc-growth", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-text-wrapper.cc-growth',
      start: 'bot 95%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".c-growth-cards-container.cc-one", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    ease: "bounce.out",
    scrollTrigger: {
      trigger: '.c-growth-cards-container.cc-one',
      start: 'bot 85%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".c-growth-cards-container.cc-two", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    delay: 0.6,
    ease: "bounce.out",
    scrollTrigger: {
      trigger: '.c-growth-cards-container.cc-two',
      start: 'bot 85%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".c-growth-cards-container.cc-three", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    delay: 0.9,
    ease: "bounce.out",
    scrollTrigger: {
      trigger: '.c-growth-cards-container.cc-three',
      start: 'bot 85%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".c-growth-cards-container.cc-four", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    delay: 1.2,
    ease: "bounce.out",
    scrollTrigger: {
      trigger: '.c-growth-cards-container.cc-four',
      start: 'bot 85%',
      toggleActions: "play none none reverse",
    }
  });
  // 

 
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

}

export default outcomes;
