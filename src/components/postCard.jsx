
const postCard = ({postProp}) => {
  return (
    <>
        <div className="max-w-4xl mx-auto mb-24 bg-slate-400 p-8 rounded-lg relative">
            <div class="absolute -top-2 -right-2 p-2 bg-red-700 rounded-full w-10 h-10">
              <p className="text-center">{postProp.reactions}</p>
            </div>
            <p className="text-2xl font-bold mb-4">{postProp.title}</p>
            <p className="mb-4">{postProp.body}</p>
            <div className="mb-12">{postProp.tags.map((tag)=><p className="float-left mx-2 px-2 py-1 rounded text-white bg-[#3b61ae]">{tag}</p>)}</div>
        </div>
    </>
  )
}

export default postCard