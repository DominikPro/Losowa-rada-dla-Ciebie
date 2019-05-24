let h1 = document.querySelector("h1");
let input = document.querySelector("input");
let btnDodaj = document.querySelector(".add");
let btnResetuj = document.querySelector(".clean");
let btnPokazRade = document.querySelector(".showAdvice");
let btnPokazMozliwosci = document.querySelector(".showOptions");
let radaDlaCiebi = ["przemyśl to jeszcze", " jeśli nie teraz to kiedy"];

let dodajeRadeDoTablicy = function(e) {
  e.preventDefault();
  radaDlaCiebi.push(input.value);
  input.value = "";
};

let wyczyscTablice = () => {
  radaDlaCiebi.length = 0;
};

let pokazOpcje = () => {
  alert(radaDlaCiebi.join(" --- --- "));
};

let losujeRade = () => {
  let wylosowanyNumer = Math.floor(Math.random() * radaDlaCiebi.length);
  let radaDlaCiebiDuzeLitery = radaDlaCiebi.map(function(elementTablicy) {
    return elementTablicy.toUpperCase();
  });
  h1.textContent = radaDlaCiebiDuzeLitery[wylosowanyNumer];
};

btnDodaj.addEventListener("click", dodajeRadeDoTablicy);
btnResetuj.addEventListener("click", wyczyscTablice);
btnPokazMozliwosci.addEventListener("click", pokazOpcje);
btnPokazRade.addEventListener("click", losujeRade);
