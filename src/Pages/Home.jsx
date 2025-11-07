// src/Pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 text-white flex flex-col">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center h-screen px-6 text-center relative overflow-hidden">
                <motion.h1
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg"
                >
                    WELCOME TO TECH2SCHOOL
                </motion.h1>
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="max-w-2xl text-lg md:text-xl mb-8 drop-shadow-md"
                >
                    The ultimate platform to prepare students for qualifying exams in Mathematics and Computer Science.
                    Take quizzes, track progress, and improve your scores with gamified lessons.
                </motion.p>

                {/* First Start a Quiz Button */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    <Link
                        to="/quizsubjects"
                        className="px-8 py-4 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 transition-colors rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105"
                    >
                        Start a Quiz 🚀
                    </Link>
                </motion.div>

                {/* Animated floating shapes */}
                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="absolute top-10 left-10 w-20 h-20 bg-purple-300 rounded-full opacity-40 blur-2xl"
                />
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ repeat: Infinity, duration: 5 }}
                    className="absolute bottom-20 right-16 w-32 h-32 bg-blue-400 rounded-full opacity-30 blur-3xl"
                />
                <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ repeat: Infinity, duration: 6 }}
                    className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-400 rounded-full opacity-25 blur-2xl"
                />
            </section>

            {/* Features Section */}
            <section className="py-16 px-6 md:px-20 bg-white text-gray-900 rounded-t-3xl -mt-24 z-10 relative">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-4xl font-extrabold mb-12 text-center"
                >
                    Why TECH2SCHOOL?
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="p-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl shadow-xl text-white hover:scale-105 transform transition-transform"
                    >
                        <h3 className="text-xl font-bold mb-3">Gamified Learning</h3>
                        <p>Quizzes with points, progress bars, and timers make learning fun and engaging for students.</p>
                    </motion.div>

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="p-6 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl shadow-xl text-white hover:scale-105 transform transition-transform"
                    >
                        <h3 className="text-xl font-bold mb-3">Track Progress</h3>
                        <p>Students can see which questions they answered incorrectly and track their improvement over time.</p>
                    </motion.div>

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4 }}
                        className="p-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-xl text-white hover:scale-105 transform transition-transform"
                    >
                        <h3 className="text-xl font-bold mb-3">Multi-Subject Quizzes</h3>
                        <p>Mathematics and Computer Science quizzes with 150 questions each, covering real exam topics.</p>
                    </motion.div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 px-6 md:px-20 bg-gray-100 text-gray-900 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-3xl md:text-4xl font-extrabold mb-6"
                >
                    Ready to Test Your Knowledge?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="mb-8 max-w-xl mx-auto"
                >
                    Take quizzes, track your scores, and see corrections to the questions you answered incorrectly.
                </motion.p>

                {/* Second Start a Quiz Button */}
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <Link
                        to="/quizsubjects"
                        className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform"
                    >
                        Start a Quiz 🚀
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
