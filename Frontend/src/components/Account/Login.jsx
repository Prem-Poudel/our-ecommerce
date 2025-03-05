import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const savedUsername = localStorage.getItem("savedUsername");
    const savedPassword = localStorage.getItem("savedPassword");
    const savedRememberMe = localStorage.getItem("rememberMe") === "true";

    if (savedRememberMe && savedUsername && savedPassword) {
      setUsername(savedUsername);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/accounts/login/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });

      const data = await response.json();
      console.log(data);
      console.log("Response status:", response.status); // Debugging
      if (!response.ok) {
        toast.error(data.message || "Login failed. Please try again.");
        return;
      }

      if (rememberMe) {
        localStorage.setItem("savedUsername", username);
        localStorage.setItem("savedPassword", password);
        localStorage.setItem("rememberMe", "true");
      } else {
        localStorage.removeItem("savedUsername");
        localStorage.removeItem("savedPassword");
        localStorage.removeItem("rememberMe");
      }

      localStorage.setItem("token", data.token.access);
      toast.success("Login successful!");
      window.location.href = "/";
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center mt-20 px-4 sm:px-8">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 bg-white overflow-hidden">
        
        {/* Left Side: Image (Hidden on Small Screens) */}
        <div className="hidden md:block">
          <img 
            src="https://img.freepik.com/free-photo/fun-3d-cartoon-teenage-boy-shopping_183364-81186.jpg?t=st=1738847123~exp=1738850723~hmac=88bd86428be9a726d8655aa7ea756be021fe4dec23a1ba68df728172dfe316da&w=1800" 
            alt="Shopping" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Login Form */}
        <div className="flex flex-col justify-center px-6 sm:px-32 py-8 w-full">
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
            Sign in to your account
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              
              <label className="text-sm font-semibold">Username</label>
              <input
                type="text"
                required
                className="border border-gray-300 p-2.5 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-400"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <label className="text-sm font-semibold">Password</label>
              <input
                type="password"
                required
                className="border border-gray-300 p-2.5 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-400"
                placeholder="**********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={rememberMe} 
                  onChange={() => setRememberMe(!rememberMe)} 
                  className="w-4 h-4 text-gray-500 border-gray-300 rounded"
                />
                Remember me
              </label>

              <NavLink to="/forgot-password" className="text-gray-500 hover:text-gray-800">
                Forgot password?
              </NavLink>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 text-white bg-red-600 hover:bg-red-800 transition duration-200 rounded-lg text-sm font-bold"
            >
              Sign in
            </button>

            <div className="text-center text-sm">
              Don't have an account? <NavLink to="/signup" className="text-red-600 hover:underline">Sign up</NavLink>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Login;
