import { useState } from "react"
import './styles/WeatherCard.css'

const WeatherCard = ({weather, temp}) => {

    const [iscelsius, setiscelsius] = useState(true)
    const changetemperture = () => {
        setiscelsius(!iscelsius)
    }

  return (
   <article className="weather">
     <h1 className="weather_title">Weather App</h1>
     <h2 className="weather_country">{weather?.name}, {weather?.sys.country}</h2>
     <section className="weather_body">
        <header className="weather_img">
        <img className="weather_icon" src={weather && `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
        </header>
        <article className="weather_condition">
            <h3 className="weather_description">{weather?.weather[0].description}</h3>
            <ul className="weather_list">
                <li className="weather_item"><span className="weather_label">Wind speed</span><span className="weather_value">{weather?.wind.speed}m/s</span></li>
                <li className="weather_item"><span className="weather_label">Clouds</span><span className="weather_value">{weather?.clouds.all}%</span></li>
                <li className="weather_item"><span className="weather_label">Pressure</span><span className="weather_value">{weather?.main.pressure}hPa</span></li>
            </ul>
        </article>
     </section>
     <section className="weather_principal">
        <h2 className="weather_temp">{ iscelsius? `${temp?.celsius} C` : `${temp?.fahrenheit} F`}</h2>
     </section>
     <footer className="weather_footer"> 
        <button className="weather_btn" onClick={changetemperture}>Change To F/C</button>
     </footer>
   </article>
  )
}

export default WeatherCard