    document.addEventListener('DOMContentLoaded', () => {
      fetch('navbar.html')
          .then(response => response.text())
          .then(data => {
              document.getElementById('navbar-container').innerHTML = data;
              // Initialize cart functionality
              initializeCart();
          });
  });
