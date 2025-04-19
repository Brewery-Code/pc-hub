import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import i18n from "../../locales/i18n";
import { IProduct } from "../types";

const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (id: string) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/products/${id}`,
      {
        method: "GET",
        headers: {
          "Accept-Language": i18n.language,
        },
      },
    );
    const data = await response.json();
    return data;
  },
);

interface IProductState {
  product: IProduct;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: IProductState = {
  product: {
    id: "",
    name: "",
    slug: "",
    brand: "",
    category: "",
    description: "",
    price: 0,
    discounted_price: 0,
    rating: 0,
    attributes: [],
    main_image: "",
    images: [],
    is_new: false,
    is_stock: false,
    warranty: 0,
    estimated_shipping_time: "",
    delivery_options: [],
  },
  status: "idle",
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        console.log(action.payload);
        state.status = "succeeded";
        state.product = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

export { fetchProduct, productSlice, type IProduct };
