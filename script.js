// small utilities: menu toggle + theme toggle + year
document.addEventListener('DOMContentLoaded', function(){
  // year
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // nav toggle for small screens
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });
  }

  // theme (light/dark) persisted in localStorage
  const themeToggle = document.getElementById('theme-toggle');
  const stored = localStorage.getItem('theme');
  if (stored) document.documentElement.setAttribute('data-theme', stored);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      themeToggle.setAttribute('aria-pressed', next === 'dark');
    });
  }
});
