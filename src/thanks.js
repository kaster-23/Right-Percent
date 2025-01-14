function thanks() {

  gsap.fromTo(".c-hero-content-wrapper", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-hero-blog-img-wrapper',
      start: 'bot 85%',
      toggleActions: "play none none reverse",
    }
  });

  
  gsap.fromTo(".c-thanks-img-wrapper", {
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


}

export default thanks
