//import gsap from '../dist/gsap.js';

import { ScrollTrigger, ScrollSmoother } from "./gsap/all.js";


import home from './home.js'
import contact from './contact.js'
import getAudit from './getAudit.js'
import blog from './blog.js'
import outcomes from './outcomes.js'
import thanks from './thanks.js'
//import blogtemplate from './blogtemplate.js'

const pages = {
  'body--homerp': home,
  'body--blog': blog,
  'body--contact': contact,
  'body-getaudit': getAudit,
  'body--outcomes': outcomes,
  'body--thanks': thanks
  // 'body--blogtemplate': blogtemplate
};

const bodyClassList = document.querySelector('body').classList;

Object.keys(pages).forEach(pageClass => {
  if (bodyClassList.contains(pageClass)) {
    pages[pageClass]();
  }
});

  // FOOTER CHART ANIM

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
