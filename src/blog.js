import { ScrollTrigger, ScrollSmoother } from "./gsap/all.js";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function blog() {
  const blogSection = document.querySelector('#blog');
  const filterButtons = document.querySelectorAll(".filter-item");
  const cards = document.querySelectorAll(".card");

  let triggers = [];

  // Function to update the batch after filtering cards
  function createNewBatch() {
    const visibleCards = document.querySelectorAll(".card:not(.hidden)");

    // Revert previous triggers
    if (triggers.length) {
      triggers.forEach((st) => st.revert());
    }

    // Reset initial styles
    gsap.set(".card", {
      y: 30,
      opacity: 0
    });

    // Batch animation for the visible cards
    triggers = ScrollTrigger.batch(visibleCards, {
      onEnter: (batch) =>
        gsap.to(batch, {
          ease: "power2.out",
          stagger: 0.08,
          duration: 0.5,
          y: 0,
          opacity: 1
        }),
      start: "top 90%",
      end: "bottom 10%",
      markers: true
    });
  }

  // Call the function initially to create the batch
  createNewBatch();

  // Add click event listener to the filter buttons
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filterValue = button.getAttribute("data-filter");

      // Show/hide cards based on the filter
      cards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");
        if (filterValue === "all" || cardCategory === filterValue) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });

      // Call createNewBatch to animate the visible cards after the filter change
      createNewBatch();
    });
  });

  // Additional code for ScrollSmoother, ScrollTrigger.matchMedia, and other animations
  document.addEventListener('DOMContentLoaded', () => {
    const smoother = ScrollSmoother.create({
      wrapper: '.smooth-wrapper',
      content: '.smooth-content',
      smooth: 1,
      smoothTouch: 0.1,
      effects: true,
    });

    ScrollTrigger.refresh();
    setupPaginationListener();
  });

  // Refresh ScrollTrigger when clicking on specific links
  let links = document.querySelectorAll(".cc-refresh");
  links.forEach(link => {
    link.addEventListener('click', () => {
      setTimeout(() => {
        ScrollTrigger.refresh()
      }, 300);
    });
  });

 // BG nav dropdown open

  document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".c-dropdown");
    const navBg = document.querySelector(".c-nav-bg-open");
    let lastOpenedDropdown = null;

    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("click", (event) => {
        event.stopPropagation();

        if (lastOpenedDropdown === dropdown) {
          // Close dropdown if click on same dropdown
          lastOpenedDropdown = null;
          navBg.style.display = "none";
        } else {
          // If another dropdown is clicked, close the others and open the new one.
          dropdowns.forEach((otherDropdown) => {
            otherDropdown.classList.remove("open");
          });
          dropdown.classList.add("open");
          navBg.style.display = "block";
          lastOpenedDropdown = dropdown;
        }
      });
    });

    document.addEventListener("click", (event) => {
      if (!event.target.classList.contains("c-dropdown")) {
        // If you click outside of all the dropdowns, close them all
        dropdowns.forEach((dropdown) => {
          dropdown.classList.remove("open");
        });
        navBg.style.display = "none";
        lastOpenedDropdown = null; // Reinitialise the last open dropdown
      }
    });

    navBg.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent click propagation to the outside
      navBg.style.display = "none";
      lastOpenedDropdown = null; // Reinitialise the last open dropdown
    });
  });

  // anim txt hero

  gsap.fromTo(".c-text-container.cc-relative", {
    y: '5rem',
    opacity: 0
  }, {
    y: '0rem',
    duration: 0.8,
    delay: 0.3,
    opacity: 1,
    scrollTrigger: {
      trigger: '.c-text-container.cc-relative',
      start: 'bot 85%',
      toggleActions: "play none none reverse",
    }
  });

  gsap.fromTo(".c-hero-blog-img-wrapper", {
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
}

export default blog;
