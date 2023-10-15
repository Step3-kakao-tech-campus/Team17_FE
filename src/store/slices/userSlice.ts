import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UserState {
  email: string | null;
  user: any;
}

const initialState: UserState = {
  email: null,
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setUser: (state, action: PayloadAction<object>) => {
      state.user = action.payload;
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
