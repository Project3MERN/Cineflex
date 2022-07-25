import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import Post from "../components/Post";

import { useQuery, gql } from '@apollo/client';
import { GET_ALLREVIEWS } from '../utils/queries';
import "../css/home.css";
import { Link } from 'react-router-dom';

const Home = () => {

  const { loading, data} = useQuery(GET_ALLREVIEWS)
  
  useEffect(() => {
    if(data) {
      console.log(data);
    }
  }, [data])

  return (
    <div className="home">
      <div className="home_hero">
        <h1>Welome to Cineflex!</h1>
        <p style={{ color: "black" }}>
          The Worlds first movie based social media site for mover lovers around
          the globe.
        </p>
        <button className="join_btn">Join Today</button>
      </div>
      <div className="trending">
        <h2>Trending Movies</h2>

        {/* {loading ? (
          <h1>Loading Posts...</h1>
        ): (
          reviews && reviews.map(review => (
            <div key={review._id}>
              <Post review={review} />
            </div>
          ))
        )} */}
        
        <button className="card_btn">
          <Link to="/login">Sign In To View</Link>
        </button>
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
