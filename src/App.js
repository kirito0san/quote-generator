import "./App.css";
import React, { useState } from "react";

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber",
  };
  const [quote, setQuote] = useState(quoteData);

  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(quote.author + " once said: " + quote.content);
    alert("copied");
  };
  let textToShare = `${quote.author} once said: ${quote.content}`;
  const twitter = `https://twitter.com/intent/tweet?text=${textToShare}`;
  const whatsapp = `https://wa.me/?text=${textToShare}}`;
  const gmail = `mailto:email@example.com?subject=${textToShare}`
  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">
            Copy
          </button>
          <button onClick={generateQuote}>Generate Another Quote</button>
          <button onClick={() => window.open(twitter, '_blank')}>
            <i class="fa-brands fa-twitter"></i>
          </button>
          <button onClick={() => window.open(whatsapp, '_blank')}>
            <i class="fa-brands fa-whatsapp"></i>
          </button>
          <button onClick={() => window.open(gmail, '_blank')}>
            <i class="fa-regular fa-envelope"></i>
          </button>
        </div>

      </div>
    </>
  );
};

export default App;
