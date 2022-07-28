import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

import Comment from '../components/Comment'
import PostEdit from '../components/PostEdit';
import Auth from '../utils/auth';

import { useQuery } from '@apollo/client';
import { SINGLE_REVIEW } from '../utils/queries';

const  SinglePost = (props) => {

    const { id: reviewId} = useParams();
    console.log(reviewId);

    const { error, loading, data } = useQuery(SINGLE_REVIEW, {
        variables: { id: reviewId }
    })
    console.log(data);

    const review = data?.review || {};
    console.log(review);

    if (loading) {
        return (
          <div>Loading...</div>
        )
    }

    if (error) {
      return (
        `Error! ${error.message}`
      )
    }
    return (
        <div className='singlePost-wrapper'>
          <div className='PostCard'>
            <p className='post-username'>{review.username}</p>
              <div className='post-edit-delete-btn-wrapper'>
                <button className='post-delete-btn'>Delete</button>                   
              </div>
              <div className = "PostDetails">
                <h3>{review.movie[0].name}</h3>
                <p className = "Rating">{review.score}</p>
                <p>{review.reviewText}</p>
                <div>{review.createdAt}</div>
              </div>
          </div>
          {Auth.loggedIn() && <Comment reviewId={review._id}/>}
          {review.comments.map(comment => (
            <div key={comment.id} className='comments-wrapper'>
               <h3>{comment.username}</h3>
               <div>{comment.commentBody}</div>
               <div>{comment.createdAt}</div>
            </div>
          ))}
        </div>
    )
}

export default SinglePost;