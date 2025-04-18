import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import i18n from "../../locales/i18n";
import { IProduct } from "../types";

const fetchTopSales = createAsyncThunk("topSales/fetchTopSales", async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/products/?page_size=12`,
    {
      method: "GET",
      headers: {
        "Accept-Language": i18n.language,
      },
    },
  );
  const products = await response.json();
  return products.results;
});

interface ITopSalesState {
  products: IProduct[];
  status: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ITopSalesState = {
  products: [],
  status: "idle",
  error: null,
};

const topSalesSlice = createSlice({
  name: "topSales",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopSales.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchTopSales.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchTopSales.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

export { topSalesSlice, fetchTopSales, type IProduct };
