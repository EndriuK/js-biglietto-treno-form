let km = prompt("Inserisci i km da percorrere")
let eta = prompt("Inserisci la tua età")

let prezzoBase = km * 0.21
let sconto = 0;
let prezzoScontato;
let prezzFinale; 


if (eta < 18) {
    let sconto = prezzoBase * 0.2;
    prezzoFinale = prezzoBase - sconto
}

else if(eta > 65) {
   let sconto = prezzoBase * 0.4;
    prezzoFinale = prezzoBase - sconto;
}

console.log(prezzoFinale)