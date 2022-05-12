let body = document.querySelector('body');
let nav = document.querySelector('nav');
let modeToggle = document.querySelector('.dark-light');
let searchToggle = document.querySelector('.searchToggle');
let sidebarOpen = document.querySelector('.sidebarOpen');
// let siderbarClose = document.querySelector('.siderbarClose');

const getMode = localStorage.getItem('mode');
if (getMode && getMode === 'dark-mode') {
  body.classList.add('dark');
}

// js code to toggle dark and light mode
modeToggle.addEventListener('click', () => {
  modeToggle.classList.toggle('active');
  body.classList.toggle('dark');

  // js code to keep user selected mode even page refresh or file reopen
  if (!body.classList.contains('dark')) {
    localStorage.setItem('mode', 'light-mode');
  } else {
    localStorage.setItem('mode', 'dark-mode');
  }
});

// js code to toggle search box
searchToggle.addEventListener('click', () => {
  searchToggle.classList.toggle('active');
});

// js code to toggle sidebar
sidebarOpen.addEventListener('click', () => {
  nav.classList.add('active');
});

body.addEventListener('click', e => {
  const clickedElm = e.target;

  if (!clickedElm.classList.contains('sidebarOpen') && !clickedElm.classList.contains('menu')) {
    nav.classList.remove('active');
  }
});
