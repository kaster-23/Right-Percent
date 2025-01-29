//import gsap from '../dist/gsap.js';

import { ScrollTrigger, ScrollSmoother } from "./gsap/all.js";


import home from './home.js'
import contact from './contact.js'
import getAudit from './getAudit.js'
import blog from './blog.js'
import outcomes from './outcomes.js'
import thanks from './thanks.js'
import blogtemplate from './blogtemplate.js'

const pages = {
  'body--homerp': home,
  'body--blog': blog,
  'body--contact': contact,
  'body-getaudit': getAudit,
  'body--outcomes': outcomes,
  'body--thanks': thanks,
  'body--blogtemplate': blogtemplate
};

const bodyClassList = document.querySelector('body').classList;

Object.keys(pages).forEach(pageClass => {
  if (bodyClassList.contains(pageClass)) {
    pages[pageClass]();
  }
});

ScrollTrigger.matchMedia({
  // Desktop (more than 991px)
  "(min-width: 992px)": function () {
    gsap.to(".c-img-chart-footer.cc-one", {
      scrollTrigger: {
        trigger: ".c-chart-footer-wrapper",
        start: "top 100%",
        end: "bottom -10%",
        scrub: true,
      },
      y: "-11rem",
      ease: "quart.easeOut",
    });

    gsap.to(".c-img-chart-footer.cc-two", {
      scrollTrigger: {
        trigger: ".c-chart-footer-wrapper",
        start: "top 100%",
        end: "bottom -10%",
        scrub: true,
      },
      y: "-20rem",
      ease: "quart.easeOut",
    });

    gsap.to(".c-img-chart-footer.cc-three", {
      scrollTrigger: {
        trigger: ".c-chart-footer-wrapper",
        start: "top 100%",
        end: "bottom -10%",
        scrub: true,
      },
      y: "-7rem",
      ease: "quart.easeOut",
    });

    gsap.to(".c-img-chart-footer.cc-four", {
      scrollTrigger: {
        trigger: ".c-chart-footer-wrapper",
        start: "top 100%",
        end: "bottom -10%",
        scrub: true,
      },
      y: "-1.7rem",
      ease: "quart.easeOut",
    });

    gsap.to(".c-img-chart-footer.cc-five", {
      scrollTrigger: {
        trigger: ".c-chart-footer-wrapper",
        start: "top 100%",
        end: "bottom -10%",
        scrub: true,
      },
      y: "-6rem",
      ease: "quart.easeOut",
    });

    gsap.to(".c-img-chart-footer.cc-six", {
      scrollTrigger: {
        trigger: ".c-chart-footer-wrapper",
        start: "top 100%",
        end: "bottom -10%",
        scrub: true,
      },
      y: "-11rem",
      ease: "quart.easeOut",
    });
  },

  // Tablet (between 768px & 991px)
  "(min-width: 768px) and (max-width: 991px)": function () {
    gsap.to(".c-img-chart-footer.cc-one", {
      scrollTrigger: {
        trigger: ".c-chart-footer-wrapper",
        start: "top 100%",
        end: "bottom -10%",
        scrub: true,
      },
      y: "-35rem",
      ease: "quart.easeOut",
    });

    gsap.to(".c-img-chart-footer.cc-two", {
      scrollTrigger: {
        trigger: ".c-chart-footer-wrapper",
        start: "top 100%",
        end: "bottom -10%",
        scrub: true,
      },
      y: "-45rem",
      ease: "quart.easeOut",
    });

    gsap.to(".c-img-chart-footer.cc-three", {
      scrollTrigger: {
        trigger: ".c-chart-footer-wrapper",
        start: "top 100%",
        end: "bottom -10%",
        scrub: true,
      },
      y: "-35rem",
      ease: "quart.easeOut",
    });

    gsap.to(".c-img-chart-footer.cc-four", {
      scrollTrigger: {
        trigger: ".c-chart-footer-wrapper",
        start: "top 100%",
        end: "bottom -10%",
        scrub: true,
      },
      y: "-44rem",
      ease: "quart.easeOut",
    });

    gsap.to(".c-img-chart-footer.cc-five", {
      scrollTrigger: {
        trigger: ".c-chart-footer-wrapper",
        start: "top 100%",
        end: "bottom -10%",
        scrub: true,
      },
      y: "-24rem",
      ease: "quart.easeOut",
    });

    gsap.to(".c-img-chart-footer.cc-six", {
      scrollTrigger: {
        trigger: ".c-chart-footer-wrapper",
        start: "top 100%",
        end: "bottom -10%",
        scrub: true,
      },
      y: "-18rem",
      ease: "quart.easeOut",
    });
  },

  // Mobile (lower than 768px)
  "(max-width: 767px)": function () {
    gsap.to(".c-img-chart-footer.cc-one", {
      scrollTrigger: {
        trigger: ".c-chart-footer-wrapper",
        start: "top 100%",
        end: "bottom -10%",
        scrub: true,
      },
      y: "-24rem",
      ease: "quart.easeOut",
    });

    gsap.to(".c-img-chart-footer.cc-two", {
      scrollTrigger: {
        trigger: ".c-chart-footer-wrapper",
        start: "top 100%",
        end: "bottom -10%",
        scrub: true,
      },
      y: "-40rem",
      ease: "quart.easeOut",
    });

    gsap.to(".c-img-chart-footer.cc-three", {
      scrollTrigger: {
        trigger: ".c-chart-footer-wrapper",
        start: "top 100%",
        end: "bottom -10%",
        scrub: true,
      },
      y: "-18rem",
      ease: "quart.easeOut",
    });

    gsap.to(".c-img-chart-footer.cc-four", {
      scrollTrigger: {
        trigger: ".c-chart-footer-wrapper",
        start: "top 100%",
        end: "bottom -10%",
        scrub: true,
      },
      y: "-39rem",
      ease: "quart.easeOut",
    });

    gsap.to(".c-img-chart-footer.cc-five", {
      scrollTrigger: {
        trigger: ".c-chart-footer-wrapper",
        start: "top 100%",
        end: "bottom -10%",
        scrub: true,
      },
      y: "-8rem",
      ease: "quart.easeOut",
    });

    gsap.to(".c-img-chart-footer.cc-six", {
      scrollTrigger: {
        trigger: ".c-chart-footer-wrapper",
        start: "top 100%",
        end: "bottom -10%",
        scrub: true,
      },
      y: "-4rem",
      ease: "quart.easeOut",
    });
  },
});
