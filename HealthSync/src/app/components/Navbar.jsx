"use client"
import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className="shadow-2xl  top-0 sticky bg-gray-800 text-white h-12 items-center justify-between flex">
      <Link href="/" className="text-lg font-bold">MedCure</Link>
        <Link href="/dashBoard">Realtime Visualisation</Link>
        <Link href="/History">History</Link>
        <Link href="/signup">Login/Signup</Link>
    </div>
  )
}

export default Navbar
