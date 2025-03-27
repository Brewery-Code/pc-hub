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

interface IDelivery_options {
  name: string;
  free_from: string;
}

interface IProduct {
  id: string;
  name: string;
  slug: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  discounted_price: number;
  rating: number;
  attributes: IAttribute[];
  images: IImages[];
  is_new: boolean;
  is_stock: boolean;
  warranty: number;
  estimated_shipping_time: string;
  delivery_options: IDelivery_options[];
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
    slug: "",
    brand: "",
    category: "",
    description: "",
    price: 0,
    discounted_price: 0,
    rating: 0,
    attributes: [],
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
