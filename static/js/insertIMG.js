window.addEventListener('load', function(){
  const url = ["black.png","blue.png","white.png","yellow.png"];
  const img = document.querySelectorAll(".insertImg");
  const imgPersona = document.querySelector(".imgPersona");
  // Código a ejecutar cuando se haya cargado el HTML
 const container = document.querySelector(".container");
 container.style='background-image:url("/img/transfondo.png")'; 
 imgPersona.src="/img/girls.png";
  for(let x = 0 ; x < img.length;x++){
      img[x].src=`/img/${url[x]}`;
  }
});
