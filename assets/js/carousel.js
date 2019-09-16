var controls = document.querySelectorAll('.controls');
for ( var i=0; i < controls.length; i++) {
  controls[i].style.display = 'inline-block'
}

var slides = document.querySelectorAll('#carousel .carousel-item')
var current = 0;
var slideInterval = setInterval(nextSlide, 2000)

function nextSlide() {
  goToSlide(current + 1)
}

function prevSlide() {
  goToSlide(current - 1)
}

function goToSlide(n) {
  slides[current].className = 'carousel-item'
  current = (n + slides.length)%slides.length
  slides[current].className = 'carousel-item showing'
}

var playing = true
var pauseBtn = document.getElementById('pause')

function pauseCarousel() {
  pauseBtn.innerHTML = '&#9658;'
  playing = false
  clearInterval(slideInterval)
}

function playCarousel() {
  pauseBtn.innerHTML = '&#10074;&#10074;'
  playing = true
  slideInterval = setInterval(nextSlide, 2000)
}

pauseBtn.onclick = function () {
  if (playing) { pauseCarousel() }
  else { playCarousel() }
}

var next = document.getElementById('next')
var prev = document.getElementById('previous')

next.onclick = function() {
  pauseCarousel()
  nextSlide()
}

prev.onclick = function() {
  pauseCarousel()
  prevSlide()
}