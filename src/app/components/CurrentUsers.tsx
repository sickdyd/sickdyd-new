'use client'

import { useEffect, useState } from 'react'

export interface CountryAndUsers {
  [key: string]: number
}

interface CurrentUsersData {
  totalUsers: number
  countryAndUsers: CountryAndUsers
}

const CurrentUsers = () => {
  const [currentUsersData, setCurrentUsersData] = useState<CurrentUsersData>()

  useEffect(() => {
    async function fetchCurrentUsers() {
      try {
        const response = await fetch('/api/currentUsers')
        const { currentUsers } = await response.json()

        setCurrentUsersData(currentUsers)
        console.log(currentUsers)
      } catch (error) {
        console.error('Error fetching current users:', error)
      }
    }

    fetchCurrentUsers()
  }, [])

  if (!currentUsersData) {
    return <div>Fetching...</div>
  }

  const { totalUsers, countryAndUsers } = currentUsersData

  return (
    <div className="text-center">
      <p>Total users: {totalUsers}</p>
      <br />
      {Object.entries(countryAndUsers).map(([country, users]) => (
        <p key={country}>
          {country}: {users}
        </p>
      ))}
    </div>
  )
}

export default CurrentUsers
