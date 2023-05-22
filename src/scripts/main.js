const btn = document.getElementById("btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementsByClassName("close")[0];



document.addEventListener('DOMContentLoaded', function() {
  const acoordeon = document.querySelectorAll('[data-infor-control]');

  const heroSelector = document.querySelector('.hero');
  const alturaHero = heroSelector.clientHeight;

  window.addEventListener('scroll', function() {
    const posicaoScroll = window.scrollY;

    if (posicaoScroll < alturaHero){
      ocultaHeader();
    }else{
      apareceHeader();
    }
  })

  for (let i = 0; i < acoordeon.length; i++) {
    acoordeon[i].addEventListener('click', abreOuFechaAcoordeon);
  }

})

function ocultaHeader(){
  const header = document.querySelector('header');
  header.classList.add('header--is-hidden')

}
function apareceHeader(){
  const header = document.querySelector('header');
  header.classList.remove('header--is-hidden');

}

 function abreOuFechaAcoordeon(e){
  const classe = 'infor__box__item--is-open';
  console.log(e);
  const elementoPai = e.target.parentNode;


  elementoPai.classList.toggle(classe)
 }

  //secão slideshow

 let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("container__Slides");
  let dots = document.getElementsByClassName("infor__image__item__thumb");
  let captionText = document.getElementById("text");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}





btn.onclick = function() {
  modal.style.display = "block";
  setTimeout(function() {
    modal.classList.add("show");
  }, 10); // Adicionando um pequeno atraso para permitir a transição suave
}

closeBtn.onclick = function() {
  modal.classList.remove("show");
  setTimeout(function() {
    modal.style.display = "none";
  }, 300);      // Tempo correspondente à duração da transição em CSS
}

 




