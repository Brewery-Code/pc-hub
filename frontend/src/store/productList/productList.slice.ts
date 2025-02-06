import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import i18n from "../../locales/i18n";

const fetchProductList = createAsyncThunk(
  "productList/fetchProductList",
  async (parentId, productList) => {
    const response = await fetch(
      `http://127.0.0.1:8000/api/v1/categories/${parentId}/${productList}/`,
      {
        method: "GET",
        headers: {
          "Accept-Language": i18n.language,
        },
      },
    );
    return response.json();
  },
);

const productListSlice = createSlice({
  name: "productList",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchProductList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      });
  },
});
