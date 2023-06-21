import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = '8763f52f8f81afba44d696d21e6f8402';

function App() {
  const [city, setCity] = useState('');
  const [forecast, setForecast] = useState([]);
  const [forecastDays, setForecastDays] = useState(5); // Số ngày dự báo mặc định là 7

  const handleSubmit = async (e) => {
    alert (city)
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );

      // Filter forecast data to get daily forecast
      const dailyForecast = response.data.list.filter((item, index) =>
        index % 8 === 0
      ).slice(0, forecastDays);

      setForecast(dailyForecast);
    } catch (error) {
      console.error(error);
    }
  };

  const handleForecastChange = (e) => {
    const selectedDays = parseInt(e.target.value);
    setForecastDays(selectedDays);
  };
  console.log(typeof(forecast))
  const getWeatherAdvice = (weather) => {
    if (weather.includes('rain')) {
      return 'Mang theo áo mưa!';
    } else if (weather.includes('cloud')) {
      return 'Mang theo ô, có thể mưa!';
    } else if (weather.includes('clear')) {
      return 'Trời nắng, hãy mang ô nếu cần!';
    } else if (weather.includes('cold')) {
      return 'Mặc áo khoác, trời lạnh!';
    } else {
      return '';
    }
  };

  return (
    <div className="App">
      <h1>Dự báo thời tiết</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nhập tên thành phố"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Tìm kiếm</button>
      </form>

      <div className="forecast-options">
        <label htmlFor="forecastDays">Số ngày dự báo:</label>
        <select
          id="forecastDays"
          value={forecastDays}
          onChange={handleForecastChange}
        >
          <option value={9}>9 ngày</option>
          <option value={3}>3 ngày</option>
        </select>
      </div>

      <div className="forecast">
        {forecast.map((item) => (
          <div className="weather-card" key={item.dt}>
            <p>{new Date(item.dt * 1000).toLocaleDateString()}</p>
            <p>Temperature: {item.main.temp} °C</p>
            <p>{getWeatherAdvice(item.weather[0].description)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
