import { createSlice } from "@reduxjs/toolkit";

type UserState = {
  email: string | null;
  username: string | null;
  uid: string | null;
};

const initialState: UserState = {
  email: null,
  username: null,
  uid: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.uid = action.payload.uid;
    },
    logout: (state) => {
      state.email = null;
      state.username = null;
      state.uid = null;
    },
  },
});

export const {login,logout} = userSlice.actions;
export default userSlice.reducer;
