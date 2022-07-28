import React, { useEffect, useState } from "react";

import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../utils/queries';
import "../css/home.css";
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Home = () => {
  
  const [ donationAmount, setDonation ] = useState(0);

  const [getCheckout, { data: checkoutData, error }] = useLazyQuery(QUERY_CHECKOUT);

  const handleDonationSubmit = async (e) => {
    e.preventDefault();

    const amount = parseInt(donationAmount);

    getCheckout({
      variables: { donation: amount }
    });

    console.log(error);
  } 

  useEffect(() => {
    if(checkoutData) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: checkoutData.checkout.session })
      })
    }
  })

  return (
    <div className="home">
      <div className="home_hero">
        <h1>Welcome to Cineflex!</h1>
        <p style={{ color: "black" }}>
          A film-based social media site for movie lovers around
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
      <div className="newsletter">
        <h2>Donate to our growing team!</h2>
        <form onSubmit = {handleDonationSubmit} className = "donationForm">
          <label
              htmlFor='donation'
          >Enter Amount (USD):
          </label>
          <input
              className="createPost-input"
              type='number'
              name='donation'
              id='donation'
              value={donationAmount}
              onChange={(e) => setDonation(e.target.value)}
          />
            <button type ="submit" className="card_btn small_btn">
              Donate!
            </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
