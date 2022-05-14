import { createSlice } from '@reduxjs/toolkit';

const responsesSlice = createSlice({
        name: 'responses',
        initialState: [],
        reducers: {
            addResponse: (state, action) => {
                state.push(action.payload);
            }
        }
    });
export const { addResponse } = responsesSlice.actions;
export default responsesSlice.reducer;

export const selectAllResponses = state => state.responses;