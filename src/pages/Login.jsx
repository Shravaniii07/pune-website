import React from "react";

const Login = () => {
  return (
    <div className="pt-24 flex justify-center items-center min-h-screen bg-gray-100 w-200">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-96">

        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Welcome Back
        </h2>

        <form className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 text-black py-3 rounded-lg hover:bg-orange-600 transition"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-4 text-sm">
          Don't have an account?
          <span className="text-orange-500 cursor-pointer ml-1">
            Sign Up
          </span>
        </p>

      </div>
    </div>
  );
};

export default Login;
