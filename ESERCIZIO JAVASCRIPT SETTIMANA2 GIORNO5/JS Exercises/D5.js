/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

function stampa() {
  for (i=0; i<pets.length; i++) {
    let animale = pets[i]; 
    document.write(`${animale} <br>`) 
  }
}

stampa();

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

let pippo = () => {
  
  pets.push("anatra");  // <- va in index 0 ?? 
  const animaliOrdinati = pets.sort(); 
  

  return animaliOrdinati

}

console.log(pippo()); 

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

let pippoAlContrario = () => {

  const animaliAlContraio = pets.reverse(); 

  return animaliAlContraio; 
}

console.log(pippoAlContrario()); 

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

console.log ( " pets prima" , pets)

function spostaElementoPets() {

  const primoValore = pets[0]; 

  pets.splice(0 , 1); 
  pets.push(primoValore)

}

spostaElementoPets(); 
console.log ( " pets dopo" , pets)

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  }
]


const macchina = () => {   // <--- targa generata random ad ogni refresh della pagina 
  
  for (i=0; i<cars.length; i++) {
    let macchina = cars[i]; 
    macchina.licensePlate = ""; 
    macchina.licensePlate += (randomLett());
    macchina.licensePlate += (randomLett());
    macchina.licensePlate += (randomNum());
    macchina.licensePlate += (randomNum());
    macchina.licensePlate += (randomNum());
    macchina.licensePlate += (randomLett());
    macchina.licensePlate += (randomLett()); 
  }
  
}

macchina(); 
console.log(cars)

function randomLett() {
  let numCaso = Math.floor(Math.random() * 26); // num casuale tra 0 e 25
  let lettera = ""; 
  switch (numCaso) {
    case 0 : lettera = "a"; 
      break;
    case 1 : lettera = "b";
      break;  
    case 2 : lettera = "c"; 
      break;
    case 3 : lettera = "d";
      break;  
    case 4 : lettera = "e"; 
      break;
    case 5 : lettera = "f";
      break;  
    case 6 : lettera = "g"; 
      break;
    case 7 : lettera = "h";
      break;  
    case 8 : lettera = "i"; 
      break;
    case 9 : lettera = "j";
      break;  
    case 10 : lettera = "k"; 
      break;
    case 11 : lettera = "l";
      break;  
    case 12 : lettera = "m"; 
      break;
    case 13 : lettera = "n";
      break;  
    case 14 : lettera = "o"; 
      break;
    case 15 : lettera = "p";
      break;  
    case 16 : lettera = "q"; 
      break;
    case 17 : lettera = "r";
      break;  
    case 18 : lettera = "s"; 
      break;
    case 19 : lettera = "t";
      break;  
    case 20 : lettera = "u"; 
      break;
    case 21 : lettera = "v";
      break;  
    case 22 : lettera = "w"; 
      break;
    case 23 : lettera = "x";
      break;  
    case 24 : lettera = "y"; 
      break;
    case 25 : lettera = "z";
      break;  
    default : lettera = "#";    
  }

  return lettera.toUpperCase(); 
}

function randomNum() {
  
  let numeroRandom = Math.floor(Math.random() * 10);;

  return(numeroRandom.toString()); 
}

console.log("prova lettera random" , randomLett());  
console.log("prova numero random" , randomNum()); 

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const obj = {};


console.log("cars prima" , cars); 



function maneggiaObj() {

   
  cars.push(obj); 
  obj.brand = "Ferrari"; 
  obj.model = "SF-23"; 
  obj.color = "Red";
  obj.trims = ['life', 'style', 'r-line'];
  obj.licensePlate = ""; 
  obj.licensePlate += (randomLett());
  obj.licensePlate += (randomLett());
  obj.licensePlate += (randomNum());
  obj.licensePlate += (randomNum());
  obj.licensePlate += (randomNum());
  obj.licensePlate += (randomLett());
  obj.licensePlate += (randomLett()); 

  for (let i =0; i<cars.length; i++) {
    let macchina = cars[i]; 

    let subArray = macchina.trims; 
    subArray.splice(-1 , 1);  
    
  }
  
   
}

maneggiaObj()

console.log("cars dopo" , cars); 


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

let justTrims = []; 
console.log("array prima push" , justTrims); 

let arrayMaga = []; 

function PushIt() {

  for (let i=0; i<cars.length; i++) {
    let macchina = cars[i]; 
    let subArray = macchina.trims; 
    arrayMaga = subArray.shift()
    justTrims.push([arrayMaga]); 
  }
  
}
PushIt()

console.log("array dopo push" , justTrims); 


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

function FizzBuzz() {
  
  for (let i =0; i<cars.length; i++) {
    let macchina = cars[i]; 

    if ((macchina.color.slice(0 , 1).toLowerCase()) === "r") {
      console.log("fizz");

    } else {
      console.log("Buzz"); 
    }
  }
}


FizzBuzz(); 







/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]


function stampaValori() {
  
  let i = 0; 

  while (i <= numericArray.length - 5) {
    let value = numericArray[i]; 
    console.log(value); 
     
    i++; 
  }
}

stampaValori(); 







/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']  // [7, 12, 19, 21, 4]; 
let newArray = []; 

function posizioniLettere() {
  
  for (let i=0; i<charactersArray.length; i++) {
    let lettera = charactersArray[i]; 

    associaNumero(lettera); 

    newArray.push(num); 
    
  }
}

function associaNumero (lettera) {
  switch (lettera) {
    case "a": num = 1;
      break; 
    case "b": num = 2;
      break;   
    case "c": num = 3; 
      break; 
    case "d": num = 4;
      break; 
    case "e": num = 5; 
      break; 
    case "f": num = 6;
      break; 
    case "g": num = 7;
      break; 
    case "h": num = 8;
      break; 
    case "i": num = 9; 
      break; 
    case "l": num = 10;
      break; 
    case "m": num = 11; 
      break; 
    case "n": num = 12;
      break; 
    case "o": num = 13; 
      break; 
    case "p": num = 14;
      break; 
    case "q": num = 15; 
      break; 
    case "r": num = 16;
      break; 
    case "s": num = 17; 
      break; 
    case "t": num = 18;
      break; 
    case "u": num = 19;
      break; 
    case "v": num = 20;
      break; 
    case "z": num = 21;
      break; 
    default : "#"  

  }
  
  return num; 
}



posizioniLettere(); 

console.log("array post push" , newArray)