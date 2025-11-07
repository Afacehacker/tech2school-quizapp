import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar({ user, setUser }) {
    const [isMobile, setIsMobile] = useState(false);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleResize = () => setIsMobile(window.innerWidth < 768);

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <nav className="bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-800 text-white shadow-lg fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Link to="/" className="text-2xl font-bold tracking-tight">
                        TECH2SCHOOL
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-6 items-center">
                        <Link to="/" className="hover:text-green-400 transition">
                            Home
                        </Link>
                        <Link to="/quizsubjects" className="hover:text-green-400 transition">
                            Quizzes
                        </Link>
                        {user ? (
                            <>
                                <Link to="/dashboard" className="hover:text-green-400 transition">
                                    Dashboard
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="bg-green-500 px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="bg-green-500 px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="bg-green-500 px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setOpen(!open)}
                            className="text-white focus:outline-none"
                        >
                            {open ? "✖" : "☰"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-purple-800 px-4 py-4 space-y-3"
                >
                    <Link
                        to="/"
                        onClick={() => setOpen(false)}
                        className="block hover:text-green-400 transition"
                    >
                        Home
                    </Link>
                    <Link
                        to="/quizsubjects"
                        onClick={() => setOpen(false)}
                        className="block hover:text-green-400 transition"
                    >
                        Quizzes
                    </Link>
                    {user ? (
                        <>
                            <Link
                                to="/dashboard"
                                onClick={() => setOpen(false)}
                                className="block hover:text-green-400 transition"
                            >
                                Dashboard
                            </Link>
                            <button
                                onClick={() => {
                                    handleLogout();
                                    setOpen(false);
                                }}
                                className="w-full bg-green-500 px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                onClick={() => setOpen(false)}
                                className="block bg-green-500 px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                onClick={() => setOpen(false)}
                                className="block bg-green-500 px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </motion.div>
            )}
        </nav>
    );
}
