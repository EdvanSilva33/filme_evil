const btn = document.getElementById("btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementsByClassName("close")[0];
// const accordionItems = document.querySelectorAll('infor__box__item');


document.addEventListener('DOMContentLoaded', function() {
  const questions = document.querySelectorAll(["data-infor-control"]);

  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', abreOuFechaAcoordeon);
  }

})

 function abreOuFechaAcoordeon(elemento){
  const classe = 'infor__box__item--is-open';
  console.log(elemento);
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


// accordionItems.forEach(item => {
//   const header = item.querySelector('.infor__box__item__cubo');

//   header.addEventListener('click', () => {
//     // Alternar classe "ativo" para mostrar/ocultar conteúdo
//     item.classList.toggle('ativo')

// })
 




