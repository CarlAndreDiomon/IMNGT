import SearchBar from "../Components/UI/SearchBar";

export default function DashBoardPage(){
    return(
        <main className="w-full flex flex-col justify-center pt-4">
            <SearchBar/>

            <section className="p-4 space-y-6">
                <h1 className="text-6xl font-bold">
                    Dashboard
                </h1>

                <div className=" flex gap-10 ">
                    <h1 className="bg-[#fcfcbf] border-4 rounded-4xl p-5 text-4xl font-bold">
                        Total Sales
                        <h3  className="text-center font-semibold p-2">
                            ₱120,000
                        </h3>
                    </h1>
                    <h1 className="bg-[#fcfcbf] border-4 rounded-4xl p-5 text-4xl font-bold">
                        Total Products
                        <h3  className="text-center font-semibold p-2">
                            320
                        </h3>
                    </h1>
                    <h1 className="bg-[#fcfcbf] border-4 rounded-4xl p-5 text-4xl font-bold">
                        Low Stock
                        <h3  className="text-center font-semibold p-2">
                            5
                        </h3>
                    </h1>
                </div>
                
            </section>
        </main>
    )
}