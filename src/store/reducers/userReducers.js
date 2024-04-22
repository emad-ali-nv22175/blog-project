import { createSlice } from '@reduxjs/toolkit';

const userInitialState = { number: 0 };

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setUserInfo(state, action) {
      state.setUserInfo = action.payload;
    },
    resetuserInfo(state,  action) {

      state.UserInfo = null
    },
  },
});

const userActions = userSlice.actions;
const userReducer = userSlice.reducer;

export { userActions, userReducer };