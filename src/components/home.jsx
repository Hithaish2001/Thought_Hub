import PostList from "./postCardList";
import CreatePost from "./createPost";
const home = ({SelectedTab}) => {
  return (
    <>
        <div className="bg-white h-[600px] m-5 rounded-md p-10 overflow-y-scroll">
            {SelectedTab === "Home" ? <PostList/> : <CreatePost/>}
        </div>
    </>
  )
}

export default home