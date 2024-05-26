import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice (
    {
        name: 'day',
        initialState: {
            value: 3
        },
        reducers: {
            dayChange: (state, action) => {
                state.value = action.payload
            }
        }
    }    
)




export const {dayChange} = counterSlice.actions
export default counterSlice.reducer
