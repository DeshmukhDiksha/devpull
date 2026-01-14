import { createSlice } from '@reduxjs/toolkit';

const userCoonectionsSclice = createSlice({
    name: 'userConnections', 
    initialState: [],
    reducers: {
        setUserConnections: (state, action) => {    
            return action.payload;
        },
        clearUserConnections: (state) => {
            return [];
        }
    }
});

export const { setUserConnections, clearUserConnections } = userCoonectionsSclice.actions;

export default userCoonectionsSclice.reducer;