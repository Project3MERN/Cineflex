import React from 'react';
import PostList from '../components/PostList'
// import Comment from './Comment';
import Auth from '../utils/auth';
import CreatePost from '../components/CreatePost';
import { useQuery } from '@apollo/client';
import { GET_ALLREVIEWS } from '../utils/queries';


function ExplorePage({ posts, setPosts }) {
    const { loading, data } = useQuery(GET_ALLREVIEWS);
    const reviews = data?.allReviews || [];

    const loggedIn = Auth.loggedIn();

    return(
        <div>
            {loggedIn && <>
                <h2 className='create-title'>Create</h2>
                <CreatePost />
            </>}
            <h2 className='feed-title'>Feed</h2>
            { loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <PostList reviews = {reviews}/>
                </div>
            )}
        </div>
    )
}

export default ExplorePage;