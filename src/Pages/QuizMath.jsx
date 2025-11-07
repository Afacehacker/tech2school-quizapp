import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mathQuestions } from "../data/mathQuestions";

export default function QuizMath() {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [wrongAnswers, setWrongAnswers] = useState([]);

    const currentQuestion = mathQuestions[currentIndex];

    const handleNext = () => {
        if (!selectedOption) return alert("Please select an option!");

        const isCorrect = selectedOption === currentQuestion.answer;
        if (isCorrect) {
            setScore((prev) => prev + 1);
        } else {
            setWrongAnswers((prev) => [
                ...prev,
                {
                    question: currentQuestion.question,
                    correct: currentQuestion.answer,
                    chosen: selectedOption,
                },
            ]);
        }

        if (currentIndex + 1 < mathQuestions.length) {
            setCurrentIndex(currentIndex + 1);
            setSelectedOption("");
        } else {
            setShowResult(true);
        }
    };

    if (showResult) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 px-4">
                <div className="max-w-3xl bg-white/80 p-8 rounded-2xl shadow-2xl">
                    <h2 className="text-2xl font-bold text-indigo-700 text-center mb-6">
                        🎉 Quiz Completed!
                    </h2>
                    <p className="text-center text-lg mb-4">
                        You scored <span className="font-bold text-indigo-600">{score}</span> out of{" "}
                        {mathQuestions.length}
                    </p>

                    <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-2">Corrections:</h3>
                    <div className="space-y-4 max-h-80 overflow-y-auto">
                        {wrongAnswers.length === 0 ? (
                            <p className="text-green-600 text-center font-medium">
                                Perfect score! No wrong answers 🎯
                            </p>
                        ) : (
                            wrongAnswers.map((item, idx) => (
                                <div key={idx} className="border rounded-lg p-4 bg-gray-50">
                                    <p className="font-medium text-gray-700">{item.question}</p>
                                    <p className="text-red-500 text-sm mt-1">
                                        ❌ Your Answer: {item.chosen}
                                    </p>
                                    <p className="text-green-600 text-sm">
                                        ✅ Correct Answer: {item.correct}
                                    </p>
                                </div>
                            ))
                        )}
                    </div>

                    <button
                        onClick={() => navigate("/quiz")}
                        className="mt-6 w-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white py-3 rounded-lg font-semibold hover:scale-[1.02] transition"
                    >
                        Back to Subjects
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 px-4">
            <div className="max-w-2xl bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl w-full">
                <h2 className="text-2xl font-bold text-indigo-700 mb-4">
                    Question {currentIndex + 1} of {mathQuestions.length}
                </h2>
                <p className="text-gray-800 text-lg mb-6">{currentQuestion.question}</p>

                <div className="space-y-3">
                    {["A", "B", "C", "D"].map((opt) => (
                        <label
                            key={opt}
                            className={`block border rounded-lg px-4 py-2 cursor-pointer transition ${selectedOption === opt
                                ? "bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white"
                                : "hover:bg-gray-100"
                                }`}
                        >
                            <input
                                type="radio"
                                name="option"
                                value={opt}
                                checked={selectedOption === opt}
                                onChange={() => setSelectedOption(opt)}
                                className="mr-2 accent-indigo-600"
                            />
                            {opt}. {currentQuestion[`option${opt}`]}
                        </label>
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    className="mt-6 w-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white py-3 rounded-lg font-semibold hover:scale-[1.02] transition"
                >
                    {currentIndex + 1 === mathQuestions.length ? "Finish Quiz" : "Next Question"}
                </button>
            </div>
        </div>
    );
}
