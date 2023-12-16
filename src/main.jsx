import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CreatePost from './components/createPost.jsx'
import PostCardList from './components/postCardList.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([{path: "/", element: <App/>, 
                                  children: [
                                          {path: "/", element: <PostCardList />},
                                          {path: "/create-post", element: <CreatePost/>}
                                        ]}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
