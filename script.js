// Mobile nav
var toggle = document.querySelector('.nav__toggle');
var menu = document.getElementById('nav-menu');
if (toggle && menu) {
  toggle.addEventListener('click', function () {
    var expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.style.display = expanded ? 'none' : 'flex';
  });
}

// Year
var year = document.getElementById('year');
if (year) { year.textContent = String(new Date().getFullYear()); }
