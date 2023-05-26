import React from 'react'
import Post from './Post'

const Posts = () => {
  return (
    <div className='w-full items-center flex flex-col'>
        <Post />
        <div className='flex justify-center items-center'>
          <img src='https://media.giphy.com/media/3XmYIITQxzMtqcnaa7/giphy.gif' alt='Under development' />
        </div>
    </div>
  )
}

export default Posts