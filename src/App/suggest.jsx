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
    <section className="suggest" key="suggest">
      
      {(weatherCondition.weatherCondition === null) ? (
        <p>Bấm vào từng ngày để xem gợi ý!</p>
      )   : (
        <img className="suggest__icon" src={suggest} alt="" />,
        <p>{suggestion}</p>
      )}
    </section>
  );
}

export default Suggest;
