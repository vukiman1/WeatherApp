
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
    const [errors, setErrors] = useState(false)

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
        //select ng
        const dailyForecast = response.data.list
        .filter((item, index) => index % 8 === 0)
        .slice(0, forecastDays);
        //
        setForecast(dailyForecast);
        setErrors(false)
      } catch (error) {
        // setErrors(true)
        console.log(error.response.data.message )
        if (error.response.data.message === 'city not found') {
          setErrors(true)
          console.log(error.response.data.message)
        }
      }
    };


   



    return (
        <>
            <section className="search">
                        <input
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            className="search__input"
                            value={city}
                            type="text"
                            placeholder="Nhập tên thành phố!"
                        >
                        </input>
                        
                        <button 
                            className="search__button"
                            type="submit"
                            onClick = {handleSubmit}

                        >
                            <img className='search__button--icon' src={search} alt=''/>   
                            <h3 className='search__button--text'>Tìm Kiếm</h3>     
                        </button>                
            </section>
            {errors &&  <div className='search__error'>
              <p>Nhập sai tên thành phố, hãy nhập lại! Ví dụ: London, Paris{errors}</p>
            </div> }
            <Time handleSelectChange={handleSelectChange}/>
            {forecast.length !== 0 ? (
            <WeatherRender  forecast={forecast}/>
            ) : ''}
            
        </>
        
    )
}

export default Search;

