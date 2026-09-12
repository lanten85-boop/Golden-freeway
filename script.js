const topbar = document.querySelector('.topbar');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  topbar.style.background = y > 60 ? 'linear-gradient(180deg, rgba(9,7,6,.82), rgba(9,7,6,.28), transparent)' : 'transparent';
});
