
const navbar = () => {
  return (
    <>
        <div className="h-[70px] bg-[#3b61ae] flex justify-between items-center px-10 rounded-md translate-y-2 mx-2">
            <h1 className="text-xl text-white font-semibold">Thought Hub</h1>
            <ul className="flex space-x-3 text-md font-medium">
                <button className="bg-neutral-300 p-2 rounded">Login</button>
                <button className="bg-neutral-300 p-2 rounded">Sign-up</button>
            </ul>
        </div>
    </>
  )
}

export default navbar