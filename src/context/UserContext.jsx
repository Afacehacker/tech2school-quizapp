import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState(() => {
        const saved = localStorage.getItem("users");
        return saved ? JSON.parse(saved) : [];
    });

    const [currentUser, setCurrentUser] = useState(() => {
        const saved = localStorage.getItem("currentUser");
        return saved ? JSON.parse(saved) : null;
    });

    // keep users & current user in localStorage
    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    useEffect(() => {
        if (currentUser) {
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
        } else {
            localStorage.removeItem("currentUser");
        }
    }, [currentUser]);

    // Register new user (auto login)
    const registerUser = (name, email, password) => {
        const exists = users.find((u) => u.email === email);
        if (exists) return { success: false, message: "User already exists" };

        const newUser = { name, email, password, quizzes: [] };
        setUsers([...users, newUser]);
        setCurrentUser(newUser);
        return { success: true };
    };

    // Manual login
    const loginUser = (email, password) => {
        const found = users.find(
            (u) => u.email === email && u.password === password
        );
        if (found) {
            setCurrentUser(found);
            return { success: true };
        }
        return { success: false, message: "Invalid email or password" };
    };

    const logoutUser = () => setCurrentUser(null);

    const saveQuizResult = (subject, score, total) => {
        if (!currentUser) return;
        const updatedUser = {
            ...currentUser,
            quizzes: [
                ...(currentUser.quizzes || []),
                { subject, score, total, date: new Date().toISOString() },
            ],
        };
        setCurrentUser(updatedUser);
        setUsers(
            users.map((u) => (u.email === currentUser.email ? updatedUser : u))
        );
    };

    return (
        <UserContext.Provider
            value={{
                users,
                currentUser,
                registerUser,
                loginUser,
                logoutUser,
                saveQuizResult,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
