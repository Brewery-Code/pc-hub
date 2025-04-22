import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import i18n from "../../locales/i18n";
import { IProduct } from "../types";

const fetchProductList = createAsyncThunk(
  "productList/fetchProductList",
  async ({
    category,
    page,
    length,
  }: {
    category: string;
    page?: string;
    length?: string;
  }) => {
    let url = `${import.meta.env.VITE_API_BASE_URL}/products/?category=${encodeURIComponent(category)}&page_size=60`;
    if (page) {
      url += `&page=${encodeURIComponent(page)}`;
    }

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Accept-Language": i18n.language,
      },
    });
    const data = await response.json();
    let lengthInt = 0;
    if (length !== undefined) {
      lengthInt = parseInt(length);
    }
    return { data, category, lengthInt };
  },
);

interface IProductListState {
  productList: IProduct[];
  category: string;
  totalItems: number;
  totalPages: number;
  length: number;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: IProductListState = {
  productList: [],
  category: "",
  totalItems: 0,
  totalPages: 0,
  length: 0,
  status: "idle",
  error: null,
};

const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.totalItems = action.payload.data.total__items;
        state.totalPages = action.payload.data.total_pages;
        if (
          state.category == action.payload.category &&
          action.payload.lengthInt > state.length
        ) {
          state.productList = [
            ...state.productList,
            ...action.payload.data.results,
          ];
        } else {
          state.productList = action.payload.data.results;
          state.category = action.payload.category;
          state.length = 0;
        }
        state.length = action.payload.lengthInt;
      })
      .addCase(fetchProductList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

export { productListSlice, fetchProductList };
