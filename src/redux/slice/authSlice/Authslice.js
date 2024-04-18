import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false, 
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authlogin: (state) => {
      state.isAuth = true; 
    },

    authlogout: (state) => {
      state.isAuth = false; 
    },
  },
});

export const { authlogin, authlogout } = AuthSlice.actions;

export default AuthSlice.reducer;
