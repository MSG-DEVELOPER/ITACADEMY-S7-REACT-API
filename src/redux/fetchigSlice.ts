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

export const fetchSlice = createSlice({
  name: "fetch",
  initialState,
  reducers: {
   

    fetchSucces: (state, action) => {
      state.data = action.payload;
    
    }
  

    
  },

  extraReducers:(builder)=>{
    builder
    .addCase(fetchThunk.pending,(state)=>{
        state.loading=true;
        state.error = false;
    })
    .addCase(fetchThunk.fulfilled,(state)=>{
        state.data=
        state.loading = false;
        state.error = false;

    })
    .addCase(fetchThunk.rejected, (state)=>{
        state.error = true;
        state.loading = false;
    })
  }
  
});

