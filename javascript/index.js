// generatore di numeri a 1 a 90 con cella

function generaCella(numero) {
  const div = document.createElement("div");

  div.classList.add("cella");

  div.textContent = numero;

  return div;
}
for (let numero = 1; numero <= 90; numero++) {
  const cella = generaCella(numero);

  document.body.appendChild(cella);
}
// celle cliccabili
// (non mi funzionano forse perche non ho definito bene la funzione)

// numero.addEventListener("click", function () {
//   numero.classList.add("selected");

//   const numeroCasuale = getElementByid("numeroCasuale");
// });

// const previusSelected = document.getElementsByClassName("selected")[0];

// if (previusSelected) {
//   previusSelected.classList.remuve("selected");
// }

// il selettore di numeri casuali / pesca dei numeri

let numeroCasuale = [];

function generaNumeriCasuali() {
  do {
    numeroCasuale = Math.floor(Math.random() * 90) + 1;
  } while (numeriUsciti.includes(numeroCasuale));

  numeriUsciti.push(numeroCasuale);

  alert("IL NUMERO ESTRATTO è :" + numeroCasuale);
}

// mi manca la possibilita di selezionare i numeri nella tabella e di far funzionare il tasto
