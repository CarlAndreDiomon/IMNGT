export default function UserManagementPage(){
    return(
        <main className="w-4/5">
            <h1 className="text-6xl font-bold">
                User Management Page
            </h1>

            <section className=" p-10">
                <li className="flex w-full justify-between border text-5xl font-semibold px-16 py-5">
                    <h1>Name</h1>
                    <h1>Username</h1>
                    <h1>Role</h1>
                </li>
                <li className="flex w-full justify-between border text-3xl border-t-0 px-16 py-5">
                    <h1>Sample Name</h1>
                    <h1>Sample Username</h1>
                    <h1>Sample Role</h1>
                </li>
            </section>
        </main>
    )
}