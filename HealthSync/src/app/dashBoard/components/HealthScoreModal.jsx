"use client";
import { useState } from "react";

const analyzeHealth = (healthData, healthScore) => {
  const normalValues = {
    heartRate: { min: 60, max: 100 },
    temperature: { min: 36.1, max: 37.2 },
    spo2: { min: 95, max: 100 }
  };

  let analysis = "Health Analysis:\n";
  
  analysis += `Heart Rate: ${healthData.heartRate} bpm (Normal: 60-100 bpm)\n`;
  if (healthData.heartRate < normalValues.heartRate.min || healthData.heartRate > normalValues.heartRate.max) {
    analysis += "⚠️ Abnormal heart rate detected!\n";
  }

  analysis += `Temperature: ${healthData.temperature}°C (Normal: 36.1-37.2°C)\n`;
  if (healthData.temperature < normalValues.temperature.min || healthData.temperature > normalValues.temperature.max) {
    analysis += "⚠️ Abnormal temperature detected!\n";
  }

  analysis += `SpO2: ${healthData.spo2}% (Normal: 95-100%)\n`;
  if (healthData.spo2 < normalValues.spo2.min) {
    analysis += "⚠️ Low SpO2 detected!\n";
  }

  analysis += `\nHealth Score: ${healthScore}/10. `;
  if (healthScore < 4) {
    analysis += "🚨 Critical condition! Immediate medical attention required.";
  } else if (healthScore < 7) {
    analysis += "⚠️ Moderate condition. Monitoring and potential medical intervention recommended.";
  } else {
    analysis += "✅ Good condition. Maintain a healthy lifestyle.";
  }

  return analysis;
};

const HealthScoreModal = ({ onClose, onSubmit, healthscore, setHealthscore, healthData }) => {
  const [formData, setFormData] = useState({ AVPU: "", SEX: "", AGE: "" });
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [analysis, setAnalysis] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  const handleAnalysis = () => {
    if (healthData && healthscore !== null) {
      setAnalysis(analyzeHealth(healthData, healthscore));
      setShowAnalysis(true);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg text-black w-96 text-center">
        {healthscore === null ? (
          <>
            <h2 className="text-lg font-bold mb-4">Enter Details</h2>
            <label className="block text-left font-semibold">AVPU:</label>
            <input type="text" name="AVPU" className="border p-2 w-full mb-2 rounded" onChange={handleInputChange} />
            <label className="block text-left font-semibold">Sex:</label>
            <input type="text" name="SEX" className="border p-2 w-full mb-2 rounded" onChange={handleInputChange} />
            <label className="block text-left font-semibold">Age:</label>
            <input type="number" name="AGE" className="border p-2 w-full mb-2 rounded" onChange={handleInputChange} />
            <div className="flex justify-end mt-3">
              <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>Submit</button>
              <button className="ml-3 bg-gray-500 text-white px-4 py-2 rounded" onClick={onClose}>Cancel</button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-lg font-bold mb-4">Health Score</h2>
            <p className="text-3xl font-semibold text-green-600 mb-4">{healthscore}</p>
            <button className="bg-gray-500 text-white px-4 py-2 rounded mr-2" onClick={() => { onClose(); setHealthscore(null); }}>Close</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleAnalysis}>Get Analysis</button>
            {showAnalysis && <p className="mt-4 text-left whitespace-pre-wrap font-semibold">{analysis}</p>}
          </>
        )}
      </div>
    </div>
  );
};

export default HealthScoreModal;
