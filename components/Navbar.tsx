"use client";

import { useState, useEffect } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/image/logo.png";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Gasha", href: "/Gasha" },
    { name: "Nisir", href: "/Nisir" },
    { name: "Enyuma IAM", href: "/Enyuma_IAM" },
    { name: "Code Protection", href: "/Code_Protection" },
    { name: "Biometrics", href: "/Biometrics" },
    { name: "Contact us", href: "/Contact_us" },
  ];

  const handleLogin = () => {
    if (!role || !email || !password) {
      alert("Please fill in all fields");
      return;
    }
    setLoggedIn(true);
    setLoginModalOpen(false);
    router.push(`/${role}`);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setRole("");
    setEmail("");
    setPassword("");
    router.push("/");
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-3 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Logo" className="h-28 w-28 mr-2" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          <div className="flex gap-8 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium dark:text-gray-100 text-primary hover:text-gray-100 dark:hover:text-primary"
              >
                {item.name}
              </Link>
            ))}

            {!loggedIn ? (
              <button
                onClick={() => setLoginModalOpen(true)}
                className="text-sm font-medium dark:text-gray-100 text-primary hover:text-gray-100 dark:hover:text-primary"
              >
                Login
              </button>
            ) : (
              <div className="flex items-center gap-4">
                <Link
                  href={`/${role}`}
                  className="text-sm font-semibold px-3 py-1 rounded bg-primary text-white shadow-md hover:shadow-lg transition"
                >
                  {role}
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-sm font-medium text-red-500 hover:text-red-700"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5 text-yellow-300" />
            ) : (
              <MoonIcon className="h-5 w-5 text-gray-200" />
            )}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-md text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center space-y-6 text-white">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 p-2"
          >
            <XMarkIcon className="h-6 w-6 text-white" />
          </button>

          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium hover:text-primary"
            >
              {item.name}
            </Link>
          ))}

          {!loggedIn ? (
            <button
              onClick={() => {
                setLoginModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="text-lg font-medium hover:text-primary"
            >
              Login
            </button>
          ) : (
            <div className="flex flex-col items-center space-y-2">
              <Link
                href={`/${role}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-semibold px-4 py-2 rounded bg-primary text-white shadow-md hover:shadow-lg transition"
              >
                {role}
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setMobileMenuOpen(false);
                }}
                className="text-lg font-medium text-red-400 hover:text-red-600"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}

      {/* Login Modal */}
      {loginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-2xl w-full max-w-sm border border-primary">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100 text-center">
              Role-Based Login
            </h2>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full mb-3 p-2 border rounded dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary shadow-[0_0_10px_rgba(0,123,255,0.5)]"
            >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
            </select>

            <input
              type="email"
              placeholder="Email"
              className="w-full mb-3 p-2 border rounded dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary shadow-[0_0_10px_rgba(0,123,255,0.5)]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-4 p-2 border rounded dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary shadow-[0_0_10px_rgba(0,123,255,0.5)]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex justify-between items-center">
              <button
                onClick={handleLogin}
                className="bg-primary text-white px-4 py-2 rounded shadow-[0_0_15px_rgba(0,123,255,0.7)] hover:shadow-[0_0_20px_rgba(0,123,255,0.9)] transition"
              >
                Login 
              </button>
              <button
                onClick={() => setLoginModalOpen(false)}
                className="text-gray-600 dark:text-gray-300 hover:underline"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;