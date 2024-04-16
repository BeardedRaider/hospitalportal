<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useNavigate } from "react-router-dom"
>>>>>>> 301f49fe859c1f1a7019ced4bb2a3a0a8d76c088

function Login() {
    const [patient_number, setPatientNumber] = useState('');
    const [password, setPassword] = useState('');
    const [parent, setParent] = useState(false);//state for the box
    const navigate = useNavigate();

    // Defin an async function handleLogin to handle the login
  const handleLogin = async () => {
    try {
      // POST request for the login with parent No ans pw
      const response = await axios.post('http://localhost:5000/api/login', {
        patient_number,
        password,
      });

      //if correct login, log a successful message and the token received from the server
      console.log('Login Successful');
      console.log('Token:', response.data.token);

      //save token to local storage
      localStorage.setItem('token', response.data.token);
      //stave patient num to local storage
      localStorage.setItem('patientNum', response.data.patient_number);
      //save parent state to LS
      if (parent) {
        localStorage.setItem('parent', 'true');
      } else {
        localStorage.removeItem('parent');
      }
      //if user is parent redirenct to parent dash
      if (parent) {
        navigate('/parentDashboard');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      //if login fails log the error on server
      console.error('Login failed:', error.response.data.error);
    }
  };
//load parent state from LS on component mount
useEffect(() => {
  // Reterieve the parent state from the LS
  const storedParent = localStorage.getItem('parent');
  //if state is true set the parent state to true
  if (storedParent) {
    setParent(true);
  }
}, []);


  return (
    <div>
      <div class="bg-gray-100 flex justify-center items-center h-screen">
        {/* <!-- Left: Image --> */}
        <div class="w-1/2 h-screen hidden lg:block">
            <img
                src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat"
                alt=""
                class="object-cover w-full h-full"
            />
        </div>
        {/* <!-- Right: Login Form --> */}
        <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 class="text-2xl font-semibold mb-4">Login</h1>
          <form action="#" method="POST">
            {/* <!-- -------Username Input------ --> */}
            <div class="mb-4">
              <label for="patient_number" class="block text-gray-600">
                Username
              </label>
              <input
                type="text"
                id="patient_number"
                value={patient_number}
                onChange={(e) => setPatientNumber(e.target.value)}
                placeholder="Patient Number"
                class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autocomplete="off"
              />
            </div>
            {/* <!-------- Password Input --------> */}
            <div class="mb-4">
              <label for="password" class="block text-gray-600">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}//set the password state
                class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autocomplete="off"
              />
            </div>
            {/* <!-------- Parent/Guardian Checkbox --------> */}
            <div class="mb-4 flex items-center">
              <input
                type="checkbox"
                id="checkbox_id"
                checked={parent}
                onChange={() => setParent(!parent)}//toggle the parent state
                class="text-blue-500"
              />
              <label for="checkbox_id" class="text-gray-600 ml-2">
                Parent/Guardian please select
              </label>
            </div>
            {/* <!-- Forgot Password Link --> */}
            <div class="mb-6 text-blue-500">
              <button class="hover:underline" type="submit" onClick={handleLogin}>Sign in</button>
            </div>
            {/* <!-- Login Button --> */}
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            >
              Login
            </button>
          </form>
          {/* <!-- Sign up  Link --> */}
          <div class="mt-6 text-blue-500 text-center">
            <button class="hover:underline">Sign up Here</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
