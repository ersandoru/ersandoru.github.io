(function() {
  var backToTopButton = document.getElementById('back-to-top');

  if (!backToTopButton) {
    return;
  }

  var scrollOffset = 300; // Show button after scrolling 300px

  function toggleButtonVisibility() {
    if (window.pageYOffset > scrollOffset) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  }

  // Smooth scroll to top
  function scrollToTop(event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  window.addEventListener('scroll', toggleButtonVisibility);
  backToTopButton.addEventListener('click', scrollToTop);
})();