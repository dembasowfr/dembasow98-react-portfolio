import React from 'react'
import Post from './Post'

const Posts = () => {
  return (
    <div className='w-full h-screen items-center justify-center flex flex-col'>
        {
            //Add a funny gif here showing that this page is under development
        }
        <div className='flex justify-center items-center'>
            <img src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif' alt='Under development' />
        </div>
        <Post />
        <Post />
    </div>
  )
}

export default Posts