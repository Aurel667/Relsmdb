import { NavLink } from "react-router-dom"

export function Header({children}){
    return (
        <>
            <header>
                <nav className="border-gray-200 bg-gray-900 shadow">
                    <div className="w-screen flex items-center justify-around mx-auto py-1 px-4">
                        <NavLink to="/" >
                            <span className="flex items-center space-x-3 rtl:space-x-reverse">
                                <img src="/images/relsmdb.png" className="h-12" alt="Relsmdb Logo" />
                                <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Relsmdb</span>
                            </span>
                        </NavLink>
                        {children}
                    </div>
                </nav>
            </header>
        </>
    )
}