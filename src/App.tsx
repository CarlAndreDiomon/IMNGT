import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import ProductPage from "./Pages/ProductPage";
import DashBoardPage from "./Pages/DashBoardPage";
import SideBar from "./Components/SideBar";
import { ComputerIcon, Loader } from "lucide-react";
import UserManagementPage from "./Pages/UserManagementPage";
import  {useAuthStore}  from "../src/store/useAuthStore";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";

function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({authUser});

  
  if (isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );



  return (
    <main className="flex flex-col h-screen">
      <header className="p-4 border-b">
         <h1 className="text-3xl font-bold flex items-center gap-3"> <ComputerIcon className="w-10 h-10"/> Inventory System </h1>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <SideBar/>
        <section className="flex-1 overflow-auto p-6">
          <Routes>
            <Route path="/" element={<DashBoardPage/>}/>
            <Route path="/landing" element={<LandingPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/product" element={<ProductPage/>}/>
            <Route path="/users" element={<UserManagementPage/>}/>
          </Routes>
        </section>
        <Toaster />
      </div>
    </main>
  )
}

export default App
