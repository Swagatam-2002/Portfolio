const navToggle = document.querySelector('.nav-toggle');
const siteHeader = document.querySelector('.site-header');
const yearNode = document.getElementById('current-year');

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (navToggle && siteHeader) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteHeader.classList.toggle('menu-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteHeader.querySelectorAll('.site-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      siteHeader.classList.remove('menu-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach((element) => revealObserver.observe(element));
