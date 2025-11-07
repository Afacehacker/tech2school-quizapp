import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Login = () => {
    const { loginUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = form;
        const result = loginUser(email, password);
        if (result.success) {
            navigate("/dashboard");
        } else {
            setError(result.message);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-700 flex justify-center items-center text-white">
            <div className="bg-white/10 p-8 rounded-2xl shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">Welcome Back</h2>

                {error && <p className="text-red-400 text-center mb-3">{error}</p>}

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="p-3 rounded bg-white/20 text-white placeholder-gray-200"
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        className="p-3 rounded bg-white/20 text-white placeholder-gray-200"
                    />
                    <button
                        type="submit"
                        className="bg-white text-purple-700 font-semibold py-2 rounded mt-2 hover:bg-gray-200 transition"
                    >
                        Login
                    </button>
                </form>

                <p className="mt-4 text-center text-sm">
                    Don’t have an account?{" "}
                    <span
                        className="text-yellow-300 cursor-pointer hover:underline"
                        onClick={() => navigate("/register")}
                    >
                        Register
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;
