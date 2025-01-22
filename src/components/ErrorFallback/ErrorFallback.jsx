import { memo } from "react"

export const ErrorFallback =  memo(() =>{
    return (
        <>
            <div className="h-screen w-screen">
                <div className="grid justify-center pt-10 h-full">
                    <div className="text-3xl font-bold text-red-500">
                        Something went wrong
                        <img src="/images/relsmdb.png" alt="logo" width={80} />
                    </div>
                </div>
            </div>
        </>
    )
})