import { Link } from "react-router-dom";

export default function Header() {
  const links = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: "Orders", path: "/orders" },
    { name: "Cart", path: "/cart" },
  ];

  return (
    <header className="w-full bg-red-50 flex items-center justify-between p-4 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/vite.svg" alt="Food App Logo" className="h-10 w-auto" />
        <span className="ml-2 font-bold text-xl text-red-700 hidden md:block">HouseMate</span>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex gap-6">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="font-semibold text-gray-700 hover:text-red-600 transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Signup/Login Buttons */}
      <div className="flex gap-3">
        <Link
          to="/signup"
          className="bg-amber-300 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-amber-400 transition-colors"
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
        >
          Login
        </Link>
      </div>

      {/* Mobile Menu Placeholder */}
      <div className="md:hidden">
        {/* You can add a hamburger menu here later */}
      </div>
    </header>
  );
}