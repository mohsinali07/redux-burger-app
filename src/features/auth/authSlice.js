import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  currentUser: null,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.currentUser = action.payload;
            state.isAuthenticated = true;
            state.error = null;
        },
        logout: (state) => {
            state.currentUser = null;
            state.isAuthenticated = false;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { login, logout, setError } = authSlice.actions;
export default authSlice.reducer;
