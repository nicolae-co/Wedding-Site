const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  let scrolled = window.scrollY > 0;

  if (scrolled) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
