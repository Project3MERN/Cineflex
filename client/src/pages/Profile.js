import React from 'react'
import Auth from '../utils/auth'
import { LOGGED_IN_USER } from '../utils/queries'
import { REMOVE_REVIEW } from '../utils/mutations'
import { useQuery, useMutation } from '@apollo/client'


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



    return (
        <div className='movies'>
            <h1>{`Viewing ${userInfo.username}'s Profile`}</h1>
            <h2>Reviews that you have left!</h2>
            {userInfo.reviews.map(review => {
                console.log(review)
                return (
                    <div className='movie_list' key={review._id}>
                        <p>Review: {review.reviewText}</p>
                        <p className='rating'>Score: {review.score}/5</p>
                        <p>Movie: {review.movie[0].name}</p>
                    </div>
                )
            })}

        </div>
    )
}

export default Profile