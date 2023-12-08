
const createPost = () => {
  return (
    <>
      <div className=" border-gray-900/10 ml-10">
         <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <div className="sm:col-span-4">
              <label  className="block text-sm font-medium leading-6 text-gray-900">User ID</label>
              <div className="mt-2">
                <input type="text" placeholder="Enter your User-ID here" id="userId" className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1  sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label className="block text-sm font-medium leading-6 text-gray-900">Post title</label>
              <div className="mt-2">
                <input id="title" placeholder="How are you feeling today...." type="text"  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 sm:text-sm sm:leading-6"/>
              </div>
            </div>


            <div className="col-span-4">
              <label className="block text-sm font-medium leading-6 text-gray-900">Post content</label>
              <div className="mt-2">
                <textarea type="text" rows="4" placeholder="Tell us more about it..." id="content" className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label className="block text-sm font-medium leading-6 text-gray-900">Number of rections</label>
              <div className="mt-2">
                <input type="text" placeholder="Enter the number of rections in here...." id="reactions" className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-1 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium leading-6 text-gray-900">Enter your tags here</label>
              <div className="mt-2">
                <input type="text" placeholder="#windy #cool #rainy" id="tags" className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-1 sm:text-sm sm:leading-6"/>
              </div>
            </div>
        
         </div>
        </div>
    </>
  )
}

export default createPost