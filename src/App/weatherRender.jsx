import cloud from '../Images/cloud_1.png'
import { useState } from 'react'
import { forecast } from './WeatherApp'
function Weather(forecast ) {

   //  console.log(typeof(forecast))
   //  console.log(Array.isArray(apiday))
    const forecast2 = Object.values(forecast);
   //  console.log(Array.isArray(forecast2))
    console.log(forecast.forecast)
    function convertDate(values) {
      // const date = new Date(values);
      // console.log(date)
      // const formattedDate = `${date.getDate()}/${date.getMonth() + 1}`;
      // console.log(formattedDate);
      // return formattedDate
      const date = new Date(values);
      const currentDate = new Date()

      const options = { weekday: 'long'};

      const currentDateConvert = currentDate.toLocaleDateString(undefined, options);
      const formattedDate = date.toLocaleDateString(undefined, options);

      if (currentDateConvert == formattedDate) return 'Hôm nay'
      else return formattedDate
      
    }
    return (
      <>       
               
               <div className="weather-api">
                  {
                     forecast.forecast.map((item) => (
                     <div className="weather-api-day">
                        <h3 className="weather-api-day-text"> {convertDate(item.dt_txt)}</h3>
                        <img className = 'weather-api-day-img' src={cloud} alt="" />
                        <h3 className="weather-api-day-text weather-api-day-temperature">{Math.round(item.main.temp)}°C</h3>
                     </div>   
                     ))
                  }                                          
               </div>
      </>
       

        
    )
}

export default Weather