
//é para deixa o menu fixo 
//após baixar com a barra lateral
/*
window.addEventListener('scroll', function(){
  const header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY >0);
});


/*slide de imagens*//*
let time = 3000;
let curryImagemIndex = 0;
let imagem = document.querySelectorAll('#slider img');
let max = imagem.length;

function nextImage(){
  
  imagem[curryImagemIndex].classList.remove("selected");
  
  curryImagemIndex++;
  
  if (curryImagemIndex >= max){
    curryImagemIndex = 0;
  };
  imagem[curryImagemIndex].classList.add("selected");
};

function start(){
  
  setInterval(() => {
    nextImage();
  }, time);
    
};
window.addEventListener("load", start);
*/

function toogleTrailer(){
  const trailer = document.querySelector('.trailer');
  const video = document.querySelector('video');
  const closer = document.querySelector('#closer');
  
  trailer.classList.toggle('active');
  video.currentTime = 0;
  video.pause();
  closer.close();
}


// Parte da história
const serviceModals = document.querySelectorAll('.service-modal');
const modalCloseBtns = document.querySelectorAll('.modal-close-btn');
const historias = document.querySelectorAll('.historia');

var modal = function(modalClick){
  serviceModals[modalClick].classList.add("ativo");
}

historias.forEach((historia,i) => {
  historia.addEventListener("click",
function(){
  modal(i);
  });
});

modalCloseBtns.forEach((modalCloseBtn) => {
  modalCloseBtn.addEventListener("click",function() {
    serviceModals.forEach((modalView) => {
      modalView.classList.remove("ativo")
    });
  });
});


//Parte Fases
const serviceModalsf = document.querySelectorAll('.service-modalf');
const modalCloseBtnsf = document.querySelectorAll('.modalf-close-btn');
const fases = document.querySelectorAll('.fases');

var modalf = function(modalClick) {
  serviceModalsf[modalClick].classList.add("ativo");
}

fases.forEach((fase, i) => {
  fase.addEventListener("click",
    function() {
      modalf(i);
    });
});

modalCloseBtnsf.forEach((modalCloseBtnff) => {
  modalCloseBtnff.addEventListener("click", function() {
    serviceModalsf.forEach((modalViewf) => {
      modalViewf.classList.remove("ativo")
    });
  });
});

//parte do desenvolvimento
const serviceModalsd = document.querySelectorAll('.service-modald');
const modalCloseBtnsd = document.querySelectorAll('.modald-close-btn');
const des = document.querySelectorAll('.des');

var modald = function(modalClick) {
  serviceModalsd[modalClick].classList.add("ativo");
}

des.forEach((de, i) => {
  de.addEventListener("click",
    function() {
      modald(i);
    });
});

modalCloseBtnsd.forEach((modalCloseBtndd) => {
  modalCloseBtndd.addEventListener("click", function() {
    serviceModalsd.forEach((modalViewd) => {
      modalViewd.classList.remove("ativo")
    });
  });
});
