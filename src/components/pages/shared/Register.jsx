// Register.js
import React, { useState } from 'react';
import axios from 'axios';
import "../../../styles/register.css";

const Register = () => {
  const [patient_number, setPatientNumber] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [guardian, setGuardian] = useState(false);
  const [guardian_name, setGuardianName] = useState('');
  const [dob, setDob] = useState('');
  const [department, setDepartment] = useState('');
  const [notes, setNotes] = useState('');

  //posts the data to the server
  const handleRegister = async (event) => {
  // Prevent the form from refreshing the page (not working)
    event.preventDefault();
  try {
      await axios.post('http://localhost:5000/api/register', {
        patient_number,
        password,
        firstname,
        surname,
        email,
        guardian,
        guardian_name,
        dob,
        department,
        notes
      });
      //clears the form
      setPatientNumber('');
      setPassword('');
      setFirstname('');
      setSurname('');
      setEmail('');
      setGuardian(false);
      setGuardianName('');
      setDob('');
      setDepartment('');
      setNotes('');



      console.log('Registration successful');
    } catch (error) {
      console.error('Registration failed:', error.response.data.error);
    }
  };

  return (
    <div>
      <div class="bg-gray-100 flex justify-center items-center h-screen">
        {/* <!-- Left: Image --> */}
        <div class="w-1/3 h-screen hidden justify lg:block">
            <img
                src="../images/register.jpg"
                alt=""
                class="object-cover w-full h-full"
            />
        </div>
        {/* <!-- Right: Register Form --> */}
        <div class="lg:p-20 md:p-24 sm:10 p-4 w-2/3 lg:w-2/3 overflow-auto h-screen">
          <h1 class="text-2xl font-semibold mb-4">Register</h1>
          
          <form onSubmit={handleRegister}>
          {/* <!-- -------First Name Input------ --> */}
          <div class="mb-4">
            <label for="firstname" class="block text-gray-600">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="First Name"
              class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autocomplete="off"
            />
          </div>
  
          {/* <!-- -------Surname Input------ --> */}
          <div class="mb-4">
            <label for="surname" class="block text-gray-600">
              Surname
            </label>
            <input
              type="text"
              id="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Surname"
              class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autocomplete="off"
            />
          </div>
  
          {/* <!-- -------Email Input------ --> */}
          <div class="mb-4">
            <label for="email" class="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autocomplete="off"
            />
          </div>
  
          {/* <!-- -------Guardian Checkbox------ --> */}
          <div class="mb-4 flex items-center">
            <input
              type="checkbox"
              id="guardian"
              checked={guardian}
              onChange={() => setGuardian(!guardian)}
              class="text-blue-500"
            />
            <label for="guardian" class="text-gray-600 ml-2">
              Guardian
            </label>
          </div>
  
          {/* <!-- -------Guardian Name Input------ --> */}
          <div class="mb-4">
            <label for="guardian_name" class="block text-gray-600">
              Guardian Name
            </label>
            <input
              type="text"
              id="guardian_name"
              value={guardian_name}
              onChange={(e) => setGuardianName(e.target.value)}
              placeholder="Guardian Name"
              class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autocomplete="off"
            />
          </div>
  
          {/* <!-- -------DOB Input------ --> */}
          <div class="mb-4">
            <label for="dob" class="block text-gray-600">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autocomplete="off"
            />
          </div>
  
          {/* <!-- -------Department Input------ --> */}
          <div class="mb-4">
            <label for="department" class="block text-gray-600">
              Department
            </label>
            <input
              type="text"
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              placeholder="Department"
              class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autocomplete="off"
            />
          </div>
  
          {/* <!-- -------Notes Input------ --> */}
          <div class="mb-4">
            <label for="notes" class="block text-gray-600">
              Notes
            </label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Notes"
              class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autocomplete="off"
            />
          </div>
  
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
  
          {/* <!-- -------Password Input------ --> */}
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
          </form>
  
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
