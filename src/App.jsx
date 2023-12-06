import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Home from "./components/home";
function App() {

  return (
    <div className="bg-neutral-600  h-screen  container mx-auto">
      <Navbar/>
      <Sidebar/>
      <Home/>
    </div>
  )
}

export default App
