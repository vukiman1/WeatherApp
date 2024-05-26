import { createSlice } from '@reduxjs/toolkit'


export const apiStorage= createSlice (
        {
            name: 'api',
            initialState: {
                value: []
            },
            reducers: {
                getApi: (state, action) => {
                    state.value = action.payload
                }
            }
        }    
)


export const {getApi} = apiStorage.actions
export default apiStorage.reducer