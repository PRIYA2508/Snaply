import { useEffect, useState } from "react"
import { Button } from "../../../components/ui/button"
export function SigninForm(){
    return(
        <div className="h-full w-full p-4 flex flex-col justify-center items-center gap-[20px] bg-gradient-to-t from-blue-900 via-25% to-black"> 
            <form className="border border-amber-200 text-white flex flex-col w-[350px] p-2">
               <label>Email</label>
               <input type="email" className="bg-white mt-1 rounded-sm"/>
               <label className="mt-3">Passowrd</label>
               <input type="password" className="bg-white mt-1 rounded-sm"/>
            </form>
        <Button className="bg-black">Signin</Button> 
        </div>
    )
}