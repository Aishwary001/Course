import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-500 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-xl font-bold">
          <Link to="/">CourseFlip</Link>
        </h1>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="hover:text-gray-200 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-200 transition duration-200"
          >
            About
          </Link>
          <Link
            to="/course"
            className="hover:text-gray-200 transition duration-200"
          >
            Course
          </Link>
          <Link
            to="/SignIn"
            className="px-4 py-2 rounded-full bg-white text-blue-500 hover:bg-blue-600 hover:text-white transition duration-200"
          >
            Sign In
          </Link>
          <Link
            to="/SignUp"
            className="px-4 py-2 rounded-full bg-white text-blue-500 hover:bg-blue-600 hover:text-white transition duration-200"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
