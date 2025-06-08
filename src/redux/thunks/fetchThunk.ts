import { createAsyncThunk } from "@reduxjs/toolkit";
import { Authorization } from "../../api/config";

export const fetchThunk = createAsyncThunk(
  "fetch/fetchData",

  (url: string) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization,
      },
    };

    return fetch( url,options)
      .then((res) => res.json())

      .catch((error) => {
        throw error;
      });
  }
);
