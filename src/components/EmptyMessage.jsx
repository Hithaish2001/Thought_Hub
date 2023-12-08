import React, { useContext } from 'react'
import { Post_Context } from '../Context_Store/post_context_store';

const EmptyMessage = () => {
    const {fetchMorePosts} = useContext(Post_Context)
    const handleFetchButton = ()=>{
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(postsVal => fetchMorePosts(postsVal.posts));
    }
  return (
    <>
        <div className='flex flex-col items-center text-lg my-28'>
            <p>There are no posts here to see</p>
            <p>You can either create a post from create post section or get random posts by clicking below </p>
            <button onClick={handleFetchButton} className='bg-[#3b61ae] text-white mt-8 py-1 px-4 text-md rounded'>Get Posts</button>
        </div>
    </>
  )
}

export default EmptyMessage