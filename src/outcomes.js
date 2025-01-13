function outcomes() {
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
