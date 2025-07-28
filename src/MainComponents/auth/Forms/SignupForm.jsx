import { useState } from "react"
import { Button } from "../../../components/ui/button"
export function SignupForm(){
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    
    
    function check(){
     if(!email || !password || !name || !username || !confirmPassword){
        alert("Please fill all the fields")
     }
     else if(password !== confirmPassword){
        alert("Passwords do not match")
     } 
    
    }
    return(  
  <div className="bg-black h-screen flex justify-center items-center text-white w-screen ">
   <form className="relative flex flex-col justify-center items-center  p-8 w-full max-w-md">
    {/* Name Field */}
    <div className="w-full mb-4 relative">
      <label className="absolute left-0 top-0 text-xs">Name</label>
      <input 
        type="text" 
        placeholder="Your Name" 
        onChange={(e) => setName(e.target.value)} 
        className="border border-white rounded-md p-2 w-full mt-4" 
      />
    </div>

    {/* Username Field */}
    <div className="w-full mb-4 relative">
      <label className="absolute left-0 top-0 text-xs">Username</label>
      <input 
        type="text" 
        placeholder="Enter Username" 
        onChange={(e) => setUsername(e.target.value)} 
        className="border border-white rounded-md p-2 w-full mt-4" 
      />
    </div>

    {/* Email Field */}
    <div className="w-full mb-4 relative">
      <label className="absolute left-0 top-0 text-xs">Email</label>
      <input 
        type="email" 
        placeholder="Your Email" 
        onChange={(e) => setEmail(e.target.value)} 
        className="border border-white rounded-md p-2 w-full mt-4" 
      />
    </div>

    {/* Password Field */}
    <div className="w-full mb-4 relative">
      <label className="absolute left-0 top-0 text-xs">Password</label>
      <input 
        type="password" 
        placeholder="Enter password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        className="border border-white rounded-md p-2 w-full mt-4" 
      />
    </div>

    {/* Confirm Password Field */}
    <div className="w-full mb-6 relative">
      <label className="absolute left-0 top-0 text-xs">Confirm Password</label>
      <input 
        type="password" 
        placeholder="Confirm password" 
        onChange={(e) => setConfirmPassword(e.target.value)} 
        className="border border-white rounded-md p-2 w-full mt-4" 
      />
    </div>

    <Button onClick={check}>Signup</Button>
  </form>
</div>
    )
   }

