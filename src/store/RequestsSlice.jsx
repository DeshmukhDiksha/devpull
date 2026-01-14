import { createSlice } from '@reduxjs/toolkit';

const RequestSlice = createSlice({
    name: 'requests',
    initialState: [],
    reducers: {
        addRequests: (state, action)=>{
            return action.payload;
        },
        clearRequests: (state, action) =>{
            return []
        }
    }
});

export const {addRequests, clearRequests} = RequestSlice.actions;
export default RequestSlice.reducer;