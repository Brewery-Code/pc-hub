import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import i18n from "../../locales/i18n";
import { IUser } from "../types";

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

const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }: { email: string; password: string }) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/users/login/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      },
    );
    return await response.json();
  },
);

const refreshToken = createAsyncThunk("user/refreshToken", async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/users/token/refresh/`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  return await response.json();
});

const fetchUserInfo = createAsyncThunk(
  "user/fetchUserInfo",
  async ({ access }: { access?: string }, { dispatch }) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/users/me/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: access ? `Bearer ${access}` : "",
        },
      },
    );
    if (response.ok) {
      return await response.json();
    } else if (response.status === 401) {
      console.log("test");
      const refreshResponse = await dispatch(refreshToken());

      if (refreshToken.fulfilled.match(refreshResponse)) {
        const newAccess = refreshResponse.payload.access;

        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/users/me/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${newAccess}`,
            },
          },
        );

        if (response.ok) {
          return await response.json();
        } else {
          return response.status;
        }
      }
    } else {
      return await response.json();
    }
  },
);

const fetchCart = createAsyncThunk(
  "user/fetchCart",
  async ({ access }: { access?: string }, { dispatch }) => {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/cart/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: access ? `Bearer ${access}` : "",
      },
    });

    if (response.ok) {
      return await response.json();
    } else if (response.status === 401) {
      const refreshResponse = await dispatch(refreshToken());

      if (refreshToken.fulfilled.match(refreshResponse)) {
        const newAccess = refreshResponse.payload.access;

        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/cart/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${newAccess}`,
            },
          },
        );

        if (response.ok) {
          return await response.json();
        } else {
          return response.status;
        }
      }
    } else {
      return response.status;
    }
  },
);

const addToCart = createAsyncThunk(
  "user/addToCart",
  async (
    {
      access,
      product_id,
      quantity,
    }: {
      access: string;
      product_id: number;
      quantity: number;
    },
    { dispatch },
  ) => {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/cart/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: access ? `Bearer ${access}` : "",
      },
    });

    if (response.ok) {
      return await response.json();
    } else if (response.status === 401) {
      const refreshResponse = await dispatch(refreshToken());

      if (refreshToken.fulfilled.match(refreshResponse)) {
        const newAccess = refreshResponse.payload.access;

        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/cart/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${newAccess}`,
            },
          },
        );

        if (response.ok) {
          return await response.json();
        } else {
          return response.status;
        }
      }
    } else {
      return response.status;
    }
  },
);

const initialState: IUser = {
  status: "idle",
  error: null,
  access: null,
  name: "",
  surname: "",
  email: "",
  cart: {
    cart_id: 0,
    items: [],
    total_price: 0,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //----------Register User----------//
      .addCase(registerUser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        if (action.payload.access) {
          state.status = "succeeded";
          state.access = action.payload.access;
          state.name = action.payload.data.name;
          state.email = action.payload.data.email;
        } else {
          state.error = action.payload.email;
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      })
      //----------Login User----------//
      .addCase(loginUser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log(action.payload);
        if (action.payload.access) {
          state.status = "succeeded";
          state.access = action.payload.access;
        } else {
          state.error = action.payload.email;
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      })
      //----------Refresh Token----------//
      .addCase(refreshToken.pending, (state) => {
        state.status = "pending";
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.access = action.payload.access;
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      })
      //----------Get User Info----------//
      .addCase(fetchUserInfo.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        console.log(action.payload);
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      })

      //----------Get User Cart----------//
      .addCase(fetchCart.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        if (action.payload === Number) {
          state.error = action.payload;
          state.status = "failed";
        } else {
          console.log(action.payload);
          state.status = "succeeded";
          state.cart = action.payload;
        }
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

export {
  userSlice,
  registerUser,
  loginUser,
  refreshToken,
  fetchCart,
  fetchUserInfo,
};
