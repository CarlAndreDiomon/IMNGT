
import { ComputerIcon } from "lucide-react";
import { useState } from "react"

export default function LoginPage(){
    const[showPassword, setShowPassword]= useState(false);

    return(
        <main className="relative w-screen h-screen flex flex-col justify-center items-center bg-[#fcfcbf]">

            <h1 className="absolute top-5 left-5 ml-0 text-4xl font-bold flex justify-center items-center gap-5"> <ComputerIcon className="w-20 h-20"/> Inventory System Login </h1>

            <form action="" className="flex flex-col w-1/4 h-1/2 p-12 gap-10 bg-white justify-center items-center rounded-2xl shadow-xl border-2">
                <h1 className=" text-center text-6xl font-bold pb-3">
                    Login 
                </h1>
                <div className=" flex flex-col w-11/12">
                    <input type="email" name="" id="" placeholder="Username" className="border bg-[#fcfcbf] rounded-full text-3xl p-2 px-5"/>
                </div>
                <div className=" flex flex-col w-11/12">
                    <input type={showPassword? 'text' : 'password'} name="" id="" placeholder="Password" className="border bg-[#fcfcbf] rounded-full text-3xl p-2 px-5"/>
                    <button className="text-right w-full cursor-pointer text-lg" onClick={(e) => {e.preventDefault(); setShowPassword(!showPassword)}}>See password</button>
                </div>
                
                <button type="submit" className="cursor-pointer border rounded-2xl bg-black text-white hover:bg-white hover:text-black hover:scale-200 transition duration-1000 text-3xl p-2 w-11/12"><a href="/">Login</a></button>

            </form>
        </main>
    )
}