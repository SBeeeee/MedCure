"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import HealthGraphs from "./HealthGraphs";

const HealthData = () => {
    const { user, loading } = useAuth();
    const [healthData, setHealthData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!user) return;
        const fetchData = async () => {
            try {
                const res = await fetch(`http://localhost:8000/health/getData/${user._id}`);
                const data = await res.json();
                if (data.success) {
                    setHealthData(data.response.reverse()); // Latest first
                } else {
                    setError("Failed to fetch data");
                }
            } catch (err) {
                setError("Error fetching data");
            }
        };

        fetchData();
    }, [user]);

    if (loading) return <p>Loading...</p>;
    if (!user) return <p>Please log in to view your health data.</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="p-5">
            <h2 className="text-2xl font-semibold mb-4">Health Data</h2>

            {/* Data Table */}
            <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-2">Timestamp</th>
                            <th className="border p-2">Temperature (°C)</th>
                            <th className="border p-2">SpO2 (%)</th>
                            <th className="border p-2">ECG</th>
                            <th className="border p-2">Heart Rate (BPM)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {healthData.map((data, index) => (
                            <tr key={index} className="text-center">
                                <td className="border p-2">{new Date(data.createdAt).toLocaleString()}</td>
                                <td className="border p-2">{data.temperature}</td>
                                <td className="border p-2">{data.spO2}</td>
                                <td className="border p-2">{data.ecg}</td>
                                <td className="border p-2">{data.heartRate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Graphs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <HealthGraphs title="Temperature (°C)" data={healthData} dataKey="temperature" color="#ff7300" />
                <HealthGraphs title="SpO2 (%)" data={healthData} dataKey="spO2" color="#387908" />
                <HealthGraphs title="ECG" data={healthData} dataKey="ecg" color="#0088FE" />
                <HealthGraphs title="Heart Rate (BPM)" data={healthData} dataKey="heartRate" color="#FF0000" />
            </div>
        </div>
    );
};



export default HealthData;
