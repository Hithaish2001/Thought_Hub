import { useContext, useState } from 'react'
import PostCard from './postCard'
import { Post_Context } from '../Context_Store/post_context_store'
import EmptyMessage from './EmptyMessage'
import LoadingSpinner from './loadingSpinner'

const postCardList = () => {
  const {postList} = useContext(Post_Context)
  const [loading, setloading] = useState(false)
  const {fetchMorePosts} = useContext(Post_Context)

    const handleFetchButton = ()=>{
      setloading(true)
      fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then((postsVal) => {fetchMorePosts(postsVal.posts); setloading(false)});
    }

  return (
    <>
        {!loading && postList.length===0 && <EmptyMessage handleFetchButton={handleFetchButton}/>}
        {loading && <LoadingSpinner/>}
        <div className="space-y-20">
          {!loading && postList.map((item)=>(<PostCard key={item.id} postProp={item}/>))}
        </div>
    </>
  )
}

export default postCardList