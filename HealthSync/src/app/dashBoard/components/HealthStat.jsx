"use client"
import { useState, useEffect } from "react";
import fetchData from "./fetchData";

const HealthStats = () => {
  const [data, setData] = useState({ heartRate: 0, temperature: 0, spo2: 0, ecg: 0 });

  useEffect(() => {
    const updateData = async () => {
      const latestData = await fetchData();
      setData(latestData);
    };

    updateData();
    const interval = setInterval(updateData, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 p-4 bg-gray-800 text-white rounded-lg shadow-lg">
      <div className="text-center">
        <h2 className="text-lg font-semibold">Heart Rate ❤️</h2>
        <p className="text-2xl">{data.heartRate} BPM</p>
      </div>
      <div className="text-center">
        <h2 className="text-lg font-semibold">Temperature 🌡️</h2>
        <p className="text-2xl">{data.temperature}°C</p>
      </div>
      <div className="text-center">
        <h2 className="text-lg font-semibold">SpO2 🫁</h2>
        <p className="text-2xl">{data.spo2}%</p>
      </div>
      <div className="text-center">
        <h2 className="text-lg font-semibold">ECG 📊</h2>
        <p className="text-2xl">{data.ecg}</p>
      </div>
    </div>
  );
};

export default HealthStats;
