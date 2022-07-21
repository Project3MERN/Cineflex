import React from 'react';
import CreatePost from '../components/CreatePost';

const Dashboard= ({ posts, setPosts }) => {
    
    return (
        <div>
            <div>Creat a Post</div>
            <CreatePost posts={posts} setPosts={setPosts} />
        </div>
    )
}

export default Dashboard;