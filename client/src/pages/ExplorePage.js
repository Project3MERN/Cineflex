import React from 'react';
import Post from '../components/Post'
// import Comment from './Comment';

function ExplorePage({ posts, setPosts }) {

    return(
        <div>
            <h2>Feed</h2>
            <div>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default ExplorePage;