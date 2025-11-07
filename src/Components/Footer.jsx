// src/Components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 text-white mt-16 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo + Info */}
                <div className="flex flex-col space-y-3">
                    <h2 className="text-2xl font-bold tracking-wider">TECH2SCHOOL</h2>
                    <p className="text-sm opacity-90 leading-relaxed">
                        Empowering schools and students through interactive, smart, and
                        fun-to-take qualifying quizzes. Built for the future of education.
                    </p>
                    <p className="text-xs opacity-70 mt-2">
                        © {new Date().getFullYear()} TECH2SCHOOL. All rights reserved.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link
                                to="/"
                                className="hover:text-yellow-300 transition duration-300"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/quizzes"
                                className="hover:text-yellow-300 transition duration-300"
                            >
                                Quizzes
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/dashboard"
                                className="hover:text-yellow-300 transition duration-300"
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/login"
                                className="hover:text-yellow-300 transition duration-300"
                            >
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/register"
                                className="hover:text-yellow-300 transition duration-300"
                            >
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact + Socials */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                    <p className="text-sm mb-3">
                        Email:{" "}
                        <a
                            href="mailto:support@tech2school.com"
                            className="text-yellow-300 hover:underline"
                        >
                            support@tech2school.com
                        </a>
                    </p>
                    <div className="flex space-x-5 text-2xl">
                        <a
                            href="#"
                            className="hover:text-yellow-300 transition duration-300"
                            title="Facebook"
                        >
                            🌐
                        </a>
                        <a
                            href="#"
                            className="hover:text-yellow-300 transition duration-300"
                            title="Twitter"
                        >
                            🐦
                        </a>
                        <a
                            href="#"
                            className="hover:text-yellow-300 transition duration-300"
                            title="Instagram"
                        >
                            📸
                        </a>
                        <a
                            href="#"
                            className="hover:text-yellow-300 transition duration-300"
                            title="LinkedIn"
                        >
                            💼
                        </a>
                    </div>
                </div>
            </div>

            {/* Divider Line */}
            <div className="border-t border-white/20 mt-10"></div>

            {/* Bottom Section */}
            <div className="text-center py-4 text-sm bg-gradient-to-r from-blue-700 to-purple-700">
                Built with ❤️ by TECH2SCHOOL Team | Powered by React + TailwindCSS
            </div>
        </footer>
    );
}

export default Footer;
