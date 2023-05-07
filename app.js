const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});


// Video play and pause
const video = document.querySelector('#video');
const playPauseBtn = document.querySelector('#playPauseBtn');

playPauseBtn.addEventListener('click', () => {
  video.play(); 
  playPauseBtn.classList.add('hidden');
}); 

video.addEventListener('click', () => {
  video.pause();
  playPauseBtn.classList.remove('hidden');
});



// dark mode
const moon = document.querySelector('#moon');
const sun = document.querySelector('#sun');
const body = document.querySelector('body');

moon.addEventListener('click', () => {
  body.classList.add('dark');
  moon.classList.add('hidden');
  sun.classList.remove('hidden');
});

sun.addEventListener('click', () => {
  body.classList.remove('dark');
  sun.classList.add('hidden');
  moon.classList.remove('hidden');
});