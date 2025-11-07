import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar";

// Pages
import Home from "./Pages/Home";
import QuizSubjects from "./Pages/QuizSubjects";
import Quiz from "./Pages/Quiz";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Results from "./Pages/Results";

export default function App() {
  // User state management
  const [user, setUser] = useState(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <Router>
      {/* Navbar with user state */}
      <Navbar user={user} setUser={setUser} />

      {/* Routes */}
      <div className="pt-16 bg-gradient-to-b from-purple-700 via-indigo-600 to-purple-800 min-h-screen text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quizsubjects" element={<QuizSubjects />} />
          <Route path="/quiz/:subject" element={<Quiz />} />
          <Route
            path="/dashboard"
            element={user ? <Dashboard user={user} /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={<Login setUser={setUser} />}
          />
          <Route
            path="/register"
            element={<Register setUser={setUser} />}
          />
          <Route path="/results" element={<Results />} />
          <Route path="*" element={<h2 className="text-center mt-20">Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}
