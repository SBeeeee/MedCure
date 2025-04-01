"use client"
import ProtectedRoute from "../context/ProtectedRoute";
import { useState } from "react";

import DashBoard from "./components/DashBoard";

export default function page() {
   

  return (
   <ProtectedRoute> 
    <DashBoard/>
  </ProtectedRoute>
      
  )
}
