import { Outlet ,Navigate } from "react-router-dom";
import img from "../../assets/side-img.svg"
export function AuthLayout(){
        const isAuthenticated = false;
    
    return(
        <div>
            {isAuthenticated?
            (<Navigate to="/"/>):(
            <>
            <section className="flex min-h-screen w-screen m-0">
                <div className="flex md:w-1/2 justify-center items-center ">
                    <Outlet/>
                </div>
                <div className=" hidden md:flex justify-center  h-screen w-1/2 p-0 m-0">
                   <img src={img} className="h-screen w-full object-cover hidden md:block bg-no-repeat"/>
                </div>

            </section>
            </>    
            )}
        </div>
    )
}

