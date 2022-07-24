import React from 'react';
import { useQuery } from '@apollo/client';
import '../css/post.css'
import { GET_ALLREVIEWS } from '../utils/queries';


function PostList() {
    const { loading, data } = useQuery(GET_ALLREVIEWS);
    const reviews = data?.allReviews || [];

    console.log(reviews)
    return (
        <div>
            {reviews.map(review => (
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
                ))}
        </div>

    )
}

export default PostList;