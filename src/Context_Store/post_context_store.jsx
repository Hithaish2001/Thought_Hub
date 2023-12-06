
import { createContext, useReducer } from "react";

const Post_Context = createContext({
    postList : [],
    addPost: ()=>{},
    deletePost: ()=>{}
})

const postReducerFunc=(currPost, action)=>{
    return currPost; 
}

const Post_Context_Provider = ({children})=>{
    const [postList, dispatchPostList] = useReducer(postReducerFunc, [])

    const addPost=()=>{
        
    }
    const deletePost=()=>{

    }
    
    return (
        <Post_Context.Provider value={{postList,addPost,deletePost}}>
            {children}
        </Post_Context.Provider>
    )
}

export default Post_Context_Provider;