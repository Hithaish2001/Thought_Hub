import {Outlet} from "react-router-dom";
const home = () => {
  return (
    <>
        <div className="bg-white h-[600px] m-5 rounded-md p-10 overflow-y-scroll">
            <Outlet/>
        </div>
    </>
  )
}

export default home