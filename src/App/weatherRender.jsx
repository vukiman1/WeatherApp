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
    console.log(Array.isArray(forecast2))
    console.log(forecast2.main)
    console.log(forecast)

    return (
      <>
               <div className="weather-api">
                  {
                     apiday.map((item) => (
                        <div className="weather-api-day">
                        <h3 className="weather-api-day-text"></h3>
                        <img className = 'weather-api-day-img'src='{item.img} 'alt="" />
                        <h3 className="weather-api-day-text weather-api-day-temperature"> °C</h3>
                     </div>   
                     ))
                  }                                          
               </div>
      </>
       

        
    )
}

export default Weather