"use client"
import { useState, useEffect } from "react";
import HealthStats from "./HealthStat";
import HealthGraph from "./HealthGraph";
import { useAuth } from "@/app/context/AuthContext";
import HealthScoreButton from "./HealthScoreButton";
import fetchData from "./fetchData";
import SaveHealthDataButton from "./SaveHealthDataButton";

const DashBoard = () => {
  const { user } = useAuth();
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
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-5">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Welcome, {user ? user.fullName : "Guest"}
      </h1>

      <h1 className="text-3xl font-bold mb-5">📡 Health Monitoring Dashboard</h1>
      <HealthStats />
      <div className="w-full max-w-4xl mt-6">
        <HealthGraph />
      </div>
      <HealthScoreButton />
      <SaveHealthDataButton user={user} data={data} />
    </div>
  );
};

export default DashBoard;
