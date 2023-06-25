import suggest from '../Images/suggest.png';
import getSuggestion from './suggestion'
function Suggest(weatherCondition) {
   const suggestion = getSuggestion(weatherCondition.weatherCondition)
console.log('begin')
// console.log(weatherCondition.forecastCondition)
// weatherCondition.forecastCondition.map((item)=> {
    console.log(weatherCondition.weatherCondition)
// })
console.log('end')

  return (
    <section className="suggest" key="">
      
      {(weatherCondition.weatherCondition === null) ? (
        <p>Bấm vào từng ngày để xem gợi ý!</p>
      )   : (
        <p>
          <img className="suggest__icon" src={suggest} alt="img" />
          {suggestion}
        </p>
      )}
    </section>
  );
}

export default Suggest;
