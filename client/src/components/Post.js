import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Comment from './Comment';
import "../css/post.css"
import Comment from './Comment';
import PostEdit from './PostEdit';

function Post({ reviews }) {

    const [editSelected, setEditSelected] = useState(false)

    function handleEditSelected() {
        setEditSelected(true)
    }

    function handleEditClose() {
        setEditSelected(false)
    }

    return(
        <div>
            <h3>Reviews</h3>
            {reviews && 
                reviews.map(review => (
                    <div key={review._id}>
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
                                {review.movie}
                            </h3>
                            <p>
                                {review.username}
                            </p>
                            <p className = "Rating">{review.score}</p>
                            <p>{review.reviewText}</p>
                            <div>{review.createdAt}</div>
                        </div>
                    </div>
                        {editSelected && <PostEdit handleEditClose={handleEditClose}/>}
                        <Comment comments={review.comments} />
                   </div>
                ))}
            
            

            
        </div>
    )
}

export default Post;