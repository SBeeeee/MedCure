"use client";
import { useState } from "react";

const SaveHealthDataButton = ({ user, data }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSaveData = async () => {
    if (!user) {
      setMessage("You must be logged in to save data.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:8000/health/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user._id, // Ensure `user.id` exists
          temperature: data.temperature,
          spO2: data.spo2,
          ecg: data.ecg,
          heartRate: data.heartRate,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage("Health data saved successfully!");
      } else {
        setMessage(result.error || "Failed to save data.");
      }
    } catch (error) {
      setMessage("Error saving data.");
      console.error("Save error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6 text-center">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition"
        onClick={handleSaveData}
        disabled={loading}
      >
        {loading ? "Saving..." : "Save Health Data"}
      </button>
      {message && <p className="mt-3 text-sm">{message}</p>}
    </div>
  );
};

export default SaveHealthDataButton;
