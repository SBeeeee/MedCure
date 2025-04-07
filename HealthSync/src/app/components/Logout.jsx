"use client";

import { useAuth } from "../context/AuthContext";

const LogoutButton = () => {
  const { logout } = useAuth();

  return <button 
  className="text-xl font-semibold rounded-3xl px-2 "
  onClick={logout}>Logout</button>;
};

export default LogoutButton;