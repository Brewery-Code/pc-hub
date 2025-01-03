import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSliderData = createAsyncThunk('slider/fetchSliderData', async (_, { getState }) => {
  const language = getState().language.value;
  const response = await fetch('http://127.0.0.1:8000/api/v1/banners/', {
    method: 'GET',
    headers: {
      'Accept-Language': language,
    },
  });
  if (!response.ok) {
    throw new Error('Помилка зантаження даних слайдера');
  }
  const data = await response.json();
  return data;
});


const sliderSlice = createSlice({
  name: 'slider',
  initialState: {
    loading: false,
    error: null,
    slider: [],
  },
  reducers: {
    fetchSliderDataStart: (state) => {
      state.loading = true;
    },
    fetchSliderDataSuccess: (state, action) => {
      state.loading = false;
      state.slider = action.payload;
    },
    fetchSliderDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSliderData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSliderData.fulfilled, (state, action) => {
        state.loading = false;
        state.slider = action.payload;
      })
      .addCase(fetchSliderData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});



export default sliderSlice.reducer;
