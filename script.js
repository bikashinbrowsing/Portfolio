// Toggle mobile menu
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Change navbar style on scroll
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Highlight nav link on scroll (scroll spy)
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function scrollSpy() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 70;
    const sectionId = section.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}
window.addEventListener('scroll', scrollSpy);

// Dark mode toggle
const darkToggle = document.getElementById('dark-toggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // Change icon
  if (document.body.classList.contains('dark')) {
    darkToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    darkToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
});
