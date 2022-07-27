import React, { useEffect, useState } from "react";
import Post from "../components/Post";

import { useQuery } from '@apollo/client';
import { GET_ALLREVIEWS } from '../utils/queries';
import "../css/home.css";
import { Link } from 'react-router-dom';

const Home = () => {

  const { loading, data } = useQuery(GET_ALLREVIEWS)
  const reviews = data?.allReviews || [];
  // const [reviews, setReviews] = useState([])

  // useEffect(() => {
  //   if(data) {
  //     setReviews(data.allReviews)
  //   }
  // }, [data])
  // console.log(reviews);

  return (
    <div className="home">
      <div className="home_hero">
        <h1>Welome to Cineflex!</h1>
        <p style={{ color: "black" }}>
          A film-based social media site for mover lovers around
          the globe.
        </p>
      </div>
      <div className="trending">
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
