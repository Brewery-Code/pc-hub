import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import i18n from "../../locales/i18n";
import { RootState } from "../store";

const fetchCatalog = createAsyncThunk("catalog/fetchCatalog", async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/categories/`,
    {
      method: "GET",
      headers: {
        "Accept-Language": i18n.language,
      },
    },
  );
  return response.json();
});

interface ICategoryChildren {
  id: number;
  name: string;
  slug: string;
  image: string;
  is_new: boolean;
  children: ICategoryChildren[];
  parent: number;
}

interface ICategory {
  id: number;
  name: string;
  slug: string;
  image: string;
  is_new: boolean;
  children: ICategoryChildren[];
  parent: null;
}

interface ICatalogState {
  catalog: ICategory[];
  status: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ICatalogState = {
  catalog: [],
  status: "idle",
  error: null,
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalog.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.catalog = action.payload;
      })
      .addCase(fetchCatalog.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

const selectCategory = (state: RootState, slug: string | undefined) => {
  if (slug) {
    for (const category of state.catalog.catalog) {
      if (category.slug === slug) {
        return category;
      }
      for (const subcategory of category.children) {
        if (subcategory.slug === slug) {
          return subcategory;
        }
      }
    }
  } else {
    return state.catalog.catalog;
  }
};

export {
  catalogSlice,
  fetchCatalog,
  selectCategory,
  type ICategory,
  type ICategoryChildren,
};
