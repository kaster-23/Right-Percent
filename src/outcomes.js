
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
