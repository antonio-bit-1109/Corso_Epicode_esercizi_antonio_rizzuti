/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 50; 
let num2Caso = Math.floor(Math.random() * 100) + 1;

const paragrafo = document.createElement("p"); 
document.body.appendChild(paragrafo); 

const bottone = document.createElement("button"); 
bottone.innerHTML = "VIA!"
document.body.appendChild(bottone); 
bottone.style.marginRight = "20px"; 

const bottoneRefresh = document.createElement("button");
document.body.appendChild(bottoneRefresh); 
bottoneRefresh.innerHTML = "ricarica pagina!"

bottone.addEventListener('click' , () => {
  acchiappaNumero(num1 , num2Caso); 
})

bottoneRefresh.addEventListener('click' , () => {
  ricarica_Pagina(); 
})

function acchiappaNumero(num1 , num2Caso) {
  
  if (num1 > num2Caso) {
    paragrafo.innerHTML = `il numero casuale è uscito ${num2Caso} - se stai leggendo questo num2 è uscito più piccolo di 50`;
    console.log(num2Caso); 

  } else if (num1 < num2Caso) {
    paragrafo.innerHTML = `il numero casuale è uscito ${num2Caso} - se stai leggendo questo il numero casuale è uscito maggiore di 50`;
    console.log(num2Caso);
  }
}

function ricarica_Pagina() {
  location.reload() 
}



/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numeretto = Math.floor(Math.random() * 100) + 1; 

function notEqual(aCaso) {
  
  if (numeretto > 50) {
    console.log(numeretto);
    return "not equal"; 
    
  } else if (numeretto < 50) {
    console.log(numeretto);
    return "equal";
    
  }
}

console.log(notEqual(numeretto)); 

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero = 17;
numero++; 
numero++
++numero;  

function isDivisible$$( variab ) {
  
    if (numero % 5 === 0) {
      return `${numero} è pari`;

    } else {
      return `${numero} è dispari`;
    }
}

console.log(isDivisible$$(numero)); 

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n0 = 3;
let n1 = 5;

++n0; 

function verifica( a , b) {
  if (a === 8) {
    return `${a} è uguale a 8`;

  } else if (a + b === 8) {
    return `la somma di ${a} e ${b} è uguale a 8`

  } else {
    return " nessuno dei due numeri da soli, o se sommati, danno risultato 8"; 
  }
}

console.log(verifica( n0 , n1)); 

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const input = document.getElementById("input-user"); 
let totalShoppingCart = input.value; 


isBlackFriday = true; 

function pagamentoFinale(totalShoppingCart) {

  const titolo = document.createElement("h2"); 
  document.body.appendChild(titolo); 

  if (isBlackFriday) {

    totalShoppingCart = totalShoppingCart - ((totalShoppingCart*20)/100); 
    console.log(totalShoppingCart); 

    if (totalShoppingCart > 50) {
      titolo.innerHTML = "Hai diritto alla spedizione gratis!";

    } else if ((totalShoppingCart < 50)) {
      totalShoppingCart = totalShoppingCart + 10;
      titolo.innerHTML = "Non hai diritto alla spedizione gratis!";
      
    }
  }

  return totalShoppingCart; 
}

const bottoneSpedizGratis = document.createElement("button"); 
document.body.appendChild(bottoneSpedizGratis); 
bottoneSpedizGratis.innerHTML = "Cliccami per sapere se hai diritto alla spedizione gratis!"
bottoneSpedizGratis.style.marginLeft = "2em"; 

bottoneSpedizGratis.addEventListener('click' , () => {
 
  pagamentoFinale(totalShoppingCart); 
  console.log(pagamentoFinale(totalShoppingCart)); 
})

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */



/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let uno = 2; 
let due = 66; 
let tre = 34; 

let array = []; 

function mettiamoInOrdine(uno , due , tre) {
  
    if (tre > due) {
      if (tre > uno) {
        array.push(tre); 
        
      } if (due > uno) {
        array.push(due); 
        array.push(uno); 
      } else {
        array.push(uno);
        array.push(due);
      }

    } else if (due > tre ) {
      if (due > uno) {
        array.push(due);

      } if ( tre > uno) {
        array.push(tre); 
        array.push(uno); 
      } else {
        array.push(uno); 
        array.push(tre); 
      }

    } else if (uno > tre) {
      if (uno > due) {
        array.push(uno); 
      } if (due > tre) {
        array.push(due);
        array.push(tre); 
      } else {
        array.push(tre);
        array.push(due);
      }

    } else if (uno > due) {
      if (uno > tre) {
        array.push(uno); 
      } if (due > tre) {
        array.push(due); 
        array.push(tre); 
      } else {
        array.push(tre); 
        array.push(due); 
      }
    }
    return array; 
}

console.log(mettiamoInOrdine(uno,due,tre)); 

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let valore = "bello-bello"; 
console.log(valore);

function controllo_Valore(param) {

  valore = 5; 

    if (typeof valore === "string") {
      document.write(" bello bello è una stringa"); 
    } else if (typeof valore !== "string") {
      document.write(" sei qualcos'altro"); 
    }
}

controllo_Valore(valore); 
controllo_Valore("bello-bello"); 

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numerino = 40; 

function pari_Dispari(n) {
  if (n%2 === 0) {
    return `${n} è pari.`; 

  } else if (n%2 !== 0) {
    return `${n} è dispari.`; 
  }
}

const H3 = document.createElement("h3"); 
document.body.appendChild(H3); 
H3.innerHTML = pari_Dispari(numerino); 

// ESERCIZIO 10
//  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 12; 
  
  if (val < 10 && val > 5) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

me["city-good"] = "Toronto"; 
me.city = "Toronto"; 
console.log(me); 

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName; 

console.log(me); 
delete me["city-good"]; 
console.log(me); 


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop(); 
console.log(me); 


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let arrayVuoto = []; 


console.log(arrayVuoto); 

for (let i=0; i<11; i++) {
  arrayVuoto.push(i); 
}

console.log(arrayVuoto); 

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

arrayVuoto.pop(); 
console.log(arrayVuoto); 

arrayVuoto.push(100); 
console.log(arrayVuoto); 
