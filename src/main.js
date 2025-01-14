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
