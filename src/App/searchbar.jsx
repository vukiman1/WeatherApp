
import { useState } from 'react';
import search from '../Images/searchicon.png'
import WeatherRender from './weatherRender'
import Time from './time'
import axios from 'axios';
const API_KEY = '8763f52f8f81afba44d696d21e6f8402';
function Search() {

    

    const [city, setCity] = useState('');
    const [forecast, setForecast] = useState([]);
    const [forecastDays, setForecastDays] = useState(7); // Số ngày dự báo mặc định là 7
    
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


    const handleInputChange = (e) => {
        setCity(e.target.value)
    }




    return (
        <>
            <div className="weather-search">
                        <input
                            onChange={handleInputChange}
                            className="weather-search-input"
                            value={city}
                            type="text" placeholder="Nhập tên thành phố, ví dụ:HaNoi"
                        ></input>
                        <button 
                            className="weather-search-button"
                            type="submit"
                            onClick = {handleSubmit}

                        >
                            <img className='weather-search-icon' src={search} alt=''/>        
                        </button>                
            </div>
            {/* <div className='weather-error'>
              <p>Nhập sai tên thành phố, hãy nhập lại!</p>
            </div> */}
            <Time key={''}/>
            <WeatherRender  forecast={forecast}/>
        </>
        
    )
}

export default Search;

