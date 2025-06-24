import { useState } from 'react'
import openweathermap  from '../services/openweathermap.jsx'

const Filter = ({inputValue, onChange}) => {
  return (
    <div>
      Find countries <input value={inputValue} onChange={onChange} />
    </div>
  )
}

const ShowLocalityWeather = ({localityName}) => {
  const [localityWeather, setLocalityWeather] = useState(null)

  openweathermap.getLocalityWeather(localityName)
  .then((response) => {
    setLocalityWeather(response.data)
  }).catch((error) => {
    console.error('Error fetching weather data:', error)
  })

  if (!localityWeather) {
    return <p>Loading weather data...</p>
  }

  const iconUrl = openweathermap.getLocalityWeatherIMG(localityWeather)

  return (
    <div>
      <h3>Weather in {localityName}</h3>
      <p>Temperature: {localityWeather.main.temp} in Celsius</p>
      <img src={iconUrl} alt={`Weather icon for ${localityName}`} />
      <p>Wind: {localityWeather.wind.speed} m/s</p>
    </div>
  )
}

const ShowCountry = ({country}) => {

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <h3>Languages</h3>
      <ul>
        {Object.values(country.languages).map(language => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
      <ShowLocalityWeather localityName={country.capital} />
    </div>
  )
}

const ShowsCountries = ({countries, filterText, buttonHandler}) => {

  if (!countries.length) {
    return <p>No countries found</p>
  }

  if (filterText === '' || filterText === null) {
    return null
  }

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(filterText.toLowerCase())
  )

  if (filteredCountries.length > 10) {
    return <p>To many matches, specify another filter</p>
  }

  if (filteredCountries.length === 1) {
    return <ShowCountry country={filteredCountries[0]} />
  }

  return (
    <ul>
      {filteredCountries.map(country => (
        <li key={country.cca3}>
          {country.name.common}
          <button onClick={buttonHandler(country)}>
            Show
          </button>
        </li>
      ))}
    </ul>
  )
}

function CountryFinder({countriesState}) {

  const { countries, setCountries } = countriesState
  const [filterText, setFilterText] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)

  const handleFilterChange = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setFilterText(event.target.value)

    if(selectedCountry) {
      setSelectedCountry(null)
    }
  }

  // function curried
  const handleCountrySelect = (country) => () => {
    setSelectedCountry(country)
  }

  return (
    <>
      <div>
        <Filter inputValue={filterText} onChange={handleFilterChange} />
        <div>
          {selectedCountry
            ? <ShowCountry country={selectedCountry} />
            : <ShowsCountries countries={countries} filterText={filterText} buttonHandler={handleCountrySelect}/>
          }
        </div>
      </div>
    </>
  )
}

export default CountryFinder
