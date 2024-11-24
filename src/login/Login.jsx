import React from 'react'
import "./Login.css"
import {Link} from "react-router-dom"
import Samsungimage from "../assets/New-PCD_Galaxy-Z_Curation-KV_1440x640_pc.avif"
const Login = () => {
    return (
        <div className=" maindivlogin w-100" >
            <h1 className="text-center w-100  mx-auto p-2 mb-5 h1tag">Samsung App Login</h1>
            <div className='logindiv container  w-25 p-2 border shadow-lg rounded'>
                <form>
                    <input type="text" className="inputer form-control w-75 mx-auto mt-4 mt-5 mb-5" placeholder="Enter User_ID" />
                    <input type="password" className="inputer form-control mb-5 w-75 mx-auto" placeholder='Enter Password' />
                    <button type="submit" className="btn btn-primary rounded shadow-lg mx-auto w-100 mb-5">Login</button>
                    <div className="d-flex justify-content-evenly align-items-center mb-4"><Link to="/Forgot password"><a href="#">Forgot Password?</a></Link><Link to="/Registration Page"><a href="#">New User</a></Link></div>
                </form></div>
            <img src={Samsungimage} className="samsungimage" />
        </div>
    )
}

export default Login