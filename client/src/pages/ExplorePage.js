import React from 'react';
import PostList from '../components/PostList'
// import Comment from './Comment';

function ExplorePage({ posts, setPosts }) {

    return(
        <div>
            <h2>Feed</h2>
            <div>
                <PostList />
            </div>
        </div>
    )
}

export default ExplorePage;