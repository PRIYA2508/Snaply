import { Outlet ,Navigate } from "react-router-dom";
import img from "../../assets/side-img.svg"
export function AuthLayout(){
        const isAuthenticated = false;
    
    return(
        <div>
            {isAuthenticated?
            (<Navigate to="/"/>):(
            <>
            <section className="flex flex-col min-h-screen p-3 border w-screen">
                <div className="flex w-1/2 justify-center items-center border h-screen border-amber-400">
                    <Outlet/>
                </div>
                <div className="flex w-1/2 border border-blue-600 h-screen">

                </div>

            </section>
            </>    
            )}
        </div>
    )
}

