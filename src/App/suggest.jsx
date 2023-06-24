import suggest from '../Images/suggest.png'

function Suggest() {
    return (
        <section className="suggest">
                <img className="suggest__icon" src={suggest} alt="" />
                <p className="suggest__text">Gợi ý: nên mang áo mưa vì trời có thể đổ mưa!</p>
         </section>
    )
}

export default Suggest