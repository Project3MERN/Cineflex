import React from 'react';
import Post from '../components/Post'
// import Comment from './Comment';

function ExplorePage({ posts }) {

    return(
        <div>
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