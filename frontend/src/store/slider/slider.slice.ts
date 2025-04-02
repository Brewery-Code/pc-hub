import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import i18n from "../../locales/i18n";

const fetchSlider = createAsyncThunk("slider/fetchSlider", async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/core/banners/`,
    {
      method: "GET",
      headers: {
        "Accept-Language": i18n.language,
      },
    },
  );

  return await response.json();
});

interface ISlider {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ISliderState {
  slides: ISlider[];
  status: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ISliderState = {
  slides: [],
  status: "idle",
  error: null,
};

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSlider.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchSlider.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.slides = action.payload;
      })
      .addCase(fetchSlider.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

export { sliderSlice, fetchSlider };
