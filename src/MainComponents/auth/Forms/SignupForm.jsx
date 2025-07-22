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
    }
    return(
        <div>
           <input type="text" placeholder="Your Name" />
           <input type="text" placeholder="Enter Username" />
           <input type="email" placeholder="Your Email" />
           <input type="password" placeholder="Enter password"/>
            <input type="password" placeholder=""/>
           <Button onClick={check}>Signup</Button>
        </div>
    )
}

