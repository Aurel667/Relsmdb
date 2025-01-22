import { memo } from "react";
import { TailSpin } from "react-loader-spinner";


export const PageLoader = memo(()=>{
    return (
        <>
            <div className="h-screen w-screen flex justify-center items-center">
                <TailSpin color="#fff" height={80} width={80} />
            </div>
        </>
    )
})