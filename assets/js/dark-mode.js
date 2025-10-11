(function() {
  var body = document.body;
  var toggle = document.getElementById('dark-mode-toggle');

  if (!toggle) {
    return;
  }

  // Function to apply the theme
  function applyTheme(theme) {
    body.classList.remove('dark-mode', 'light-mode');
    body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }

  // Event listener for the toggle button
  toggle.addEventListener('click', function() {
    var newTheme = body.classList.contains('dark-mode') ? 'light-mode' : 'dark-mode';
    applyTheme(newTheme);
  });

  // Apply the saved theme on page load
  var savedTheme = localStorage.getItem('theme') || 'light-mode';
  applyTheme(savedTheme);
})();