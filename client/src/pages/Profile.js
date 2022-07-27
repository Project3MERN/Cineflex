import React, { useState } from 'react'
import Auth from '../utils/auth'
import { LOGGED_IN_USER } from '../utils/queries'
import { useQuery } from '@apollo/client'
import RemoveReview from '../components/DeleteReview'
import { Link } from 'react-router-dom'


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
            <div>
                <h1>You have not left any reviews!</h1>
                <Link to={'/explore'}>
                    <p>Leave a Review</p>
                </Link>
            </div>
        )
    }

    if (userInfo.reviews) {
        return (
            <div className='movies'>
                <h1>{`Viewing ${userInfo.username}'s Profile`}</h1>
                <h2>Reviews that you have left!</h2>
                {userInfo.reviews.map(review => {
                    return (
                        <div key={review._id}>
                            <RemoveReview review={review}></RemoveReview>
                        </div>
                    )
                })}
            </div >
        )
    }
}

export default Profile