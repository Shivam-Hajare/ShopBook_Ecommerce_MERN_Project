import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import "./SignIn.css"
import { useCookies } from "react-cookie"
import { toast } from 'react-toastify';
const SignIn = () => {
    const navigate = useNavigate();
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';

    const [user, setUser] = useState({ email: "", password: "" });
    const [, setCookie] = useCookies(["access_token"]);

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = async (e) => {
        await e.preventDefault();
        const { email, password } = user;

        const res = await fetch("/signin", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email, password
            }),
            data:{}
        });
        //console.log(res);
        const data = await res.json();
       // console.log(data);
        if (res.status === 422 || !data) {
           // console.log("user not exist");
            toast.error(data.message);
        }
        else {

            setCookie("access_token", data.token);
            window.localStorage.setItem("userID", data.userID);
            toast.success("Successfully Signed In")
            // console.log(" successful loged in");
            navigate(redirect || "/")
        }

        // axios.post('http://localhost:5000/signin', { email, password })
        //     .then(function (response) {
        //         console.log(response);
        //         if (response.status === 422 || !response) {
        //             console.log("user not exist");
        //             toast.error(response.message);
        //         }
        //         else {
        //             setCookie("access_token",response.data.token);
        //             window.localStorage.setItem("userID",response.data.userID);
        //             toast.success("Successfully Signed In")
        //            // console.log(" successful loged in");
        //             navigate(redirect || "/")
        //         }
        //     })
        //     .catch(function (error) {
        //         console.log("err is:"+ error);
        //        toast.error(error);
        //     });
    }
    return (
        <>
            <div className="SignIncontainer">
                <form className="SignIncard" onSubmit={handleSubmit}>
                    <Link className="login">Sign in</Link>
                    <div className="inputBox">
                        <input type="text" required="required" name="email" value={user.email} onChange={handleInputs} />
                        <span className="user">Email</span>
                    </div>

                    <div className="inputBox">
                        <input type="password" required="required" name="password" value={user.password} onChange={handleInputs} />
                        <span>Password</span>
                    </div>

                    <button type='submit' className="enter">Sign In</button>
                    <div className="newCustomer">
                        <span>New customer?</span>
                        <Link className='SignupLink' to="/signUp"> Create your account</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignIn