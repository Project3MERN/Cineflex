import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Comment from './Comment';
import "../css/post.css"
import Comment from './Comment';
import PostEdit from './PostEdit';

function Post({ review }) {

    const [editSelected, setEditSelected] = useState(false)

    function handleEditSelected() {
        setEditSelected(true)
    }

    function handleEditClose() {
        setEditSelected(false)
    }

    return(
        <div>
            <div key={review._id}>
                <div className={editSelected ? 'modal-selected' : 'PostCard'}>
                    <p className='post-username'>{review.username}</p>
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
                        <h3>{review.movie[0].name}</h3>
                        <p className = "Rating">{review.score}</p>
                        <p>{review.reviewText}</p>
                        <div>
                            <Link
                                to={`/review/${review._id}`}
                                className='post-Link'
                            >
                                {review.createdAt}
                            </Link>
                        </div>
                    </div>
                    </div>
                    {editSelected && <PostEdit handleEditClose={handleEditClose}/>}
                    
            </div>
        </div>
    )
}

export default Post;