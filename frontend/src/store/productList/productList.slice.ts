import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import i18n from "../../locales/i18n";

const fetchProductList = createAsyncThunk(
  "productList/fetchProductList",
  async ({ parentID, page }: { parentID: string; page?: string }) => {
    // Створюємо URL з базовим шляхом
    let url = `${import.meta.env.VITE_API_BASE_URL}/products/?category=${encodeURIComponent(parentID)}&page_size=60`;

    // Додаємо параметр page, якщо він є
    if (page) {
      url += `&page=${encodeURIComponent(page)}`;
    }

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Accept-Language": i18n.language,
      },
    });
    // console.log(await response.json());
    return await response.json();
  },
);

interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  discounted_price: number;
  rating: number;
  main_image: string;
  is_new: boolean;
}

interface IProductListState {
  productList: IProduct[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: IProductListState = {
  productList: [],
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
        // Якщо є нові продукти, додаємо їх до старих, щоб вони не заміщували один одного
        if (action.payload.results) {
          state.productList = [...state.productList, ...action.payload.results];
        }
      })
      .addCase(fetchProductList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

export { productListSlice, fetchProductList, type IProduct };
