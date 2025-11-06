// // DOM: Document Object Model, prende la pagina web w la legge come oggetto

// let nome; //ho dichiarato una variabile
// nome = "simone"; //ho assegnato un valore alla variabile
// let nome3 = "antonio"//inizializzazione

// const nome2 = "giovanni"; //ho dichiarato una costante

// console.log(nome);  //stampo il valore della variabile
// console.log(nome3);
// console.log(nome2);

// nome = "marco";
// console.log(nome);

// // nome2 = "antonello" //non puoi cambiare il valore di una costante
// // console.log(nome2);

// // tipi di dato
// let persona = "Ciao sto andando al parco"; //stringa

// let età = 22;  //number

// let isMarried = false; //boolean

// let vuota = null;// variabile VUOTA

// let pippo; //variabile undefined

// let numero = NaN //not a number

// let array = [1, 2, 3, 4, 5, 6, "ciao", 8, 9, 10]; //array

// let oggetto = { // è un oggetto quindi un tipo di dato object
//     nome: "simone",
//     cognome: "bianchi",
//     eta: 22
// }

// let saluto= "ciao sono "; // operazione di concatenazione fra stringhe e numeri
// let name = "simone";
// let presentazione = saluto + name + " e ho " +  età + " anni";
// console.log(presentazione);

// function salutare(){
//     console.log("ciao sono una funzione");
// }
// salutare();

function somma(num1, num2){
    let risultato = num1 + num2;
    console.log(risultato);
    let e = document.querySelector(".risu");
    e.textContent = "Il risultato è: " + risultato;
}

// somma(29457333, 38435743);
// somma(78,41);

// function moltiplicazione(num1, num2){
//     let risultato = num1 * num2;
//     console.log(risultato);
// }
// moltiplicazione(78,41);

// let numero1 = 177;
// let numero2 = 43;

// if (numero1 > numero2) {
//     console.log("il numero " + numero1 + " è maggiore");
// } 
// else 
//     {
//     console.log("il numero " + numero2 + " è maggiore");
// }

// if(numero1 % 2  == 0){
//     console.log("il numero " + numero1 + " è pari");
// }
// else if (numero1 % 2 == 1){
//     console.log("il numero " + numero1 + " è dispari");
// }
// else {
//     console.log("il numero non è pari o dispari");
// }

// switch (numero1) {
//     case 1:
//         console.log("il numero è 1");
//         break;
//     case 2:
//         console.log("il numero è 2");
//         break;
//     case 3:
//         console.log("il numero è 3");
//         break;
//     default:
//         console.log("il numero non è 1, 2 o 3");
//         break;
// }

// let array2 = [1, 54, "ciao", 8, "ciao sono un elemento dell'array", 10];
// console.log(array2);
// console.log(array2.length);
// console.log(array2[0]);

// for (let i = 0; i < array2.length; i++) {
//     console.log(array2[i]);
// }

// let arrayrigamatrice=[1, 2, 3]
// let matrice = [];
// for(let i = 0; i < arrayrigamatrice.length; i++){
//     for(let j = 0; j < arrayrigamatrice.length; j++){
//         matrice.push(i,j);
        
//     }
//     console.log(matrice);
// }

let numeroacaso = 5;
// while (numeroacaso < 10) {
//     console.log("ciao");
//     numeroacaso++;
// }

do {
    console.log("ciao");
    numeroacaso++;
} while (numeroacaso < 4); 


