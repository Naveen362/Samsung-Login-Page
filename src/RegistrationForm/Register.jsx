import samsunggw from '../assets/samsung.jpg'
import React, { useState } from 'react';
import './Register.css'

const Register = () => {
  const [data, setData] = useState({ First_name: '', Last_name: '', email: '', phonenum: '', password: '', repassword: '' });
  const [errors, setErrors] = useState({});

  const add_datafn = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const nameRegex = /^[A-Za-z]+([ -][A-Za-z]+)*$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const phoneRegex = /^\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

  const validation = () => {
    const newErrors = {};
    if (!nameRegex.test(data.First_name)){ newErrors.First_name = 'First name is invalid'};
    if (!nameRegex.test(data.Last_name)) newErrors.Last_name = 'Last name is invalid';
    if (!emailRegex.test(data.email)) newErrors.email = 'Email is invalid';
    if (!phoneRegex.test(data.phonenum)) newErrors.phonenum = 'Phone number is invalid';
    if (!passwordRegex.test(data.password)) newErrors.password = 'Password should contain at least 8 characters, one uppercase letter, one number, and one special character';
    if (data.password !== data.repassword) newErrors.repassword = 'Passwords do not match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;  // If no errors, return true
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (validation()) {
     
      console.log(data);
      setData({ First_name: '', Last_name: '', email: '', phonenum: '', password: '', repassword: '' });
      setErrors({}); // Clear errors after successful submission
      alert("Registration Successful!");  // Example success message
    }
  };

  return (
    <div className="maindiv container min-vh-100 d-flex justify-content-center align-items-center">
      <div className="images"><img src={samsunggw} width="100%" height="100%"/></div>
      <div className="row w-100">
        <div className="col-12 col-sm-12 col-md-9 col-lg-9 mx-auto">
          <form className="shadow-lg p-4 mt-5" onSubmit={submitForm}>
            <h2 className="text-center mb-4">Registration Form</h2>
            <input
              type="text"
              placeholder="Enter Your First Name"
              className="form-control w-100 mt-4 mb-4"
              required
              name="First_name"
              value={data.First_name}
              onChange={add_datafn}
              maxLength={20}
            />
            {errors.First_name && <p className="text-danger">{errors.First_name}</p>}

            <input
              type="text"
              placeholder="Enter Your Last Name"
              className="form-control w-100 mb-4"
              required
              name="Last_name"
              value={data.Last_name}
              onChange={add_datafn}
            />
            {errors.Last_name && <p className="text-danger">{errors.Last_name}</p>}

            <input
              type="email"
              required
              placeholder="Enter Your Email...(@gmail.com)"
              className="form-control w-100 mb-4"
              name="email"
              value={data.email}
              onChange={add_datafn}
            />
            {errors.email && <p className="text-danger">{errors.email}</p>}

            <input
              type="tel"
              placeholder="Enter Your Phone Number"
              className="form-control w-100 mb-4"
              name="phonenum"
              required
              value={data.phonenum}
              onChange={add_datafn}
            />
            {errors.phonenum && <p className="text-danger">{errors.phonenum}</p>}

            <input
              type="password"
              placeholder="Enter Your Password"
              required
              className="form-control w-100 mb-4"
              name="password"
              value={data.password}
              onChange={add_datafn}
            />
            {errors.password && <p className="text-danger">{errors.password}</p>}

            <input
              type="password"
              placeholder="Re-enter Your Password"
              className="form-control w-100 mb-4"
              required
              name="repassword"
              value={data.repassword}
              onChange={add_datafn}
            />
            {errors.repassword && <p className="text-danger">{errors.repassword}</p>}

            <button className="btn btn-warning w-100 mt-4 mb-4" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
