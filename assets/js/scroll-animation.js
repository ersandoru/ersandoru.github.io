document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('.fade-in-section');

  if (sections.length === 0) {
    return;
  }

  const observerOptions = {
    root: null, // relative to the viewport
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the section is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
});