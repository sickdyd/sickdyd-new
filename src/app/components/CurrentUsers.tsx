'use client'

import { useEffect, useState } from 'react'

const CurrentUsers = () => {
  const [currentUsers, setCurrentUsers] = useState(0)

  useEffect(() => {
    async function fetchCurrentUsers() {
      try {
        const response = await fetch('/api/currentUsers')
        const { currentUsers: currentUsersData } = await response.json()
        setCurrentUsers(currentUsersData)
      } catch (error) {
        console.error('Error fetching current users:', error)
      }
    }

    fetchCurrentUsers()
  }, [])

  return <div>Current Users: {currentUsers}</div>
}

export default CurrentUsers
