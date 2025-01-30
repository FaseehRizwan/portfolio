// Theme Toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
    const theme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  });
  
  // Load Saved Theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.setAttribute('data-theme', savedTheme);

// Animate skill bars on scroll
document.addEventListener('DOMContentLoaded', () => {
  const skillBars = document.querySelectorAll('.skill-bar');
  
  const animateOnScroll = () => {
    skillBars.forEach(bar => {
      const rect = bar.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        bar.style.opacity = '1';
      }
    });

      // Animate navigation highlight
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const highlight = document.querySelector('.nav-highlight');
  
  function moveHighlight(e) {
    const linkRect = e.target.getBoundingClientRect();
    highlight.style.width = `${linkRect.width}px`;
    highlight.style.transform = `translateX(${linkRect.left}px)`;
    highlight.style.opacity = '1';
  }
  
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', moveHighlight);
    link.addEventListener('mouseleave', () => {
      highlight.style.opacity = '0';
    });
  });
});
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Initial check
});
