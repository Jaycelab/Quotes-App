import { useState } from "react";

const QuotesApp = () => {
  const [quote, setQuotes] = useState({
    text: "Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable",
    author: "John Wooden",
  });

  //favorites array to store the favorite quotes. Initilizes a state variable favorite using useState hook. INitial value is an empty array to indiciate that there are no favorites yet. The setFavorites function is used to update the favorites array.
  const [favorites, setFavorites] = useState([]);

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

  //toggle the favorites section
  const toggleFavorites = () => {
    //showFavorites is a boolean value, so we can toggle it by using the not operator (!)
    setShowFavorites(!showFavorites);
  };

  //function to add a quote to the favorites array using spread operator
  const addToFavorites = () => {
    //checking if the current quote is already in the favorites array using some method to check if any of the quotes in the favorites array have the same text and author as the current quote
    const isAlreadyInFavorites = favorites.some(
      (fav) => fav.text === quote.text && fav.author === quote.author
    );
    //if the current quote is not in the favorites array, add it to the favorites array
    if (!isAlreadyInFavorites) {
      //adding the current quote (object) to the favorites array
      setFavorites([...favorites, quote]);
    }
  };

  return (
    <div className="container">
      <div className="quotes-app">
        <h1 className="app-heading">A Daily Quote.</h1>
        <i className="bx bxs-heart fav-icon" onClick={toggleFavorites}></i>
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
          <button className="btn btn-fav" onClick={addToFavorites}>
            Add Favorite
          </button>
        </div>

        {/*conditional rendering of the favorites section*/}
        {showFavorites && (
          <div className="favorites">
            <button className="btn-close" onClick={toggleFavorites}>
              <i className="bx bx-x"></i>
            </button>
            {/*mapping through the favorites array to display each favorite quote*/}
            {favorites.map((favQuote, index) => (
              <div className="fav-quote" key={index}>
                <div className="fav-quote-delete">
                  <i
                    className="bx bx-x-circle"
                    onClick={() => {
                      //function to remove a quote from the favorites array using filter method
                      const updatedFavorites = favorites.filter(
                        (quote) => quote.text !== favQuote.text
                      );
                      //updating the favorites array
                      setFavorites(updatedFavorites);
                    }}
                  ></i>
                </div>
                <div className="fav-quote-content">
                  <div className="fav-quote-text">{favQuote.text}</div>

                  <div className="fav-quote-author">{favQuote.author}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuotesApp;
