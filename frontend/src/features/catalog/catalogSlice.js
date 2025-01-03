import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCatalogData = createAsyncThunk('catalog/fetchCatalogData', async (_, { getState }) => {
  const language = getState().language.value;
  const response = await fetch('http://127.0.0.1:8000/api/v1/categories/', {
    method: 'GET',
    headers: {
      'Accept-Language': language,
    },
  });
  if (!response.ok) {
    throw new Error('Помилка завантаження категорій')
  }
  const data = await response.json();
  return data;
});

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    loading: false,
    error: null,
    catalog: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalogData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCatalogData.fulfilled, (state, action) => {
        state.loading = false;
        state.catalog = action.payload;
      })
      .addCase(fetchCatalogData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default catalogSlice.reducer;