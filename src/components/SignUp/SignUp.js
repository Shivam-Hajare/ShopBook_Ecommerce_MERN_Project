import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./SignUp.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";




const SignUp = () => {
  const navigate = useNavigate();
  const [user,setUser]=useState({email:"",userName:"",password:"",confirmPassword:""});

  let name,value;

  const handleInputs =(e)=>{
   name=e.target.name;
   value=e.target.value;
   setUser({...user,[name]:value});
  }
  
  const handleSubmit=async(e)=>{

    try {

      await e.preventDefault();
      const {email,userName,password,confirmPassword}=user;
  
      const response=await axios.post('/signup', {email,userName,password,cpassword:confirmPassword})
      console.log("+++++++++++",response.status);
      console.log("res aloo");
        if(response.status=== 422 || !response)
        {
          console.log("res 422");
          window.alert("user already exist")
          console.log("user already exist");
        }
        else{
          console.log("done");
          window.alert(" successful stored db")
          console.log(" successful stored db");
          navigate("/")
        }
    }catch(error) {
      console.log("hello");
      if (error.response) {
        console.log(error.response);
      }
    }
    
    
  }
  return (
    <>
      <div className="SigUpcontainer">
        <form className="SignUpcard" onSubmit={handleSubmit}>
          <Link className="singup">Sign Up</Link>
          <div className="SignUp_inputBox1">
            <input type="text" required="required" name="email"  value={user.email} onChange={handleInputs} />
            <span className="user">Email</span>
          </div>

          <div className="SignUp_inputBox">
            <input type="text" required="required" name="userName" value={user.userName} onChange={handleInputs}/>
            <span>Username</span>
          </div>

          <div className="inputBox">
            <input type="password" required="required"name="password" value={user.password} onChange={handleInputs} />
            <span>Password</span>
          </div>

          <div className="inputBox">
            <input type="password" required="required" name="confirmPassword" value={user.confirmPassword} onChange={handleInputs} />
            <span>Confirm Password</span>
          </div>
          <button type='submit' className="SigUp_enter" >Sign Up</button>
          <div className="signUpLinks ">
            <span>Already have an account?</span>
            <Link to="/signIn"> Sign-In</Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default SignUp