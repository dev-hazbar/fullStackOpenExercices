import { useState, useEffect } from 'react'
import dataCountries from './services/dataCountries'
import CountryFinder from './CountryFinder/CountryFinder'



function App() {
  const [countries, setCountries] = useState([])
  const countriesState = {countries, setCountries}

  useEffect(() => {
    console.log('effect')
    dataCountries
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        console.log(response.data)
        setCountries(response.data)
      })
  }, [])

  if (countries.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h1>Data of countries</h1>
      <CountryFinder countriesState={countriesState}/>
    </>
  )
}

export default App
