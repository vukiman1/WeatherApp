

function Time () {
    return (
        <div className="weather-time">
            <h2 className="weather-time-text">Khoảng thời gian dự báo</h2>
            <select className="weather-time-select" id = 'time'>
                <option value="3">3 Ngày</option>
                <option value="7">7 Ngày</option>
            </select>
        </div>
    )
    
}

export default Time