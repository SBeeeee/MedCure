import React from 'react'
import HealthData from './components/HealthData'
import ProtectedRoute from '../context/ProtectedRoute'

function page() {
  return (
    
      <ProtectedRoute>
      <HealthData/>
      </ProtectedRoute>
    
  )
}

export default page
