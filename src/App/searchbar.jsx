import { useState } from 'react';
import search from '../Images/searchicon.png'


function Search() {

    
    const [name,setName] = useState('')


    const handleClick = () => {
        setName('')
        alert(name)
    }

    const handleInputChange = (e) => {
        setName(e.target.value)
    }

    return (
        <div className="weather-search">
                    <input
                        onChange={handleInputChange}
                        className="weather-search-input"
                        value={name}
                        type="text" placeholder="Nhập tên thành phố"
                    ></input>
                    <button 
                        className="weather-search-button"
                        onClick={handleClick}
                    >
                        <img className='weather-search-icon' src={search} alt=''/>        
                    </button>                  
        </div>
    )
}

export default Search