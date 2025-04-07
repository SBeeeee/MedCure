import React from 'react'
import Link from 'next/link'
import { MdArrowOutward } from "react-icons/md";
import LogoutButton from './Logout';

export default function HeroSection() {
  return (
    <div className="z-30 mx-4 flex flex-wrap justify-center gap-6 text-white py-12">
      
      {/* Left Section */}
      <div className="flex flex-col justify-between md:w-[48%]">
        <div className="md:text-5xl font-bold p-4 leading-tight">
          🩺 <span className="bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] text-transparent bg-clip-text">
            Know Your Health, Own Your Future!
          </span>
        </div>
        <p className="text-gray-300 text-lg font-extralight px-4 leading-relaxed">
          Your health is your greatest wealth. Stay ahead with real-time insights, risk analysis, and AI-powered recommendations tailored just for you. 
        </p>

        <div className="mt-6 space-y-2 px-4">
          <div className="flex items-center gap-3">
            ✅ <span className="text-gray-300 font-extralight">Instant health score generation</span>
          </div>
          <div className="flex items-center gap-3">
            🔍 <span className="text-gray-300 font-extralight">Deep analysis of key health indicators</span>
          </div>
          <div className="flex items-center gap-3">
            📊 <span className="text-gray-300 font-extralight">Personalized wellness recommendations</span>
          </div>
          <div className="flex items-center gap-3">
            🚀 <span className="text-gray-300 font-extralight">Track progress & stay ahead of risks</span>
          </div>
        </div>

        <div className="flex justify-end px-4 mt-6">
          <Link href="dashBoard" className="text-white border-black border-x-6 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] rounded-3xl flex border-y-3 text-sm p-3 px-4 shadow-blue-900 shadow-2xl font-medium items-center hover:cursor-pointer">
            Get A Score <MdArrowOutward className="text-lg ml-1"/>
          </Link>
        </div> 
      </div>
      
      {/* Right Section */}
      <div className="md:w-[48%] w-full gap-4 rounded-2xl p-4 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] text-transparent bg-clip-text">
          Why HealthScore?
        </h2>
        <p className="text-gray-300 text-lg font-extralight mt-2 leading-relaxed">
          HealthScore empowers you with real-time metrics, early risk detection, and lifestyle suggestions to ensure a healthier, longer life.
        </p>
        
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          <div className="bg-white/10 rounded-xl p-4 w-64 text-center">
            <h3 className="text-xl font-bold text-white">🩸 Blood Health</h3>
            <p className="text-gray-300 font-extralight text-sm mt-2">Monitor your vital markers and prevent health complications early.</p>
          </div>
          <div className="bg-white/10 rounded-xl p-4 w-64 text-center">
            <h3 className="text-xl font-bold text-white">💓 Heart Score</h3>
            <p className="text-gray-300 font-extralight text-sm mt-2">Analyze heart health trends & keep track of potential risks.</p>
          </div>
          <div className="bg-white/10 rounded-xl p-4 w-64 text-center">
            <h3 className="text-xl font-bold text-white">⚡ Energy Levels</h3>
            <p className="text-gray-300 font-extralight text-sm mt-2">Understand your body’s energy patterns and optimize daily performance.</p>
          </div>
        </div>
      </div>

    </div>
  )
}
