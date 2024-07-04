import { useEffect, useState } from "react";

import "../Styles/Quotes.css";

const Quotes = () => {
  const [countQuotes, setCountQuotes] = useState(1);
  const [quotes, setQuotes] = useState("");

  function nextQuote() {
    setCountQuotes((count) => count + 1);
  }
  function backQuote() {
    setCountQuotes((count) => count - 1);
  }
  useEffect(() => {
    fetch("https://dummyjson.com/quotes/" + countQuotes)
      .then((res) => res.json())
      .then((data) => setQuotes(data));
  }, [countQuotes]);

  return (
    <>
      <main className="quotes">
        <header>
          <p>{countQuotes}</p>
        </header>
        <button
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            marginTop: "10px",
          }}
          onClick={backQuote}
        >
          Back Quotes
        </button>
        <button onClick={nextQuote}>Next Quotes</button>
        <article style={{ marginBottom: "10px" }}>{quotes.quote}</article>
        <article>{quotes.author}</article>
      </main>
    </>
  );
};

export default Quotes;
