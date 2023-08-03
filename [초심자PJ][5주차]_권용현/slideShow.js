const slides = document.querySelectorAll('#slides > img');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

var current = 0;
showSlides(current);
prev.addEventListener('click',prevSlide);
next.addEventListener('click',nextSlide);

function showSlides() {
  for (var i=0;i<slides.length;i++){
    slides[i].style.display='none';
  }
  current++;
  if (current > slides.length)
    current=1;
  slides[current-1].style.display='block';
  setTimeout(showSlides,4000);
}
function changeSlides(n) {
  for (var i=0;i<slides.length;i++){
    slides[i].style.display='none';
  }
  slides[n].style.display='block';
}
function prevSlide() {
  if(current>0) current-=1;
  else current=slides.length-1;
  changeSlides(current);
}
function nextSlide() {
  if(current<slides.length-1) current+=1;
  else current=0;
  changeSlides(current);
}
