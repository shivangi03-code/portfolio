const sidebar = document.getElementById('sidebar');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');

// Open sidebar
menuBtn.addEventListener('click', () => {
  sidebar.classList.add('active');
  menuBtn.classList.add('hidden');  // hide hamburger
});

// Close sidebar
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
  menuBtn.classList.remove('hidden'); // show hamburger
});

// Close when link clicked
document.querySelectorAll('.sidebar-links a').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('active');
    menuBtn.classList.remove('hidden');
  });
});