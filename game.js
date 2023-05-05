"use strict";
const darkModeToggle = document.getElementById('dark-mode-toggle');
const nav = document.querySelector('nav');

darkModeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  nav.classList.toggle('dark-mode');
});
