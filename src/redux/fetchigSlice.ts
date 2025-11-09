import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchThunk } from "./thunks/fetchThunk";

interface Film {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  release_date: string;
  vote_count: number;
  backdrop_path: string;
}

interface ApiResponse {
  page: number;
  results: Film[];
  total_pages: number;
  total_results: number;
}

interface initialState {
  loading: boolean;
  data: ApiResponse | null;
  films: Film[];
  currentPage: number;
  totalPages: number;
  hasMore: boolean;
  error: boolean;
}

const initialState: initialState = {
  loading: false,
  data: null,
  films: [],
  currentPage: 0,
  totalPages: 0,
  hasMore: true,
  error: false,
};

const fetchSlice = createSlice({
  name: "fetch",
  initialState,
  reducers: {
    resetFilms: (state) => {
      state.films = [];
      state.currentPage = 0;
      state.hasMore = true;
      state.data = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchThunk.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchThunk.fulfilled, (state, action: PayloadAction<ApiResponse>) => {
        const newFilms = action.payload.results;
        
        // Si es la primera página (page 1), reemplazar todas las películas
        if (action.payload.page === 1) {
          state.films = newFilms;
          state.currentPage = 1;
        } else {
          // Si es una página posterior, agregar las nuevas películas
          state.films = [...state.films, ...newFilms];
          state.currentPage = action.payload.page;
        }

        state.data = action.payload;
        state.totalPages = action.payload.total_pages;
        state.hasMore = action.payload.page < action.payload.total_pages;
        state.loading = false;
        state.error = false;
      })
      .addCase(fetchThunk.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export const { resetFilms } = fetchSlice.actions;
export default fetchSlice.reducer;
