import { useState } from "react";

const QuotesApp = () => {
  const [quote, setQuotes] = useState({
    text: "Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable",
    author: "John Wooden",
  });

  //opening and closing the favorites section
  const [showFavorites, setShowFavorites] = useState(false);

  //api call to get quotes from the server (TEMPORARY)
  const fetchNewQuote = async () => {
    const url = "https://api.quotable.io/random";
    const response = await fetch(url);
    //converting to json
    const data = await response.json();
    //setting the new quote
    setQuotes({
      text: data.content,
      author: data.author,
    });
  };
  return (
    <div className="container">
      <div className="quotes-app">
        <h1 className="app-heading">A Daily Quote.</h1>
        <i className="bx bxs-heart fav-icon"></i>

        <div className="quote">
          <i className="bx bxs-quote-alt-left left-quote"></i>
          <p className="quote-text">{quote.text}</p>
          <p className="quote-author">{quote.author}</p>
          <i className="bx bxs-quote-alt-right right-quote"></i>
        </div>

        <div className="circles">
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="circle-3"></div>
          <div className="circle-4"></div>
        </div>

        <div className="buttons">
          <button className="btn btn-new" onClick={fetchNewQuote}>
            New Quote
          </button>
          <button className="btn btn-fav">Add Favorite</button>
        </div>

        <div className="favorites">
          <button className="btn-close">
            <i className="bx bx-x"></i>
          </button>
          <div className="fav-quote">
            <div className="fav-quote-delete">
              <i className="bx bx-x-circle"></i>
            </div>
            <div className="fav-quote-content">
              <div className="fav-quote-text">
                "Success is peace of mind, which is a direct result of
                self-satisfaction in knowing you made the effort to become the
                best of which you are capable"
              </div>

              <div className="fav-quote-author">"John Wooden"</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotesApp;
