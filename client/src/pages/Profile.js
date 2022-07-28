import React from 'react'
import Auth from '../utils/auth'
import { LOGGED_IN_USER } from '../utils/queries'
import { useQuery } from '@apollo/client'
import RemoveReview from '../components/DeleteReview'
import { Link } from 'react-router-dom'
import "../css/profile.css";
import reviewImage from '../assets/images/profileReviewImage.png'


function Profile() {

    const loggedIn = Auth.loggedIn();
    const { loading, data } = useQuery(LOGGED_IN_USER)
    if (!loggedIn) {
        return (
            <h1>Please login/create an account to view your profile</h1>
        )
    }
    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    }
    const userInfo = data?.loggedInUser || {}
    console.log(userInfo)

    if (userInfo.reviews.length === 0) {
        return (
            <div className='profile'>
                <h1>{`Viewing ${userInfo.username}'s Profile`}</h1>
                <h2>You have not left any reviews!</h2>
                <h3>Click the button below to leave a review so others in the community can know your valuable opinion!</h3>
                <Link to={'/explore'}>
                    <button className='reviewButton'>Click here to leave a review</button>
                </Link>
                <div>
                    <img src={reviewImage} alt='Movie Camera'></img>
                </div>
            </div>
        )
    }

    if (userInfo.reviews) {
        return (
            <div className='profile'>
                <h1>{`Viewing ${userInfo.username}'s Profile`}</h1>
                <h2>Reviews that you have left!</h2>
                <Link to={'/explore'}>
                    <button className='reviewButton'>Click here to leave another review</button>
                </Link>
                {userInfo.reviews.map(review => {
                    return (
                        <div className='reviewsInProfile' key={review._id}>
                            <RemoveReview review={review}></RemoveReview>
                        </div>
                    )
                })}

            </div >
        )
    }
}

export default Profile