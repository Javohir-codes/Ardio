const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.textContent = document.body.classList.contains('dark-mode')
    ? 'Light Mode'
    : 'Dark Mode';
});

const scrollButtons = document.querySelectorAll('.header-button-scroll');

scrollButtons.forEach(button => {
  const targetId = button.dataset.target;
  button.addEventListener('click', () => {
    if (targetId) {
      const target = document.querySelector(targetId);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }
  });
});