const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");

async function getQuote() {
  quoteText.textContent = "Loading...";
  authorText.textContent = "";

  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    quoteText.textContent = `"${data.content}"`;
    authorText.textContent = `– ${data.author}`;
  } catch (err) {
    quoteText.textContent = "Something went wrong. Try again!";
  }
}

window.onload = getQuote;
