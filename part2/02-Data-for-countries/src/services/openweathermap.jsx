import axios from 'axios'
const baseUrl = 'https://api.openweathermap.org/data/2.5/'
const API_KEY = import.meta.env.VITE_SOME_KEY

const getLocalityWeather = (localityName) => {
  return axios.get(`${baseUrl}weather?q=${localityName}&appid=${API_KEY}&units=metric`)
}

const getLocalityWeatherIMG = (localityWeather) => {
  const iconCode = localityWeather.weather[0].icon
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`
}

export default {getLocalityWeather, getLocalityWeatherIMG}