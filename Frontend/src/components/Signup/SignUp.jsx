import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "Signup failed. Please try again.");
        return;
      }

      toast.success("Account created successfully!");
      window.location.href = "/login";
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center mt-20 px-4 sm:px-8 pb-36">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 bg-white overflow-hidden">
        <div className="hidden md:block">
          <img 
            src="https://img.freepik.com/free-photo/funny-3d-illustration-cartoon-teenage-girl_183364-80399.jpg" 
            alt="Sign Up" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-6 sm:px-32 py-8 w-full">
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
            Create Your Account
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <label className="text-sm font-semibold">Full Name</label>
              <input
                type="text"
                required
                className="border border-gray-300 p-2.5 rounded-xl w-full shadow-md"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              
              <label className="text-sm font-semibold">Email</label>
              <input
                type="email"
                required
                className="border border-gray-300 p-2.5 rounded-xl w-full shadow-md"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              
              <label className="text-sm font-semibold">Phone Number</label>
              <input
                type="tel"
                required
                className="border border-gray-300 p-2.5 rounded-xl w-full shadow-md"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              
              <label className="text-sm font-semibold">Password</label>
              <input
                type="password"
                required
                className="border border-gray-300 p-2.5 rounded-xl w-full shadow-md"
                placeholder="**********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              
              <label className="text-sm font-semibold">Confirm Password</label>
              <input
                type="password"
                required
                className="border border-gray-300 p-2.5 rounded-xl w-full shadow-md"
                placeholder="**********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            
            <button
              type="submit"
              className="w-full py-2.5 text-white bg-red-600 hover:bg-red-800 transition duration-200 rounded-lg text-sm font-bold"
            >
              Sign Up
            </button>

            <div className="text-center text-sm">
              Already have an account? <NavLink to="/login" className="text-red-600 hover:underline">Login</NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
