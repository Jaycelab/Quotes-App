import { useState } from "react";

const QuotesApp = () => {
  //fetching the quotes from json
  const [quote, setQuote] = useState({
    text: "Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.",
    author: "John Wooden",
  });

  // Fetch New Quote. REVIEW***********
  const fetchNewQuote = async () => {
    const response = await fetch("/quotes.json");
    const data = await response.json();
    setQuote({
      text: data.content,
      author: data.author,
    });
  };

  // Quote Text and Author
  return (
    <div className="container">
      <div className="quotes-app">
        <h1 className="app-heading">A Daily Quote.</h1>
        <i className="bx bxs-heart fav-icon"></i>

        <div className="quote">
          <i className="bx bxs-quote-alt-left left-quote"></i>
          <p className="quote-text">
            Success is peace of mind, which is a direct result of
            self-satisfaction in knowing you made the effort to become the best
            of which you are capable.
          </p>
          <p className="quote-author">John Wooden</p>
          <i className="bx bxs-quote-alt-right right-quote"></i>
        </div>

        <div className="circles">
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="circle-3"></div>
          <div className="circle-4"></div>
        </div>

        <div className="buttons">
          <button className="btn btn-new">New Quote</button>
          <button className="btn btn-fav">Add Favorite</button>
        </div>
      </div>
    </div>
  );
};

export default QuotesApp;
