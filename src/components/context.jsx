import React, { createContext, useContext, useState } from "react";

// ✅ 1. Create context
export const GeminiContext = createContext();

// ✅ 2. Provider Component
export const GeminiProvider = ({ children }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [history,setHistory]=useState([]);
  const [showResult,setShowResult]=useState(false);

  const API_KEY = "AIzaSyAGaqEAMo14xetGo_NXnCFEuF3QM6YjIu4"; // ⬅ Replace this with your API Key

  // ✅ Function to call Gemini API
  const askGemini = async (userQuestion) => {
    setHistory([...history,userQuestion])
    setShowResult(true)
    setQuestion(userQuestion);
    setAnswer("");
    setError("");
    setLoading(true);

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: userQuestion }] }],
          }),
        }
      );

      const data = await res.json();
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      setAnswer(reply || "No response from Gemini.");
    } catch (err) {
      setError("❌ Error: " + err.message);
    }

    setLoading(false);
  };

  return (
    <GeminiContext.Provider
      value={{ question, answer, loading, error, askGemini,history,showResult }}
    >
      {children}
    </GeminiContext.Provider>
  );
};
