import { useState } from 'react'
/* global fetch */
async function fetchLocations() {
  const response = await fetch('http://localhost:3333/api/v1/reserve')

  return response.json()
}

export function useData() {
  // SET STATE
  const [locations, setLocations] = useState([])

  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(undefined)

  //  USE LOCATION DATA
  async function getLocation() {
    try {
      setLoading(true)
      const locationsResponse = await fetchLocations()
      setLocations(locationsResponse.data)
    } catch (err) {
      setError(err)
    }
    setLoading(false)
  }

  // RETURN DATA
  return [{ locations, isLoading, error }, { getLocation }]
}
