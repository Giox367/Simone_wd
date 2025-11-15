const pippo = document.getElementById("container");
// // //pippo.innerHTML = '<h1>Ciao sono il titolo</h1><p class="paragrafo">Ciao sono il paragrafo</p>';

// // let titolo = document.createElement("h1");
// // titolo.textContent = "Ciao sono il titolo";
// // pippo.appendChild(titolo);

// // let paragrafo = document.createElement("p");
// // paragrafo.textContent = "Ciao sono il paragrafo";
// // pippo.appendChild(paragrafo);

// // pippo.style.backgroundColor = "green";
// // pippo.style.padding = "20px";


// // function cambiaColore(){
// //     pippo.style.backgroundColor = "red";
// // }

// let bottoneprendi = document.getElementById("prendi");
// let inputtext = document.getElementById("inputtext");

// let paragrafo = document.createElement("p");
// paragrafo.style.color = "red";
// paragrafo.style.fontSize = "80px";



// bottoneprendi.addEventListener(
//     "click", 
//     function(){

//     pippo.appendChild(paragrafo);
//     paragrafo.innerHTML =  inputtext.value;
// })
// window.onload = (event) =>{
//     setTimeout(function(){
//        pippo.style.backgroundColor = "red";
//        pippo.innerHTML = '<h1>Ciao sono il titolo</h1><p class="paragrafo">Ciao sono il paragrafo</p>';
//     }, 2000)
// }

 
// 13-11  CAMBIA COLORE 


// const bottoneSfondo = document.getElementById('cambiacoloresfondo');

// bottoneSfondo.addEventListener('click', cambiaColore);



// function cambiaColore() {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);

//   pippo.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
// }

// window.onload =setInterval(cambiaColore, 2000) ;

// FILTRA LISTA
// const inputFiltro = document.getElementById('filtro');
// const listaPersone = document.getElementById('persone');
// const elementi = listaPersone.getElementsByTagName('li');

// inputFiltro.addEventListener('input', function () {
//   const testo = inputFiltro.value.toLowerCase();

//   for (let i = 0; i < elementi.length; i++) {
//     const nome = elementi[i].textContent.toLowerCase();

//     if (nome.includes(testo)) {
//       elementi[i].style.display = 'list-item';
//     } else {
//       elementi[i].style.display = 'none';
//     }
//   }
// })

// MI PIACE
// const likeBtn = document.getElementById('likeBtn');
// const likeCount = document.getElementById('likeCount');

// let conteggio = 0;
// let primoClick = true;

// likeBtn.addEventListener('click', function () {
//   // ogni click aggiunge un like
//   conteggio++;
//   likeCount.textContent = conteggio;

//   // al primo click cambio l’icona del bottone e la lascio piena
//   if (primoClick) {
//     likeBtn.textContent = '❤️ Mi piace';
//     primoClick = false;
//   }
// });

// Effetto macchina da scrivere
// const titoloDigitato = document.getElementById('titoloDigitato');
// const startTyping = document.getElementById('startTyping');

// const testo = 'Ciao, questo è un effetto macchina da scrivere!';
// let indice = 0;
// let intervallo = null;

// startTyping.addEventListener('click', function () {
//   // reset
//   titoloDigitato.textContent = '';
//   indice = 0;

//   if (intervallo !== null) {
//     clearInterval(intervallo);
//   }

//   intervallo = setInterval(function () {
//     if (indice < testo.length) {
//       titoloDigitato.textContent += testo.charAt(indice);
//       indice++;
//     } else {
//       clearInterval(intervallo);
//     }
//   }, 300);
// });