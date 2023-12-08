import { useContext } from 'react'
import PostCard from './postCard'
import { Post_Context } from '../Context_Store/post_context_store'
import EmptyMessage from './EmptyMessage'

const postCardList = () => {
  const {postList} = useContext(Post_Context)
  return (
    <>
        {postList.length === 0 && <EmptyMessage/>}
        <div className="space-y-20">
          {postList.map((item)=>(<PostCard key={item.id} postProp={item}/>))}
        </div>
    </>
  )
}

export default postCardList