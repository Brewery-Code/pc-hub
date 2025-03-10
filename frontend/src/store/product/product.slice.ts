import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import i18n from "../../locales/i18n";

const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async ({ id }: { id: string }) => {
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

interface IAttribute {
  attribute_name: string;
  value: string;
}

interface IImages {
  image: string;
}

interface IProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  discounted_price: number;
  rating: number;
  attributes: IAttribute[];
  images: IImages[];
  is_new: boolean;
}

interface IProductState {
  product: IProduct;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: IProductState = {
  product: {
    id: "",
    name: "",
    category: "",
    description: "",
    price: 0,
    discounted_price: 0,
    rating: 0,
    attributes: [],
    images: [],
    is_new: false,
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
        state.status = "succeeded";
        console.log(action.payload);
        state.product = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

export { fetchProduct, productSlice, type IProduct };
