export default function LandingPage(){
    return(
        <main className="bg-[#fcfcbf] w-screen h-screen  flex justify-center items-center">
            <section className="flex flex-col gap-10 items-center">
                <h1 className="text-7xl font-bold">
                    Inventory Management System
                </h1>
                <button type="submit" className="border w-80 rounded-lg text-4xl p-2 text-center hover:bg-black hover:text-white hover:scale-200 transition duration-1000"><a href="/login">Continue</a></button>
            </section>
        </main>
    )
}