const quotes = [
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Believe you can and you're halfway there.",
  "Hardships often prepare ordinary people for an extraordinary destiny.",
  "Don't watch the clock; do what it does. Keep going.",
  "The best way to get started is to quit talking and begin doing."
];

function generateQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[random];
}

function copyQuote() {
  const text = document.getElementById("quote").innerText;
  navigator.clipboard.writeText(text);
  alert("Quote copied!");
}
