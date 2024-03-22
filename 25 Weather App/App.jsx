import React, { useState } from "react"
import { weatherData } from "./data.ts"
import Weather from "./components/Weather.jsx"

/* Challenge

The weather data is currently hardcoded into the JSX. Your task is to insert it via JavaScript so the app can be dynamic. 
      
    1. Based on whether the day is currently set to Monday, Tuesday, or Wednesday, the app should 
       use state to automatically display the correct items for the following:
        - background image
        - emoji icon (☀️, 🌧️, or ❄️)
        - weather condition
        - low & high temperatures
        - day of the week
    
    2. When you click on the test button, the app should show all of the correct items listed above 
       for the next day in the weatherData array, cycling through the pattern: Monday -> Tuesday -> Wednesday -> Monday, etc. 
    
    3. The weatherData array can be moved, but it should not be otherwise modified. 
       
    4. The code should be modular and well-organized. 
*/

export default function App() {
  const [currentWeather, setCurrentWeather] = useState(weatherData[0])

  const handleClick = () => {
    const index = currentWeather.id === 0 ? 1 : currentWeather.id === 1 ? 2 : 0

    setCurrentWeather(weatherData[index])
  }

  const icon =
    currentWeather.condition === "Sunny"
      ? "☀️"
      : currentWeather.condition === "Rainy"
      ? "🌧️"
      : "❄️"

  return (
    <div className={`app-container ${currentWeather.condition}-background`}>
      <Weather currentWeather={currentWeather} icon={icon} />
      <button onClick={handleClick}>Test</button>
    </div>
  )
}
