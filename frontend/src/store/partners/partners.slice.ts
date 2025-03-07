import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import i18n from "../../locales/i18n";

const fetchPartners = createAsyncThunk("partners/fetchPartners", async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/core/partners/`,
    {
      method: "GET",
      headers: {
        "Accept-Language": i18n.language,
      },
    },
  );
  const data = await response.json();
  return data;
});

interface IPartner {
  title: string;
  image: string;
}

interface IPartnerState {
  partners: IPartner[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: IPartnerState = {
  partners: [],
  status: "idle",
  error: null,
};

const partnersSlice = createSlice({
  name: "partners",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPartners.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPartners.fulfilled, (state, action) => {
        state.partners = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchPartners.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

export { fetchPartners, partnersSlice };
