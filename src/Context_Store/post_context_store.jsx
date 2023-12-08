
import { createContext, useReducer } from "react";

export const Post_Context = createContext({
    postList : [],
    addPost: ()=>{},
    deletePost: ()=>{}
})

const postReducerFunc=(currPost, action)=>{
    let postArray = currPost
    if (action.type === "DELETE_POST") {
        postArray = currPost.filter((items)=> items.id !== action.payload.postId)
    } else if(action.type === "ADD_POST"){
        postArray = [action.payload,...currPost]
    }
    return postArray; 
}

const Post_Context_Provider = ({children})=>{
    const [postList, dispatchPostList] = useReducer(postReducerFunc, DEFAULT_DATA)

    const addPost=(UserID,PostTitle,PostContent,Reactions,Tags)=>{
        console.log(`${UserID},${PostTitle},${PostContent},${Reactions},${Tags}`);
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                id: Date.now,
                title: PostTitle,
                body: PostContent,
                reactions: Reactions,
                userId: UserID,
                tags: Tags
            }
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
    
    return (
        <Post_Context.Provider value={{postList,addPost,deletePost}}>
            {children}
        </Post_Context.Provider>
    )
}

export default Post_Context_Provider;

const DEFAULT_DATA = [{
        id: "1",
        title: "Rainy weather",
        body: "Rainy weather.....Enjoy this weather by having a hot coffee with a little snacks aside",
        reactions: 0,
        userId: "mansoonRider",
        tags: ["Rainy","coolWeather","hotCoffee"] },
    {
        id: "2",
        title: "Rainy weather2",
        body: "Rainy weather.....Enjoy this weather by having a hot coffee with a little snacks aside2",
        reactions: 0,
        userId: "mansoonRider",
        tags: ["Rainy","coolWeather","hotCoffee2"]
    }]