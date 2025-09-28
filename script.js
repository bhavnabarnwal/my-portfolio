// Navbar toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Fade-in effect for sections
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if(top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
});

// Adding fade-in CSS dynamically
const style = document.createElement("style");
style.innerHTML = `
  section { opacity: 0; transform: translateY(20px); transition: 0.8s ease-in-out; }
  section.visible { opacity: 1; transform: translateY(0); }
`;
document.head.appendChild(style);
