import React from 'react';

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
                                {review.movie[0].name}
                            </h3>
                            <p>
                                by {review.username}
                            </p>
                            <p className = "Rating">{review.score}/5</p>
                            <p>{review.reviewText}</p>
                            <span></span>
                        </div>
                    </div>
                ))
            }
        </div>

    )
}

export default PostList;