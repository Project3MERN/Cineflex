import React from 'react';
import { Link } from 'react-router-dom';

import '../css/post.css'



function PostList({ reviews }) {

    console.log(reviews)
    return (
        <div>
            {
                reviews.map(review => (
                    <div key={review._id} className="PostCard">
                        <div className = "PostDetails">
                            <h3>
                                <Link
                                    to={`/review/${review._id}`}
                                    className='post-Link'
                                >
                                    {review.movie[0].name}
                                </Link>
                            </h3>
                            <p>
                                by {review.username}
                            </p>
                            <p className = "Rating">{review.score}/5</p>
                            <p>{review.reviewText}</p>
                            <div>
                                
                                    {review.createdAt}
                                
                            </div>
                            <span></span>
                        </div>
                    </div>
                ))
            }
        </div>

    )
}

export default PostList;