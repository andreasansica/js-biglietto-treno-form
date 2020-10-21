// utente inserisce nome
var nome = document.getElementById('nome');
// console.log(nome.value);

// utente inserisce km
var km = document.getElementById('km');
// console.log(km.value);

// utente inserisce età
var eta = document.getElementById('eta');
// console.log(eta.value);

//costo km biglietto
var tariffa = 0.21;

var biglietto = tariffa * km;

// variabil bottoni
var genera = document.getElementById('generaBiglietto');
var annulla = document.getElementById('annullaBiglietto');




// calcolo prezzo genera
genera.addEventListener('click',
 function() {


   // sconto 20% se under 18
   if (eta === Under-18){
   biglietto = biglietto * 0.80;
   }


   // sconto 40% se over 65

   else if (eta === Over-65) {
     biglietto = biglietto * 0.60;
   }

} );

// nome passeggeri
var titolo = "NOME<br> PASSEGGERO:";
        var dati = name;
        classe = "gray";
        creaDettagliBiglietto(titolo, dati, classe)

// offerta

// carrozza

// Codice CP

// Costo biglietto
