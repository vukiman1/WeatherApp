import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/counterSilce'
import apiStorage from '../redux/apiStorag'

export default configureStore ({
    reducer: {
        day: counterReducer,
        api:apiStorage
    }
}) 