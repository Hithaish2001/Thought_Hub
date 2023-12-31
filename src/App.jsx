import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Home from "./components/home";
import { useState } from "react";
import Post_Context_Provider from "./Context_Store/post_context_store";
function App() {
  return (
    <Post_Context_Provider>
      <div className="bg-neutral-400  h-screen  container mx-auto">
        <Navbar/>
        <Sidebar />
        <Home />
      </div>
    </Post_Context_Provider>
  )
}

export default App
