import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../utils/mutations'

const Comment = ({ reviewId }) => {

    const [commentBody, setCommentBody] = useState('');
    const [addComment, {error}] = useMutation(ADD_COMMENT);

    // update state based on form input
    const handleChange = (event) => {
        setCommentBody(event.target.value);
    };
    
    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await addComment({
                variables: { commentBody, reviewId }
            });

            setCommentBody('');
        } catch (e) {
            console.error(e);
        }
    }

    return(
        <div className='comment-formWrapper'>   
            <form 
                className='comment-form'
                onSubmit={handleFormSubmit}
            >
                <textarea 
                    className='comment-input'
                    placeholder='leave a comment!'
                    type='text'
                    name='comment'
                    rows='4'
                    value={commentBody}
                    onChange={handleChange}
                />
                <button
                    className='comment-btn'
                    type='submit'
                >
                    Add Comment
                </button>
            </form>
        </div>
    )
}

export default Comment;