"use strict"; 

const starWarsCharacters = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '277',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
  },
  {
    name: 'C-3PO',
    height: '167',
    mass: '75',
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a',
  },
  {
    name: 'R2-D2',
    height: '96',
    mass: '32',
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    birth_year: '33BBY',
    gender: 'n/a',
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9BBY',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'female',
  },
  {
    name: 'Owen Lars',
    height: '178',
    mass: '120',
    hair_color: 'brown, grey',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '52BBY',
    gender: 'male',
  },
  {
    name: 'Beru Whitesun lars',
    height: '165',
    mass: '75',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '47BBY',
    gender: 'female',
  },
  {
    name: 'R5-D4',
    height: '97',
    mass: '32',
    hair_color: 'n/a',
    skin_color: 'white, red',
    eye_color: 'red',
    birth_year: 'unknown',
    gender: 'n/a',
  },
  {
    name: 'Biggs Darklighter',
    height: '183',
    mass: '84',
    hair_color: 'black',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '24BBY',
    gender: 'male',
  },
  {
    name: 'Obi-Wan Kenobi',
    height: '182',
    mass: '77',
    hair_color: 'auburn, white',
    skin_color: 'fair',
    eye_color: 'blue-gray',
    birth_year: '57BBY',
    gender: 'male',
  },
]

/* ESERCIZIO 1
  Crea una variabile chiamata "characters" e assegnale un array vuoto
*/
const character = []; 

/* ESERCIZIO 2
  Utilizzando un ciclo for, cicla l'array "starWarsCharacters". 
  Dovrai accedere alla proprietà "name" di ogni oggetto in esso contenuto, e inserirla nell'array "Characters"
  creato precedentemente.
  Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/
// for ( ; ; ) { singolo in collezione, inserire in array metodo push, per accedere dot notation }
// per controllare console.log



for (let i = 0; i<starWarsCharacters.length; i++ ) {
  let person = starWarsCharacters[i]; 
    character.push(person.name); 
}

console.log(character); 



/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un nuovo array chiamato "femaleCharacters" e inserisci al suo interno
  tutti gli oggetto femminili, CON QUESTA STRUTTURA: 
  {name: Leia Organa, hair_color: "brown", eye_color: "brown"}
*/
// nuovo array, ciclo, if accedo alla proprietà e verifico (genere -> female) { costruisco un oggetto con i tre dati riga 120}
// push dentro all'array nuovo

const femaleCharacter = []; 

for (let i = 0; i<starWarsCharacters.length; i++ ) {
  let person = starWarsCharacters[i];
  
  if ( person.gender === "female" ) {
    femaleCharacter.push(person); 
  }
}
console.log(femaleCharacter); 



/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia le seguenti proprietà: blue, yellow, brown, red, blue-gray.
  Ad ognuna di queste proprietà assegna come valore un array vuoto.
*/
// creo un oggetto { [], [], [], []}

const eyeColor = {}; 

eyeColor.blue = []; 
eyeColor.yellow = []; 
eyeColor.brown = []; 
eyeColor.red = []; 
eyeColor["blue-gray"] = []; 

console.log(eyeColor); 

/* ESERCIZIO 5
  Utilizza uno switch statement per inserire uno ad uno gli oggetti dei personaggi di "starWarsCharacters" negli array relativi al colore degli occhi precedentemente creati.
  Ogni personaggio dovrà finire nell'array corrispondente al suo colore degli occhi (al valore della sua proprietà "eye_color").
*/
// switch (leggo le caratteristiche di eye color e in ciascun array array vuoto inserisco (push))


for (let i=0; i<starWarsCharacters.length; i++) {

  const personaggio = starWarsCharacters[i]; 

  switch (personaggio.eye_color) {
    case "blue" : 
      eyeColor.blue.push(personaggio); 
      break; 
    case "yellow":  
      eyeColor.yellow.push(personaggio); 
      break; 
    case "red" : 
      eyeColor.yellow.push(personaggio); 
      break;
    case "brown" :   
      eyeColor.yellow.push(personaggio); 
      break;  
    case "blue-grey" : 
    eyeColor["blue-grey"].push(personaggio); 
      break; 
  }  

}

console.log(eyeColor); 


/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio. Salvala in una variabile chiamata "crewMass".
*/
// uso while {qui dentro sommo tutte le proprietà mass e le metto nella variabile crewMass}
// tip: ParseInt

let i = 0; 
let sommaPesi = 0; 

while (i<starWarsCharacters.length) {

  let person = starWarsCharacters[i]; 
  sommaPesi = (sommaPesi + Number(person.mass)); 

  i++;
  
}

console.log((sommaPesi)); 

// for (i=0;i<starWarsCharacters.length; i++ ) {
//   let person = starWarsCharacters[i]; 
//   sommaPesi = (sommaPesi + Number(person.mass)); 

// }
// console.log((sommaPesi)); 




/* ESERCIZIO 7
  Crea uno switch statement per rivelare la tipologia di carico, utilizzando la massa totale, 
  di un'ipotetica astronave contenente i personaggi dell'array "starWarsCharacters"
  (sei in difficoltà? cerca su un motore di ricerca switch case e conditionals)

  Se la massa è inferiore a 500 stampa in console: "Ship is under loaded"
  Se la massa è uguale a 500 stampa in console: "Ship is half loaded"
  Se la massa è superiore a 700 stampa in console: "Warning: Load is over 700"
  Se la massa è superiore a 900 stampa in console: "Critical Load: Over 900"
  Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: escape from ship now!"

  Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/
// faccio uno switch e verifico il valore di crewMass in quale case finisce

function caricoNave(sommaPesi) {
  
  let messaggio = ""; 

  console.log(sommaPesi);  // 957

  // sommaPesi = 1049;
  // sommaPesi = 500;  

  switch (true) {  // <= non è un truty value??

    case sommaPesi < 500 :
        messaggio = "Ship is under loaded";
      break; 
    case sommaPesi === 500 :
        messaggio = "Ship is half loaded";
      break; 
    case sommaPesi > 700 && sommaPesi < 900 :
        messaggio = "Warning: Load is over 700"; 
      break; 
    case sommaPesi > 900 && sommaPesi < 1000 : 
        messaggio = "Critical Load: Over 900";
      break; 
    case sommaPesi > 1000 : 
        messaggio = "DANGER! OVERLOAD ALERT: escape from ship now!"
      break;  
    default : 
        messaggio = "o la nave è vuota , o sono tutti morti!"   
  }

  return messaggio; 

}

console.log(caricoNave(sommaPesi)); 

/* ESERCIZIO 8
  Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" 
  (Tip: puoi effettuare la riassegnazione del valore corrispondente o creare un nuovo array)
*/
// for () posso fare un nuovo array oppure if (gender è qualcosa) {riassegno quel valore}


function cambiaGender() {

  for (i=0; i<starWarsCharacters.length; i++) {

    let person = starWarsCharacters[i]; 
    
    if (person.gender === "n/a") {
        person.gender = "robot"; 
    }
    console.log(person)
  }
  
}

cambiaGender(); 



let newArray = [];

for (i = 0; i < starWarsCharacters.length; i++) {
  let personaggio = starWarsCharacters[i];
  newArray.push(personaggio);
}

for (i = 0; i < newArray.length; i++) {
  let personaggio = newArray[i]
  if (personaggio.gender == "n/a") {
    personaggio.gender = "robot";
  }
}
console.log(newArray);



/* --EXTRA-- ESERCIZIO 9
  Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "characters" le stringhe corrispondenti a personaggi con lo stesso nome.
  Usa uno più for loop per raggiungere il risultato
  (tip: cerca un metodo degli array per rimuovere un elemento)
  Una volta fatto crea un console.log per controllare la proprietà length di "characters" prima e dopo l'operazione.
*/
// metodo splice




// for (i=0 ; i< character.length; i++) {
//   let personaggio = character[i]; 

//   for (i=0; i<femaleCharacter.length; i++) {
//     let objFemmina = femaleCharacter[i];

//   }
  


// }



/* --EXTRA-- ESERCIZIO 10
  Crea una funzionalità che prenda un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo (a tuo piacimento).
*/
// metodi matematici sono floor, random



// let indiceRandom =  Math.floor(Math.random() * 10); // num tra 0 e 9 
// console.log(indiceRandom); 


// for (i=0; i<starWarsCharacters.length; i++) {
//   let scelta = i; 
//   let personaggio = starWarsCharacters[i]; 
//   console.log(scelta); // stampa tutti gli indici dei 10 personaggi 
  
//   if (scelta === indiceRandom) {
//     // console.log(((starWarsCharacters[i])))

//      personaggio.forEach(elem => {
//         console.log(String(elem)); 
//      });
   
//   }
  
// }