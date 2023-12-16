
import { createContext, useReducer, useState } from "react";

export const Post_Context = createContext({
    postList : [],
    addPost: ()=>{},
    deletePost: ()=>{},
    handleFetchButton: ()=>{},
    loading: false
})

const postReducerFunc=(currPost, action)=>{
    let postArray = currPost
    if (action.type === "DELETE_POST") {
        postArray = currPost.filter((items)=> items.id !== action.payload.postId)
    } 
    else if(action.type === "FETCH_POSTS"){
        postArray = action.payload.posts;
    }
    else if(action.type === "ADD_POST"){
        postArray = [action.payload,...currPost]
    }
    return postArray; 
}

const Post_Context_Provider = ({children})=>{
    const [postList, dispatchPostList] = useReducer(postReducerFunc, [])
    const [loading, setloading] = useState(false)

    const addPost=(post)=>{
        dispatchPostList({
            type: "ADD_POST",
            payload: post,
        })
    }
    const deletePost=(postId)=>{
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId
            }
        })
    }

    const fetchMorePosts = (posts) =>{
        dispatchPostList({
            type: "FETCH_POSTS",
            payload:{
                posts
            }

        })
    }

    
    
    const handleFetchButton = ()=>{
        setloading(true)
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then((postsVal) => {fetchMorePosts(postsVal.posts); setloading(false)});
      }


    return (
        <Post_Context.Provider value={{postList,addPost,deletePost,handleFetchButton,loading}}>
            {children}
        </Post_Context.Provider>
    )
}

export default Post_Context_Provider;
