import React from "react";
import Post from "../components/Post";
import React, { useState } from "react";
import "../css/home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home_hero">
        <h1>Welome to Cineflex!</h1>
        <p style={{ color: "black" }}>
          The Worlds first movie based social media site for mover lovers around
          the globe.
        </p>
        <button className="join_btn">Join Today</button>
        <Post />
      </div>
      <div className="trending">
        <h2>Trending Movies</h2>
        <div className="card">
          <div className="card_body">
            <img
              className="card_image"
              src="https://i.ytimg.com/vi/7LRqxnxaq1o/maxresdefault.jpg"
            />
            <h2 className="card_title">Top Gun: Maverick</h2>
            <p className="card_body">
              After more than thirty years of service as one of the Navy’s top
              aviators, Pete “Maverick” Mitchell (Tom Cruise) is where he
              belongs, pushing the envelope as a courageous test pilot and
              dodging the advancement in rank that would ground him.
            </p>
          </div>
          <button className="card_btn">
            <Link to="/login">Sign In To View</Link>
          </button>
        </div>
        <div className="card">
          <div className="card_body">
            <img
              className="card_image"
              src="https://hollywoodlife.com/wp-content/uploads/2022/06/Nope-Everything-To-Know-embed-1.jpg"
            />
            <h2 className="card_title">Nope</h2>
            <p className="card_body">
              Two siblings who run a California horse ranch discover something
              wonderful and sinister in the skies above, while the owner of an
              adjacent theme park tries to profit from the mysterious,
              otherworldly phenomenon.
            </p>
          </div>
          <button className="card_btn">
            <Link to="/login">Sign In To View</Link>
          </button>
        </div>
        <div className="card">
          <div className="card_body">
            <img
              className="card_image"
              src="https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
            />
            <h2 className="card_title">THOR: LOVE AND THUNDER</h2>
            <p className="card_body">
              "Thor: Love and Thunder" finds Thor (Chris Hemsworth) on a journey
              unlike anything he's ever faced -- a quest for inner peace. But
              his retirement is interrupted by a galactic killer known as Gorr
              the God Butcher (Christian Bale), who seeks the extinction of the
              gods.
            </p>
          </div>
          <button className="card_btn">
            <Link to="/login">Sign In To View</Link>
          </button>
        </div>
        <div className="card">
          <div className="card_body">
            <img
              className="card_image"
              src="https://m.media-amazon.com/images/M/MV5BZDQyODUwM2MtNzA0YS00ZjdmLTgzMjItZWRjN2YyYWE5ZTNjXkEyXkFqcGdeQXVyMTI2MzY1MjM1._V1_FMjpg_UX1000_.jpg"
            />
            <h2 className="card_title">MINIONS: THE RISE OF GRU</h2>
            <p className="card_body">
              In the heart of the 1970s, amid a flurry of feathered hair and
              flared jeans, Gru (Oscar® nominee Steve Carell) is growing up in
              the suburbs. A fanboy of a supervillain supergroup known as the
              Vicious 6, Gru hatches a plan to become evil enough to join them.
            </p>
          </div>
          <button className="card_btn">
            <Link to="/login">Sign In To View</Link>
          </button>
        </div>
      </div>
      <div className="newsletter">
        <h2>Sign Up Today And Join The Cineflex Community!</h2>
        <button className="card_btn">
          <Link to="/signup">Sign Up!</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
