
const sidebar = ({setSelectedTab, SelectedTab}) => {
  return (
    <>
        <div className=" w-[200px] h-[560px] float-left box-content bg-white m-5  rounded-md flex flex-col justify-start p-5">
            <button className={`text-lg ${SelectedTab === "Home" ? `bg-[#3b61ae] text-white` : `bg-neutral-300 text-black`}  p-2 mb-5 rounded`} onClick={()=> setSelectedTab("Home")}>Home</button>
            <button className={`text-lg ${SelectedTab === "Create Post" ? `bg-[#3b61ae] text-white`: `bg-neutral-300 text-black`} p-2 rounded`} onClick={()=> setSelectedTab("Create Post")}>Create Post</button>
        </div>
    </>
  )
}

export default sidebar