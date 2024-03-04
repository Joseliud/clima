import { useEffect, useState } from 'react'
import './App.css'
import WeatherCard from './Componentes/WeatherCard'
import axios from 'axios'
import Loading from './Componentes/Loading'

function App() {

  const [coords, setcoords] = useState()
  const [weather, setweather] = useState()
  const [temp, settemp] = useState()
  const [isloading, setisloading] = useState(true)

  const success = info => {
    setcoords({
      lat: info.coords.latitude,
      lon: info.coords.longitude
    })

  }

  useEffect(() => { 
 navigator.geolocation.getCurrentPosition(success)
},[])
  

useEffect(() =>{
  if(coords){  
  const APIKEY = '72575a03f2c5af2be9095d0c604919cb'
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`

  axios.get(url)
  .then(res => {  
    setweather(res.data)
    const celsius = (res.data.main.temp - 273.15).toFixed(1)
    const fahrenheit =( (9/5 * celsius ) + 32).toFixed(1)
    settemp({
      celsius,
      fahrenheit
    })
    } )
  .catch(err => console.log(err))
  .finally(() => setisloading(false))
  }
},[coords])

  
return (
   <div className='app'>
    { 
      isloading
      ? <Loading/>
      :(  
    <WeatherCard
    weather={weather}
    temp={temp}/>
    )
    }
   </div>
  )
}

export default App
