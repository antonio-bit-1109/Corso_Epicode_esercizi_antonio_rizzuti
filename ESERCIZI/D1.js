"use strict"; // <== per settare regole stringenti sulla scrittura del codice. 
/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero = 5;
let lettera = "ciao"; 
let boolean = true || false; 
let niente = null;  // object ?? 
let n_definito = undefined;

const risposta1 = "In javascript esistono 5 tipi principali di dati. Queste tipologie di dati vengono chiamati \"primitivi\". Li possiamo suddividere in: numeri es. (let numero = 5) dove sostanzialmente assegno ad una variabile un valore numerico. Posso effettuare operazioni matematiche con questi valori e sostanzialmente vengono trattati come si fa nell'algebra tradizionale. Qualora mischiassi una variabile numerica con una variabile non numerica, potrebbe uscire come risulato un valore NaN, cioè \"not a number\" . Altro tipo di dato primitivo è la stringa. Questo tipo di dato deve venir inserito all interno degli apici (singoli/doppi) per far capire al linguaggio che stiamo maneggiando del testo.  È possibile concatenare delle stringhe e sommarle attraverso il simbolo matematico \"+\" . Del testo all'interno di una stringa può essere portato a capo inserendo il simbolo \n sto andando\nal mare . Terzo tipo di dato è il boolean, esso possiede solo due valori principali che possono essere true or false. quarto valore primitivo è il null. Sostanzialmente utilizziamo questo valore quando vogliamo attribuire un valore ad una variabile ma non vogliamo che sia ne numerico ne stringa ne boolean...ecc ecc . Infine il valore undefined che invece non ha assegnato nessun valore, ovvero rappresenta un valore che non esiste.  "

console.log(risposta1); 
console.log(typeof boolean); 
console.log(typeof numero); 
console.log(typeof lettera); 
console.log(typeof niente); 
console.log(typeof n_definito); 

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = 'Antonio'; 
console.log(name); 
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
function somma(a , b) {
  return a+b;
}

console.log(somma( 3 , 5)); 
console.log(somma( 6 , 8)); 
console.log(somma( 1 , 1)); 
console.log(somma( 2 , 9)); 
*/

let numero1 = 5; 
let numero2 = 9; 
console.log(numero1 + numero2); 

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12; 
let ipsilon = 50; 

/*
console.log(ipsilon++);  // con ipsilon++ prima printo/eseguo il codice e poi incremento (printa 50 e salva ipsilon = 51) 
console.log(++ipsilon);  // con ++ipsilon prima incremento e poi printo/eseguo il codice (salva 51+1 e printa 52)
*/

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 name = "Rizzuti"; 
 console.log(name); 
const cognome = "Rizzuti"; 
// cognome = "parola a caso"; // Uncaught TypeError: Assignment to constant variable. at D1.js:82:9

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function sottraggo(x) {
  return x-4;
}

console.log(sottraggo(12)); 

console.log(x - 4); 

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = 'john'; 
let name2 = 'John'; 

(name1 === name2) ? console.log('i due nomi sono uguali') : console.log('i nomi sono diversi!');
(name1 === name2.toLowerCase()) ? console.log('i due nomi sono uguali') : console.log('i nomi sono diversi!');



/*

function controlla(name1 , name2) {
  if (name1 === name2) {
    return('i due nomi sono uguali'); 
  } else  {
    return('i nomi sono diversi!');
  }
}
console.log(controlla(name1 , name2)); // i nomi sono diversi!

function trasformaInMinuscolo(name1 , name2) {
  
  if (name1 === name2.toLowerCase()) {
    return("name2 ora è scritto minuscolo"); 
  }
}

console.log(trasformaInMinuscolo(name1 , name2)); 

*/
