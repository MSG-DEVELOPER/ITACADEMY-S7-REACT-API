import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchThunk = createAsyncThunk(
  "fetch/fetchData",

  (url: string) => {
    return fetch(url)
      .then((res) => res.json())

      .catch((error) => {
        throw error;
      });
  }
);
