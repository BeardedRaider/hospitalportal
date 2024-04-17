// Register.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [patient_number, setPatientNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:5000/api/register', {
        patient_number,
        password,
      });
      console.log('Registration successful');
    } catch (error) {
      console.error('Registration failed:', error.response.data.error);
    }
  };

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
        {/* <!-- Right: Register Form --> */}
        <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 class="text-2xl font-semibold mb-4">Register</h1>
          
            {/* <!-- -------Patient Number Input------ --> */}
            <div class="mb-4">
              <label for="patient_number" class="block text-gray-600">
                Patient Number
              </label>
              <input
                type="tel"
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
                onChange={(e) => setPassword(e.target.value)}
                class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autocomplete="off"
              />
            </div>
            
            {/* <!-- Register Button --> */}
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full" onClick={handleRegister}
            >
              Register
            </button>
         
          {/* <!-- Login Link --> */}
          <div class="mt-6 text-blue-500 text-center">
            <button class="hover:underline">Already have an account? Login Here</button>
          </div>
        </div>
      </div>
    </div>
  );
  };
  export default Register;
