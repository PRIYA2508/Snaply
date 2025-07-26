import { useState } from "react"
import { Button } from "../../../components/ui/button"
export function SignupForm(){
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errorMsg, setErrorMsg] = useState("")

     function handleSignup(){
     e.preventDefault()
     setErrorMsg("")

    if (password.length < 8) {
      setErrorMsg("Password must be at least 8 characters long.")
      return
    }
   }
    function check(){
     if(!email || !password || !name || !username || !confirmPassword){
        alert("Please fill all the fields")
     }
     else if(password !== confirmPassword){
        alert("Passwords do not match")
     } 
    }
    return(
      <form onSubmit={handleSignup}>
         <div>
           <input type="text" placeholder="Your Name" onChange={(e)=>setName(e.target.value)}/>
           <input type="text" placeholder="Enter Username" onChange={(e)=>setUsername(e.target.value)}/>
           <input type="email" placeholder="Your Email" onChange={(e)=>setEmail(e.target.value)}/>
           <input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
           <input type="password" placeholder="Confirm password" onChange={(e)=>setConfirmPassword(e.target.value)}/>
           <Button onClick={check}>Signup</Button>
        </div>
      </form>
        
    )
   }

