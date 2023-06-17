import cloud from '../Images/cloud_1.png'
import { useState } from 'react'

function Weather() {
    const [apiday, setApiday] =useState([
        {
           day: 'Hôm nay',
           img: cloud
        },
        {
            day: 'Hôm nay',
            img: cloud
         },
         {
            day: 'Hôm nay',
            img: cloud 
         },
         {
            day: 'Hôm nay',
            img: cloud 
         },
         {
            day: 'Hôm nay',
            img: cloud 
         },
         {
            day: 'Hôm nay',
            img: cloud 
         },
         {
            day: 'Hôm nay',
            img: cloud 
         }
    ])
    return (
        <div className="weather-api">

                {
                    apiday.map((item) => (
                        <div className="weather-api-day">
                        <h3 className="weather-api-day-text">{item.day}</h3>
                        <img className = 'weather-api-day-img'src={item.img} alt="" />
                    </div>   
                    ))
                }
                                                      
        </div>
    )
}

export default Weather