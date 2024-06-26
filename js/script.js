document
  .getElementById("ticketForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let km = parseFloat(document.getElementById("km").value);
    let eta = parseInt(document.getElementById("eta").value);

    let prezzoBase = 0.21 * km;
    let sconto = 0;

    if (eta < 18) {
      sconto = 0.2;
    } else if (eta > 65) {
      sconto = 0.4;
    }

    let prezzoFinale = prezzoBase * (1 - sconto);

    document.getElementById(
      "result"
    ).innerText = `Il prezzo del biglietto è: ${prezzoFinale.toFixed(2)} €`;
  });
