import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTopSalesData = createAsyncThunk('topSales/fetchTopSalesData', async (_, { getState }) => {
  const language = getState().language.value;
  const response = await fetch('http://127.0.0.1:8000/api/v1/products', {
    method: 'GET',
    headers: {
      'Accept-Language': language,
    },
  });
  if (!response.ok) {
    throw new Error('Помилка завантаження topSalesData');
  }
  const data = await response.json();
  return data;
});

const topSalesSlice = createSlice({
  name: 'topSales',
  initialState: {
    loading: false,
    error: null,
    topSales: [], // Сюди зберігаються отримані товари
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopSalesData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTopSalesData.fulfilled, (state, action) => {
        state.loading = false;
        state.topSales = action.payload.results; // Зберігаємо саме список результатів
      })
      .addCase(fetchTopSalesData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default topSalesSlice.reducer;
