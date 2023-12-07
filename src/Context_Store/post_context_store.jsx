
import { createContext, useReducer } from "react";

export const Post_Context = createContext({
    postList : [],
    addPost: ()=>{},
    deletePost: ()=>{}
})

const postReducerFunc=(currPost, action)=>{
    return currPost; 
}

const Post_Context_Provider = ({children})=>{
    const [postList, dispatchPostList] = useReducer(postReducerFunc, DEFAULT_DATA)

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

const DEFAULT_DATA = [{
        id: "1",
        title: "Rainy weather",
        body: "Rainy weather.....Enjoy this weather by having a hot coffee with a little snacks aside",
        reactions: 0,
        userId: "mansoonRider",
        tags: ["Rainy","coolWeather","hotCoffee"] },
    {
        id: "1",
        title: "Rainy weather",
        body: "Rainy weather.....Enjoy this weather by having a hot coffee with a little snacks aside",
        reactions: 0,
        userId: "mansoonRider",
        tags: ["Rainy","coolWeather","hotCoffee"]
    }]