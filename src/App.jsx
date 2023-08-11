import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const newQuote = useSelector((state) => state.quote);

  return (
    <main id="quote-wrapper">
      <section id="quote-box">
        <article id="quote">
          <h1 id="text">
            <i className="fa-solid fa-quote-left"></i>
            <br />
            {newQuote.quote}
            <br />
            <i className="fa-solid fa-quote-right"></i>
          </h1>
          <div>
            <p id="author">
              from <em>{newQuote.by}</em>
            </p>
            <p id="movie">
              in {newQuote.from} ({newQuote.year})
            </p>
          </div>
        </article>
        <aside id="btns">
          <div id="socials">
            <a id="tweet-quote" href="twitter.com/intent/tweet">
              twitter
            </a>
            <a id="tumblr-quote" href="">
              tumblr
            </a>
          </div>
          <button
            id="new-quote"
            onClick={() =>
              dispatch({
                type: "quote/changeQuote",
              })
            }
          >
            New quote
          </button>
        </aside>
      </section>
      <aside id="creator">by me</aside>
    </main>
  );
}

export default App;
