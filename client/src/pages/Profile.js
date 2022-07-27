import React from 'react'
import Auth from '../utils/auth'
import { LOGGED_IN_USER } from '../utils/queries'
import { useQuery } from '@apollo/client'
import RemoveReview from '../components/DeleteReview'


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

export default Profile