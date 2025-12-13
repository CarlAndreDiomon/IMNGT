import { useState } from "react"

export default function LoginPage(){
    const[showPassword, setShowPassword]= useState(false);

    return(
        <main className=" w-screen h-screen flex flex-col justify-center items-center bg-[#fcfcbf]">


            <form action="" className="flex flex-col w-1/4 h-1/2 p-12 gap-10 bg-white justify-center items-center rounded-2xl shadow-xl">
                <h1 className=" text-center text-6xl font-bold pb-3">
                    Login 
                </h1>
                <div className=" flex flex-col w-11/12">
                    <label htmlFor="" className="text-2xl font-bold pl-5"> Email </label>
                    <input type="email" name="" id="" className="border rounded-full text-xl p-2 px-5"/>
                </div>
                <div className=" flex flex-col w-11/12">
                    <label htmlFor="" className="text-2xl font-bold pl-5"> Password </label>
                    <input type={showPassword? 'text' : 'password'} name="" id="" className="border rounded-full text-xl p-2 px-5"/>
                    <button className="text-right w-full cursor-pointer text-lg" onClick={(e) => {e.preventDefault(); setShowPassword(!showPassword)}}>See password</button>
                </div>
                
                <button type="submit" className="cursor-pointer border rounded-2xl bg-black text-white hover:bg-white hover:text-black hover:scale-200 transition duration-1000 text-3xl p-2 w-40"><a href="/">Login</a></button>

            </form>
        </main>
    )
}