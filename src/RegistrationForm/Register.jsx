import React from 'react'

const Register = () => {
  return (
    <div>
         
        <form className="form container w-50 shadow-lg p-3 mt-5">
            <input type="text" placeholder="Enter Your First Name" className="form-control w-100 mt-4 mb-4"/>
            <input type="text" placeholder="Enter Your Last Name" className="form-control w-100 mb-4" />
            <input type="email" placeholder="Enter Your Email ...(@gmail.com)" className="form-control w-100 mb-4"/>
            <input type="tel" placeholder="Enter Your Phone Number" className="form-control w-100 mb-4"  />
            <input type="password" placeholder='Enter Your Password' className="form-control w-100 mb-4" ></input>
            <input type="password" placeholder="Re-enter your Password" className="form-control w-100 mb-4 " />
            <button className="btn btn-primary w-100 mt-4 mb-4" type="submit" >Submit</button>
            
        </form>
    </div>
  )
}

export default Register