import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        setUser: (state, action) => {
            console.log('Setting user in slice:', action.payload);
            return action.payload;
        },
        deleteUser: (state) => {
            return null;
        }
    }
});

export const { setUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;