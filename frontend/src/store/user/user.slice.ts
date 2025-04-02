import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../types";
import i18n from "../../locales/i18n";

const registerUser = createAsyncThunk(
  "user/registerUser",
  async ({
    userName,
    userEmail,
    userPassword,
  }: {
    userName: string;
    userEmail: string;
    userPassword: string;
  }) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/users/register/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": i18n.language,
        },
        body: JSON.stringify({
          name: userName,
          email: userEmail,
          password: userPassword,
        }),
      },
    );

    return await response.json();
  },
);

const initialState: IUser = {
  status: "idle",
  error: null,
  name: "",
  surname: "",
  email: "",
  access: "",
  refresh: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.status = "succeeded";
        state.name = action.payload.data.name;
        state.email = action.payload.data.email;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

export { userSlice, registerUser };
