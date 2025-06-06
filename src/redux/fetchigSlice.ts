import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  loading: boolean;
  data: null | object;
  error: boolean;
}

const initialState: initialState = {
  loading: false,
  data: null,
  error: false,
};

export const fetchSlice = createSlice({
  name: "fetch",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },

    fetchSucces: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = false;
    },
    fetchFailure: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});
