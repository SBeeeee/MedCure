"use client"
import React from 'react'
import Link from 'next/link'
import LogoutButton from './Logout'

function Navbar() {
  return (
    <div className="shadow-2xl  px-2 z-30 top-0 sticky bg-gray-800 text-white h-12 items-center justify-between flex">
      <Link href="/" className="text-lg font-extrabold font-serif">MedCure</Link>
      <div className="flex gap-4 font-bold">
        <Link href="/dashBoard">Realtime Visualisation</Link>
        <Link href="/History">History</Link>
        </div>
        <div>
        <Link href="/signup" className="font-bold">Signup</Link>
        <LogoutButton/>
        </div>
    </div>

  )
}

export default Navbar
