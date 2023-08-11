import db from "./db.json";
import "./App.css";

function App() {
  const possibleQuotes = db.length;
  const randomIndex = Math.floor(Math.random() * possibleQuotes);
  console.log(db[randomIndex].quote);

  return (
    <main id="quote-wrapper">
      <section id="quote-box">
        <article id="quote">
          <h1 id="text">
            <i className="fa-solid fa-quote-left"></i>
            {db[randomIndex].quote}
            <i className="fa-solid fa-quote-right"></i>
          </h1>
          <div>
            <p id="author">
              from <em>{db[randomIndex].by}</em>
            </p>
            <p id="movie">
              in {db[randomIndex].from} ({db[randomIndex].year})
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
          <button id="new-quote">New quote</button>
        </aside>
      </section>
      <aside id="creator">by me</aside>
    </main>
  );
}

export default App;
