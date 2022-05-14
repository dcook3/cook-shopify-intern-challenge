import { configureStore } from '@reduxjs/toolkit'
import responsesReducer from './responseSlice.js';

export default configureStore({
    reducer: {
        responses: responsesReducer
    }
})