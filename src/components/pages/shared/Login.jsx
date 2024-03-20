import React from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useNavigate } from "react-router-dom"

function Login() {
    const [patient_number, setPatientNumber] = useState('');
    const [password, setPassword] = useState('');
    const [parent, setParent] = useState(false);//state for the box
    const navigate = useNavigate();

    // Defin an async function handleLogin to handle the login
  const handleLogin = async () => {
    try {
      //

    }
  }

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
            {/* <!-- Username Input --> */}
            <div class="mb-4">
              <label for="username" class="block text-gray-600">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autocomplete="off"
              />
            </div>
            {/* <!-- Password Input --> */}
            <div class="mb-4">
              <label for="password" class="block text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autocomplete="off"
              />
            </div>
            {/* <!-- Remember Me Checkbox --> */}
            <div class="mb-4 flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                class="text-blue-500"
              />
              <label for="remember" class="text-gray-600 ml-2">
                Remember Me
              </label>
            </div>
            {/* <!-- Forgot Password Link --> */}
            <div class="mb-6 text-blue-500">
              <button class="hover:underline">Forgot Password?</button>
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
