export function Footer(){
    return (
        <>
        <footer className="rounded-lg shadow m-4 z-50 bg-slate-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-300 sm:text-center">{new Date().getFullYear()} Made by Aurel KOLANI. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-300 sm:mt-0">
                    <li>
                        <a href="https://github.com/Aurel667" className="hover:underline me-4 md:me-6"> <i className="bi bi-github"></i> Github</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/pag-yendou-christian-aurel-tr%C3%A9sor-kolani-0a93161a7/" className="hover:underline me-4 md:me-6"><i className="bi bi-linkedin text-blue-600"></i> Linkedin</a>
                    </li>
                </ul>
            </div>
        </footer>
    </>
    )
}