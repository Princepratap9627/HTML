// Fade-in animation on scroll
const fadeElements = document.querySelectorAll(
  "main, .stats, .features, footer"
);

// Initial state
fadeElements.forEach(el => el.classList.add("fade"));

window.addEventListener("scroll", () => {
  fadeElements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 120) {
      el.classList.add("show");
    }
  });
});