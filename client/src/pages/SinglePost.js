import React from 'react'
import { useParams } from 'react-router-dom';

import Comment from '../components/Comment'

import { useQuery } from '@apollo/client';
import { SINGLE_REVIEW } from '../utils/queries';

function SinglePost(props) {
    const { id: reviewId } = useParams();

    const { loading, data } = useQuery(SINGLE_REVIEW, {
        variables: { id: reviewId },
    });

    const review = data?.review || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
      <div>
        <p>
          <span style={{ fontWeight: 700 }} >
            {review.username}
          </span>{' '}
          thought on {review.createdAt}
        </p>
        <div className="card-body">
          <p>{review.reviewText}</p>
        </div>
      </div>

      <Comment reviewId={review._id} />
    </div>
    )
}

export default SinglePost;