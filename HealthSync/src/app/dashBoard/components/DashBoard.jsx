"use client"
import { useState, useEffect } from "react";
import HealthStats from "./HealthStat";
import HealthGraph from "./HealthGraph";
import { useAuth } from "@/app/context/AuthContext";
import HealthScoreButton from "./HealthScoreButton";

const DashBoard = () => {
  const { user } = useAuth();

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
    </div>
  );
};

export default DashBoard;
