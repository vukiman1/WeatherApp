
import { useState } from 'react';
import { useEffect } from 'react';
import search from '../Images/searchicon.png'
import WeatherRender from './weatherRender'
import Time from './time'
import axios from 'axios';
const API_KEY = 'b3db8f825b9daf955fca61cf20795fae';
function Search() {

    

    const [city, setCity] = useState('');
    const [forecast, setForecast] = useState([]);
    const [forecastDays, setForecastDays] = useState(3); // Số ngày dự báo mặc định là 7
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      await fetchForecast();
    };
  
    useEffect(() => {
      fetchForecast();
    }, [forecastDays])

    const handleInputChange = (e) => {
      setCity(e.target.value);
    };
  
    const handleKeyDown = (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        fetchForecast();
      }
    };
  
    
    const handleSelectChange = (selectedDays) => {
      setForecastDays(selectedDays);
    };


    const fetchForecast = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        );
        const dailyForecast = response.data.list.filter((item, index) => index % 8 === 0).slice(0, forecastDays);
        setForecast(dailyForecast);
      } catch (error) {

      }
    };


    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(prof => {
      // console.log(prof)
    })




    return (
        <>
            <section className="search">
                        <input
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            className="search__input"
                            value={city}
                            type="text" placeholder="Nhập tên thành phố, ví dụ:HaNoi"
                        ></input>
                        <button 
                            className="search__button"
                            type="submit"
                            onClick = {handleSubmit}

                        >
                            <img className='search__button--icon' src={search} alt=''/>        
                        </button>                
            </section>
            {/* <div className='weather-error'>
              <p>Nhập sai tên thành phố, hãy nhập lại!</p>
            </div> */}
            <Time handleSelectChange={handleSelectChange}/>
            <WeatherRender  forecast={forecast}/>
        </>
        
    )
}

export default Search;

