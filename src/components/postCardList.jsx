import { useContext } from 'react'
import PostCard from './postCard'
import { Post_Context } from '../Context_Store/post_context_store'

const postCardList = () => {
  const {postList} = useContext(Post_Context)
  return (
    <>
        <div className="space-y-20">
          {postList.map((item)=>(<PostCard key={item.id} postProp={item}/>))}
        </div>
    </>
  )
}

export default postCardList