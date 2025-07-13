import { useEffect, useState } from "react"
import { Button } from "../../../components/ui/button"
export function SigninForm(){
    
    return(
        <div className="h-full w-full p-4 flex flex-col justify-center items-center gap-[20px] bg-gradient-to-t from-blue-900 via-25% to-black"> 
            <form className=" text-white flex flex-col w-[350px] p-2 " onSubmit={(e)=>e.preventDefault()}>
               <label>Email</label>
               <input type="email" className="bg-gray-200 mt-1 rounded-sm h-[30px] text-black" onChange={(e)=>{e.target.value}}/>
               <label className="mt-3">Password</label> 
               <input type="password" className="bg-gray-200 mt-1 rounded-sm h-[30px] text-black " onChange={(e)=>{e.target.value}} />
            </form>
        <Button className="bg-black" onClick={handleSignIn}>Signin</Button> 
        </div>
    )
}