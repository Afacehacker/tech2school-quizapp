import React from "react";
import { Link } from "react-router-dom";

export default function QuizSubjects() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-400 text-white p-8">
            <h1 className="text-5xl font-extrabold mb-12 drop-shadow-lg">Choose a Subject</h1>
            <div className="flex flex-col md:flex-row gap-10">
                <Link
                    to="/quiz/math"
                    className="p-8 bg-purple-700 hover:bg-purple-800 rounded-xl shadow-2xl transform hover:scale-105 transition-all"
                >
                    <h2 className="text-3xl font-bold mb-2">Mathematics</h2>
                    <p>150 Questions • Arithmetic · Algebra · Geometry</p>
                </Link>

                <Link
                    to="/quiz/cs"
                    className="p-8 bg-indigo-700 hover:bg-indigo-800 rounded-xl shadow-2xl transform hover:scale-105 transition-all"
                >
                    <h2 className="text-3xl font-bold mb-2">Computer Science</h2>
                    <p>150 Questions • Programming · Data Structures · Theory</p>
                </Link>
            </div>
        </div>
    );
}
