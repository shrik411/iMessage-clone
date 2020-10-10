import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
        state.user = action.payload;
    },
    logout: state => {
        state.value = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectCount = state => state.user.user;

export default userSlice.reducer;
