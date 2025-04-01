"use client"
import HealthStats from "./HealthStat";
import HealthGraph from "./HealthGraph";
import { useAuth } from "@/app/context/AuthContext";

const DashBoard = () => {
  const { user, loading } = useAuth();

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
    </div>
  );
};

export default DashBoard;
