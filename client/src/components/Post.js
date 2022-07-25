import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Comment from './Comment';
import "../css/post.css"
import Comment from './Comment';
import PostEdit from './PostEdit';

function Post({ review: {_id, movie, reviewText, createdAt, score, comments}}) {

    const [editSelected, setEditSelected] = useState(false)

    function handleEditSelected() {
        setEditSelected(true)
    }

    function handleEditClose() {
        setEditSelected(false)
    }

    return(
        <>
            
            <div className={editSelected ? 'modal-selected' : 'PostCard'}>
                <div className='post-edit-delete-btn-wrapper'>
                    <button className='post-delete-btn'>Delete</button>
                    <button
                        className='post-edit-btn'
                        onClick={handleEditSelected}
                    >   
                        Edit
                    </button>                    
                </div>
                <div className = "PostDetails">
                    <h3>
                        {/* <Link to={`/post/${post._id}`}> */}
                        {movie}
                        {/* </Link> */}
                    </h3>
                    <p>
                        {/* <Link to={`user/${post.username}`}> */}
                        test user
                        {/* </Link> */}
                    </p>
                    <p className = "Rating">{score}</p>
                    <p>{reviewText}</p>
                    <div>{createdAt}</div>
                </div>
            </div>
            {editSelected && <PostEdit handleEditClose={handleEditClose}/>}
            

            <Comment comments={comments} />
        </>
    )
}

export default Post;