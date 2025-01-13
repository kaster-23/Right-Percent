//import gsap from '../dist/gsap.js';

import { ScrollTrigger, ScrollSmoother } from "./gsap/all.js";


import home from './home.js'

import contact from './contact.js'

import source from './source.js'
//import blogtemplate from './blogtemplate.js'

const pages = {
  'body--home': home,
  'body--source': source,
  'body--contact': contact,
  // 'body--blogtemplate': blogtemplate
};

const bodyClassList = document.querySelector('body').classList;

Object.keys(pages).forEach(pageClass => {
  if (bodyClassList.contains(pageClass)) {
    pages[pageClass]();
  }
});
