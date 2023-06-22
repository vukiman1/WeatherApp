import cloud from '../Images/cloud_1.png'
import { useState } from 'react'
import { forecast } from './WeatherApp'
function Weather(forecast ) {
    const [apiday, setApiday] =useState([
        {
           day: 'Hôm nay',
           img: cloud,
           temperature: 24
        },
        {
            day: 'Hôm nay',
            img: cloud,
            temperature: 24
         },
         {
            day: 'Hôm nay',
            img: cloud ,
            temperature: 24
         },
         {
            day: 'Hôm nay',
            img: cloud ,
            temperature: 24
         },
         {
            day: 'Hôm nay',
            img: cloud ,
            temperature: 24
         }
    ])
   //  console.log(typeof(forecast))
   //  console.log(Array.isArray(apiday))
    const forecast2 = Object.values(forecast);
   //  console.log(Array.isArray(forecast2))
   //  console.log(forecast.forecast[0].dt_txt)

    return (
      <>
               <div className="weather-api">
                  {
                     forecast.forecast.map((item) => (
                        <div className="weather-api-day">
                        <h3 className="weather-api-day-text"> {item.dt_txt}</h3>
                        <img className = 'weather-api-day-img'src={cloud} alt="" />
                        <h3 className="weather-api-day-text weather-api-day-temperature">{item.main.temp}°C</h3>
                     </div>   
                     ))
                  }                                          
               </div>
      </>
       

        
    )
}

export default Weather