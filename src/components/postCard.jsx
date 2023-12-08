import { useContext } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { Post_Context } from "../Context_Store/post_context_store";
const postCard = ({postProp}) => {
  const {deletePost} = useContext(Post_Context)
  return (
    <>
        <div className="max-w-4xl mx-auto border-2 p-8 rounded-lg relative">
            <div className="absolute -top-2 -right-2 p-2 bg-red-500 rounded-full w-10 h-10" onClick={()=>deletePost(postProp.id)}>
              <p className="text-center text-2xl"><MdOutlineDeleteForever /></p>
            </div>
            <p className="text-2xl font-bold mb-4">{postProp.title}</p>
            <p className="mb-4">{postProp.body}</p>
            <div className="mb-16">{postProp.tags.map((tag)=><p key={tag} className="float-left mx-2 px-2 py-1 rounded text-white bg-[#3b61ae]">{tag}</p>)}</div>
            <div className="bg-blue-100 rounded py-2 px-4">This thought has been reacted by {postProp.reactions} people.</div>
        </div>
    </>
  )
}

export default postCard