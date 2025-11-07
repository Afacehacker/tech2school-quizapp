import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { motion } from "framer-motion";

const Dashboard = () => {
    const { currentUser, logoutUser } = useContext(UserContext);
    const navigate = useNavigate();

    if (!currentUser) {
        return (
            <div className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-700 text-white text-lg">
                Please log in to access your dashboard.
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-700 text-white p-8">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8"
            >
                <h2 className="text-3xl font-bold mb-2 text-center">
                    Welcome, {currentUser.name}! 🎓
                </h2>
                <p className="text-center text-sm text-white/70 mb-6">
                    Email: {currentUser.email}
                </p>

                <motion.h3
                    className="text-2xl font-semibold mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    Your Quiz History 🧠
                </motion.h3>

                {currentUser.quizzes && currentUser.quizzes.length > 0 ? (
                    <div className="space-y-4">
                        {currentUser.quizzes.map((quiz, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/20 p-4 rounded-lg flex justify-between items-center shadow-sm"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div>
                                    <p className="font-semibold">{quiz.subject}</p>
                                    <p className="text-sm text-white/70">
                                        {new Date(quiz.date).toLocaleDateString()}
                                    </p>
                                </div>
                                <p className="font-bold text-yellow-300">
                                    {quiz.score}/{quiz.total}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <p className="text-white/70 text-center">
                        You haven’t taken any quizzes yet.
                    </p>
                )}

                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => {
                            logoutUser();
                            navigate("/login");
                        }}
                        className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition"
                    >
                        Logout
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default Dashboard;
