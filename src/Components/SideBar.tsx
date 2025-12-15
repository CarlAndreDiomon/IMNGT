
export default function SideBar(){
    return(
        <main className="flex flex-col h-screen w-2/12 p-4 bg-[#fcfcbf] text-black">
            <header className="flex-1">
                <section className="relative mt-80 grid gap-10 ">
                    <button><a href="/" className="block w-full text-left text-3xl font-semibold hover:shadow-inner hover:shadow-gray-700 p-3 rounded-3xl transition duration-300 ">Dashboard</a></button>
                    <button><a href="/products" className="block w-full text-left text-3xl font-semibold hover:shadow-inner hover:shadow-gray-700 p-3 rounded-3xl transition duration-300">Products</a></button>
                    <button><a href="/items" className="block w-full text-left text-3xl font-semibold hover:shadow-inner hover:shadow-gray-700 p-3 rounded-3xl transition duration-300">Items</a></button>
                    <button><a href="users" className="block w-full text-left text-3xl font-semibold hover:shadow-inner hover:shadow-gray-700 p-3 rounded-3xl transition duration-300">User Management</a></button>
                </section>
            </header>

            

            <footer className="mt-auto">
                <h1 className=" text-center p-3 text-3xl font-bold text-red-600 hover:shadow-md hover:shadow-gray-900 rounded-full transition duration-300 "><a href="/login">Log Out</a></h1>
            </footer>
            
        </main>
    )
}