import React from 'react';
import Post from '../components/Post'
// import Comment from './Comment';

function ExplorePage({ posts }) {

    return(
        <div>
            <h2>Feed</h2>
            <div>
                {posts.map(post => {
                    return (
                        <Post key={post.id} {...post} />
                    )
                })}
            </div>
        </div>
    )
}

export default ExplorePage;