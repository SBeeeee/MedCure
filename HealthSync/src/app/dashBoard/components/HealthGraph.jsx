"use client"
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import fetchData from "./fetchData";

const HealthGraph = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const updateData = async () => {
      const latestData = await fetchData();
      setData((prevData) => [...prevData.slice(-50), latestData]);
    };

    updateData();
    const interval = setInterval(updateData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-5 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-800">Real-Time Health Graphs 📊</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis  />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="heartRate" stroke="#FF0000" strokeWidth={2} />
          <Line type="monotone" dataKey="temperature" stroke="#FFA500" strokeWidth={2} />
          <Line type="monotone" dataKey="spo2" stroke="#008000" strokeWidth={2} />
          <Line type="monotone" dataKey="ecg" stroke="#0000FF" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HealthGraph;
