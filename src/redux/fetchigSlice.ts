import { createSlice } from "@reduxjs/toolkit";
import { fetchThunk } from "./thunks/fetchThunk";

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

 const fetchSlice = createSlice({
  name: "fetch",
  initialState,
  reducers: {},

  extraReducers:(builder)=>{
    builder
    .addCase(fetchThunk.pending,(state)=>{
        state.loading=true;
        state.error = false;
    })
    .addCase(fetchThunk.fulfilled,(state,action)=>{
        state.data=action.payload;
        state.loading = false;
        state.error = false;

    })
    .addCase(fetchThunk.rejected, (state)=>{
        state.error = true;
        state.loading = false;
    })
  }
  
});

export default fetchSlice.reducer ;
