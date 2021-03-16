import React from 'react'
import { useAuth } from '../context/AuthContext'

const Dashboard = () => {
  const { currentUser } = useAuth();
  return (
    <div>
      {currentUser.displayName}
      {currentUser.email}
    </div>
  )
}

export default Dashboard
