import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dayChange } from '../redux/counterSilce';

function Time({ handleSelectChange }) {
  const count = useSelector(state => state.day.value)
  console.log(`Ngay duoc luu o Reux ${count}`)
  const dispatch = useDispatch()
  const handleChange = (e) => {
    const selectedDays = parseInt(e.target.value);
    dispatch(dayChange(selectedDays))
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