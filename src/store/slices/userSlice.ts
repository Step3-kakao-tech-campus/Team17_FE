import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      // setState의 역할
      state.email = action.payload.email;
    },
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
  },
});

// redux Thunk
// export const loginRequest = createAsyncThunk(
//     "user/loginRequest",
//     async (data) => {
//         const {email, password} = data;
//         const response = await login({email, password});
//         return response.data;
//     },
// );

export const { setEmail, setUser } = userSlice.actions;

export default userSlice.reducer;
