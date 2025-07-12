import { useEffect, useState } from "react"
import { Button } from "../../../components/ui/button"
export function SigninForm(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")
    function maillimit(e){
     setEmail(e.target.value)
    }
    function handlePassword(e) {
        setPassword(e.target.value); // Just update state, no validation
    }
    console.log(password)
    function handleSignIn() {
        // ✅ Validation ONLY on button click
        if (password.length < 8) {
            alert("At least 8 characters");
        }
        else if (!/[0-9]/.test(password)) {
            alert("At least one number");
        }
        else if (!/[A-Z]/.test(password)) {
            alert("At least one uppercase");
        }
        else {
            alert("Sign-in successful!");
        }
    }
       
    
    return(
        <div className="h-full w-full p-4 flex flex-col justify-center items-center gap-[20px] bg-gradient-to-t from-blue-900 via-25% to-black"> 
            <form className=" text-white flex flex-col w-[350px] p-2 " onSubmit={(e)=>e.preventDefault()}>
               <label>Email</label>
               <input type="email" className="bg-gray-200 mt-1 rounded-sm h-[30px] text-black" onChange={maillimit}/>
               <label className="mt-3">Password</label>
               <input type="password" className="bg-gray-200 mt-1 rounded-sm h-[30px] text-black " onChange={handlePassword} />
            </form>
        <Button className="bg-black" onClick={handleSignIn}>Signin</Button> 
        </div>
    )
}