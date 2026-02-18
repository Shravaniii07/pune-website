// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="bg-black text-white flex justify-between items-center p-6">
//       <h1 className="text-xl font-bold">Pune Website</h1>

//       <div className="space-x-4">
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//         <Link to="/service">Services</Link>
//         <Link to="/places">Places</Link>
//         <Link to="/login">Login</Link>
//         <Link to="/signup">Signup</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className=" bg-blue-100 text-white 
//                     flex justify-between items-center px-10 py-4 
//                     shadow-lg sticky top-0 z-50 w-300 ">

//       {/* Logo */}
//       <h1 className="text-2xl font-bold text-orange-400 tracking-wide">
//         Pune Tourism
//       </h1>

//       {/* Links */}
//       <div className="flex items-center space-x-8 text-lg font-medium justify-evenly">

//         <Link 
//           to="/" 
//           className="hover:text-orange-400 transition duration-300"
//         >
//           Home
//         </Link>

//         <Link 
//           to="/about" 
//           className="hover:text-orange-400 transition duration-300"
//         >
//           About
//         </Link>

//         <Link 
//           to="/contact" 
//           className="hover:text-orange-400 transition duration-300"
//         >
//           Contact
//         </Link>

//         <Link 
//           to="/service" 
//           className="hover:text-orange-400 transition duration-300"
//         >
//           Services
//         </Link>

//         <Link 
//           to="/places" 
//           className="hover:text-orange-400 transition duration-300"
//         >
//           Places
//         </Link>

//         {/* Login Button */}
//         <Link 
//           to="/login"
//           className="border border-orange-400 px-4 py-1 rounded-lg 
//                      hover:bg-orange-400 hover:text-black 
//                      transition duration-300"
//         >
//           Login
//         </Link>

//         {/* Signup Button */}
//         <Link 
//           to="/signup"
//           className="bg-orange-400 text-black px-4 py-1 rounded-lg 
//                      hover:bg-orange-500 
//                      transition duration-300"
//         >
//           Signup
//         </Link>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 bg-black text-white 
                    flex justify-between items-center 
                    px-10 py-4 shadow-lg z-50">

      <h1 className="text-2xl font-bold text-orange-400">
        Pune Tourism
      </h1>

      <div className="space-x-6 text-lg">
        <Link to="/" className="hover:text-orange-400 text-white">Home</Link>
        <Link to="/about" className="hover:text-orange-400">About</Link>
        <Link to="/contact" className="hover:text-orange-400">Contact</Link>
        <Link to="/places" className="hover:text-orange-400">Places</Link>
        <Link to="/login" className="hover:text-orange-400">Login</Link>
        <Link to="/signup" className="hover:text-orange-400">SignUp</Link>
      </div>
    </nav>
  );
};

export default Navbar;
