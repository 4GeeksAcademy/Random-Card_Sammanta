window.onload = randomCards();
const button = document.getElementById("button");
button.addEventListener("click", randomCards);

function randomCards() {
  let symbols = ["&spades;", "&clubsuit;", "&hearts;", "&diams;"];
  let randomSymbols = Math.floor(Math.random() * symbols.length);

  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let randomNumbers = Math.floor(Math.random() * numbers.length);

  document.getElementById("card").className = symbols[randomSymbols];

  document.getElementById("thesymbol").innerHTML = symbols[randomSymbols];
  document.getElementById("mynumber").innerHTML = numbers[randomNumbers];
  document.getElementById("thesymbol2").innerHTML = symbols[randomSymbols];
}
setTimeout(randomCards, 3000);
