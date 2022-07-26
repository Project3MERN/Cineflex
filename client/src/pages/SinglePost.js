import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

import Comment from '../components/Comment'
import PostEdit from '../components/PostEdit';

import { useQuery } from '@apollo/client';
import { SINGLE_REVIEW } from '../utils/queries';

function SinglePost(props) {

  // const [editSelected, setEditSelected] = useState(false)

  // function handleEditSelected() {
  //     setEditSelected(true)
  // }

  // function handleEditClose() {
  //     setEditSelected(false)
  // }

    const { id: reviewId } = useParams();

    const { loading, data } = useQuery(SINGLE_REVIEW, {
        variables: { id: reviewId },
    });

    const review = data?.review || {};
    console.log(review);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
              <div className=/*{editSelected ? 'modal-selected' : */'PostCard'>
                <p className='post-username'>{review.username}</p>
                <div className='post-edit-delete-btn-wrapper'>
                  <button className='post-delete-btn'>Delete</button>
                  <button
                    className='post-edit-btn'
                    // onClick={handleEditSelected}
                  >   
                    Edit
                  </button>                    
                </div>
                <div className = "PostDetails">
                  <p className = "Rating">{review.score}</p>
                  <p>{review.reviewText}</p>
                  <div>{review.createdAt}</div>
                </div>
              </div>
              {/* {editSelected && <PostEdit handleEditClose={handleEditClose}/>} */}
              <Comment comments={review.comments} />
      </div>
    )
}

export default SinglePost;