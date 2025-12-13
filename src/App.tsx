import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import ProductPage from "./Pages/ProductPage";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <main className="flex h-screen">
      <nav className="w-full relative">
        <SideBar/>
      </nav>
      

      <section className="space-y-6 relative">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/landing" element={<LandingPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/product" element={<ProductPage/>}/>
        </Routes>
      </section>
    </main>
  )
}

export default App
