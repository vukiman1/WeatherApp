import suggest from '../Images/suggest.png'

function Suggest() {
    return (
        <div className="weather-suggest">
                <img className="weather-suggest-icon" src={suggest} alt="" />
                <p className="weather-suggest-text">Gợi ý: nên mang áo mưa vì trời có thể đổ mưa!</p>
         </div>
    )
}

export default Suggest