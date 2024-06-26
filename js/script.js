let km = prompt("Inserisci i km da percorrere")
let eta = prompt("Inserisci la tua età")

let prezzoBase = km * 0.21

let prezzFinale; 

if (eta < 18) {
    prezzoFinale = prezzoBase * 0.8
}

console.log(prezzoFinale)