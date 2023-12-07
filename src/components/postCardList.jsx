import { useContext } from 'react'
import PostCard from './postCard'
import { Post_Context } from '../Context_Store/post_context_store'

const postCardList = () => {
  const {postList} = useContext(Post_Context)
  return (
    <>
        {postList.map((item)=>(<PostCard key={item.id} postProp={item}/>))}
    </>
  )
}

export default postCardList