import { useState } from "react"
import { Link } from "react-router-dom"

const sidebar = () => {
  const [SelectedTab, setSelectedTab] = useState("Home")
  return (
    <>
        <div className=" w-[200px] h-[560px] float-left box-content flex flex-col items-center bg-white m-5 rounded-md p-5 space-y-6">
          <li className="list-none mt-4 " onClick={()=> setSelectedTab("Home")}><Link to="/" className={`text-lg text-center px-[60px] ${SelectedTab === "Home" ? `bg-[#3b61ae] text-white` : `bg-neutral-300 text-black`}  p-2 mb-5 rounded`} >Home</Link></li>
          <li className="list-none " onClick={()=> setSelectedTab("Create Post")}><Link to="/create-post" className={`text-lg text-center px-10 ${SelectedTab === "Create Post" ? `bg-[#3b61ae] text-white`: `bg-neutral-300 text-black`} p-2 rounded`} >Create Post</Link></li>
        </div>
    </>
  )
}

export default sidebar