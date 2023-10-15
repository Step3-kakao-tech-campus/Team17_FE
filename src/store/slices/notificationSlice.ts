import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface NotificationState {
  notification: any;
}

const initialState: NotificationState = {
  notification: null,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification: (state, action: PayloadAction<object>) => {
      state.notification = action.payload;
    },
  },
});

export const { setNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
