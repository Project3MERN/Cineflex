import React, { useState } from 'react';

function Comment({review}) {

    console.log(review)

    const [comment, setComment] = useState('')

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     if(comment) {
    //         const newComment = {comment};
    //         console.log(newComment);
    //         setComment('')
    //     } else {
    //         console.error(e)
    //     }
    // }

    return(
        <div className='comment-formWrapper'>   
            <form 
                className='comment-form'
                >
                {/* if user logged in, have user name pulled from user and inserted into label */}
            
                <textarea 
                    className='comment-input'
                    type='text'
                    name='comment'
                    rows='4'
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button className='comment-btn'>Add Comment</button>
            </form>
        </div>
        
    )
}

export default Comment;