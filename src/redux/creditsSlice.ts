import { createSlice } from "@reduxjs/toolkit";
import { fetchCreditsThunk } from "./thunks/fetchCreditsThunk";

interface InitialState {
  loading: boolean;
  data: null | object;
  error: boolean;
}

const initialState: InitialState = {
  loading: false,
  data: null,
  error: false,
};

const creditsSlice = createSlice({
  name: "credits",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchCreditsThunk.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCreditsThunk.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(fetchCreditsThunk.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export default creditsSlice.reducer;
