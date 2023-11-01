"use strict"; 

const array = ["bello" , "figo"]; 

// METODI BASE DEGLI ARRAY:

//************************** LENGHT (PROPRIETà) ***********************/ // VEDERE LUNGHEZZA ARRAY 

function giocoConArray(params) {
   return array.length;  //proprietà - no parentesi dopo .lenght
}

console.log(giocoConArray(array)); // = numero degli indici nell'array = 2

//************************** PUSH() ***********************/ // INSERIRE UN ELEMENTO IN CODA AD UN ARRAY 

function pushaArray(params) {
   array.push( 1 , 5 );      //dentro .push(elem1 , elem2 , ..) inserisco tutti gli elementi in coda che voglio aggiungere all'array 
   return array; 
}

console.log(pushaArray(array)); // ['bello', 'figo', 1, 5]


//************************** POP() ***********************/ // RIMUOVERE ULTIMO ELEMENTO DA UN ARRAY 

function poppa(params) {
   array.pop(); 
   return array; 
}

console.log(poppa(array));  // 5 è stato eliminato   all'inizio era: ['bello', 'figo', 1, 5] ==> dopo pop() -> ['bello', 'figo', 1]

//************************** SHIFT() ***********************/ // RIMUOVERE IL PRIMO ELEMENTO DA UN ARRAY E RETURNA QUELL'ELEMENTO

array.shift();

console.log(array);  // ['figo', 1]; 



//************************** UNSHIFT() ***********************/ // AGGIUNGE UNO O PIù ELEMENTI IN TESTA ALL'ARRAY E RETURNA LA NUOVA LUNGHEZZA DELL'ARRAY 

array.unshift("bruco" , 55);  // inserisco gli elementi che voglio aggiungere in testa all array

console.log(array);  // ['bruco', 55, 'figo', 1]



//************************** FIND() ***********************/ // RITORNA IL PRIMO ELEMENTO CHE SODDISFA LE CARATTERISTICHE DICHIARATE 

const array2 = [1, 5, 33, "balocco", 7, "bilbo" , 9]; 

const trovaParola = array2.find((string => string.length < 6));  // questo significa: trova, in array2, la PRIMA stringa che abbia una lunghezza minore di 6; 
console.log(trovaParola); // bilbo


const trovaNumeroMaggiore = array2.find(number => number > 5); // questo significa: trova, in array2, il primo numero maggiore di 5; 
console.log(trovaNumeroMaggiore); // 33; 


const trovaNumeroMax = array2.find(number => number > 5 && number < 10 ); 
console.log(trovaNumeroMax); // 7 

/*
let pippo = function trovaMax() {

   let max = 0; 
   
   for (let i=0; i<array2.length; i++) {
      let value = array2[i]; 

      if (value > max) {
         max = value;
      }

   }
   return max; 
}

console.log(trovaNumeroMax); 

*/


//************************** SOME() ***********************/ // CONTROLLA SE ALMENO UNO DEGLI ELEMENTI PRESENTI NELL'ARRAY SODDISFA I REQUISITI DICHIARATI. 
                                                             // RITORNA TRUE SE ALMENO UN ELEMENTO PASSA IL "TEST" ALTRIMENTI RETURN "FALSE"

const array3 = [1, 34, 55, "bello", 90]; 

const ciSonoNumPari = array3.some(num => num % 2 === 0);  // almeno uno dei numeri presenti in array3, se diviso due, mi da resto zero? (quindi è un numero pari?)  
console.log(ciSonoNumPari); // true 



//************************** EVERY() ***********************/ // CONTROLLA SE TUTTI GLI ELEMENTI HANNO PASSATO IL TEST DETTATO DALLA FUNZIONE 

const allNumbers = array3.every(element => element === Number);
console.log(allNumbers); // false, perchè c'è la stringa "bello" in array3

const tuttiNumPari = array3.every( element => element % 2 === 0) // sono tutti numeri pari?? 
console.log(tuttiNumPari); // false, in array3 non ci sono tutti numeri pari. 



//************************** SORT() ***********************/ // ORDINA GLI ELEMENTI DENTRO UN ARRAY (STRINGHE ==> ALFABETICO || NUMERI ==> CRESCENTE/DECRESCENTE)

// ** ordinare stringhe in ordine alfabetico **

const arrayStringa = ["drillo" , "paroliere" , "zigomo" , "grapplo" , "abaco"]; 
const ordineAlfabetico = arrayStringa.sort(); 
console.log(ordineAlfabetico); // elementi ordinati in ordine alfabetico: ['abaco', 'drillo', 'grapplo', 'paroliere', 'zigomo']; 

// ** ordinare numeri in ordine crescente 

const arrayCacca = [1, 54, 65, 723, 12, 999, 199];
const ord_Crescente = arrayCacca.sort((a , b) => a - b ); // ordinare in modo crescente ( SE SCRIVE COSì , NON TE FA DOMANDE ) - CAMBIA SOLO a - b ==> CRESCENTE
console.log(ord_Crescente);  //  [1, 12, 54, 65, 199, 723, 999]


// ** ordinare numeri in ordine de-crescente 

const ord_Decrescente = arrayCacca.sort((a , b) => b - a ); // ordinare in modo DEcrescente ( SE SCRIVE COSì , NON TE FA DOMANDE ) - CAMBIA SOLO b - a ==> DECRESCENTE
console.log(ord_Decrescente);  //  [999, 723, 199, 65, 54, 12, 1] 



//************************** INCLUDES() ***********************/ // TI DICE SE UN ARRAY INCLUDE IN SE UN CERTO ELEMENTO OPPURE NO, RETURNA TRUE OR FALSE 

const array5 = [1, 2, 3, 4, 54, "birillo" , "candela" ,56]; 

const ciStaDentro = array5.includes(54); 
console.log(ciStaDentro); // true 

const ciStaDentro1 = array5.includes("birillo"); 
console.log(ciStaDentro1); // true 

const ciStaDentro2 = array5.includes(99); 
console.log(ciStaDentro2); // false




//************************** SLICE() ***********************/ // INSERIRE UN ELEMENTO IN CODA AD 

//************************** MAP() ***********************/ // INSERIRE UN ELEMENTO IN CODA AD 

//************************** FILTER() ***********************/ // INSERIRE UN ELEMENTO IN CODA AD 

//************************** REDUCE() ***********************/ // INSERIRE UN ELEMENTO IN CODA AD 

//************************** FOREACH() ***********************/ // INSERIRE UN ELEMENTO IN CODA AD 

//************************** INDEXOF() ***********************/ // INSERIRE UN ELEMENTO IN CODA AD 

//************************** LASTINDEXOF() ***********************/ // INSERIRE UN ELEMENTO IN CODA AD 

//************************** REVERSE() ***********************/ // INSERIRE UN ELEMENTO IN CODA AD 

//************************** CONCAT() ***********************/ // INSERIRE UN ELEMENTO IN CODA AD 

//************************** JOIN() ***********************/ // INSERIRE UN ELEMENTO IN CODA AD 

//************************** TOSTRING() ***********************/ // INSERIRE UN ELEMENTO IN CODA AD 