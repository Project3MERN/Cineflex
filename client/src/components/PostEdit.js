import React from 'react';

function PostEdit({ handleEditClose }) {
    return (
        <>
            <div className='edit-form-wrapper'>
                <form className='modal-active'>
                    <button className='postEdit-btn' onClick={handleEditClose}>&times;</button>
                    <label
                        className='postEdit-label' 
                        htmlFor='title'>Title</label>
                    <input
                        className='postEdit-input'
                        type='text'
                        name='title'
                        id='title'
                    />
                    <label
                        className='postEdit-label' 
                        htmlFor='review'>Review</label>
                    <textarea
                        className='postEdit-input'
                        type='text'
                        name='review'
                        id='review'
                        rows='4'
                    />
                    <label
                        className='postEdit-label' 
                        htmlFor='rating'>Rating</label>
                    <input
                        className='postEdit-input'
                        type='number'
                        min='1'
                        name='rating'
                        id='rating'
                    />
                </form>
            </div>
        </>
    )
}

export default PostEdit;