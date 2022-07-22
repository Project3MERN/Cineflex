import React from 'react';

function PostEdit({ handleEditClose }) {
    return (
        <>
            <button onClick={handleEditClose}>&times;</button>
            <form className='modal-active'>
                <label htmlFor='title'>Title</label>
                <input
                    type='text'
                    name='title'
                    id='title'
                />
                <label htmlFor='review'>Review</label>
                <input
                    type='text'
                    name='review'
                    id='review'
                />
                <label htmlFor='rating'>Rating</label>
                <input
                    type='number'
                    min='1'
                    name='rating'
                    id='rating'
                />
            </form>
        </>
    )
}

export default PostEdit;