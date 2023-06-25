import { useState } from 'react';
import { useEffect } from 'react';
import Suggest from './suggest'

function Weather(forecast ) {

   //  console.log(typeof(forecast))
   //  console.log(Array.isArray(apiday))
   const [selectedDay, setSelectedDay] = useState(null);

   function handleDayClick(day) {
      setSelectedDay(day);
   }
 
   useEffect(() => {
      setSelectedDay(null);
    }, [forecast])


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

      if (currentDateConvert === formattedDate) return 'Hôm nay'
      else return formattedDate
      
    }

      
    return (
      <>       
               
               <section className="forecast" key='forecast'>
                  {
                     forecast.forecast.map((item) => (
                     <div
                        className='forecast__day'
                        onClick={() => handleDayClick(item.weather[0].description)}
                        >
                        <h3 className="forecast__day--text"> {convertDate(item.dt_txt)}</h3>
                        <img className = 'forecast__day--img' src={`https://openweathermap.org/img/wn/${item.weather[0].icon.slice(0, 2)}d.png`} alt="" />
                        <h3 className="forecast__day--text forecast__day--temperature">{Math.round(item.main.temp)}°C</h3>
                     </div>   
                     ))
                  }
                     

               </section>
                  <Suggest weatherCondition={selectedDay} />
                  <img className = 'forecast__day--img' src='../access/images/weather_icon/clear sky.gift' alt=''/>
      </>
       

        
    )
}

export default Weather