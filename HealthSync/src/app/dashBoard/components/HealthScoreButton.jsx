"use client";
import { useState, useEffect } from "react";
import fetchData from "./fetchData";
import HealthScoreModal from "./HealthScoreModal";

const HealthScoreButton = () => {
  const [healthData, setHealthData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [healthScore, setHealthScore] = useState(null);

  useEffect(() => {
    const getHealthData = async () => {
      const data = await fetchData();
      setHealthData(data);
    };
    getHealthData();
  }, []);

  const submitHealthScore = async (formData) => {
    if (!healthData) return;
    
    const requestBody = {
      HR: healthData.heartRate,
      TEMP: healthData.temperature,
      SPO2: healthData.spo2,
      AVPU: formData.AVPU,
      AGE: formData.AGE,
      SEX: formData.SEX,
    };

    try {
      const response = await fetch("http://localhost:8000/health/healthscore", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });
      const result = await response.json();
      setHealthScore(result.healthScore);
      setShowModal(false);
    } catch (error) {
      console.error("Error fetching health score:", error);
    }
  };

  return (
    <div className="text-center mt-5">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => setShowModal(true)}
      >
        Generate Health Score
      </button>

      {healthScore !== null && (
        <div className="mt-5 p-4 bg-green-500 text-white rounded">
          Health Score: {healthScore}
        </div>
      )}

      {showModal && (
        <HealthScoreModal onClose={() => setShowModal(false)} onSubmit={submitHealthScore} />
      )}
    </div>
  );
};

export default HealthScoreButton;
