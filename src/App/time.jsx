import React from 'react';

function Time({ handleSelectChange }) {

  const handleChange = (e) => {
    const selectedDays = parseInt(e.target.value);
    handleSelectChange(selectedDays);
  }
    
    return (
        <section className="time" key='time'>
            <h2>Khoảng thời gian dự báo</h2>
            <select 
            className="time__select" 
            onChange={handleChange}
            >
                <option value="3">3 Ngày</option>
                <option value="5">5 Ngày</option>
            </select>
        </section>
    )
    
}

export default Time