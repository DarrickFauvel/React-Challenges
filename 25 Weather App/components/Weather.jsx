export default function Weather({ currentWeather, icon }) {
  return (
    <div className="weather-container">
      <div className="icon">{icon}</div>
      <div className="condition-text">{currentWeather.condition}</div>
      <div className="temp-range-container">
        <div className="low-temp-container">
          <p className="low-temp-data">{currentWeather.lowTemp}</p>
          <p>Low</p>
        </div>
        <div className="high-temp-container">
          <p className="high-temp-data">{currentWeather.highTemp}</p>
          <p>High</p>
        </div>
      </div>
      <div className="day">{currentWeather.day}</div>
    </div>
  )
}
