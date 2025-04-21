import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import i18n from "../../locales/i18n";
import { ICartProduct, IUser } from "../types";

const authorizedRequest = async (
  url: string,
  options: RequestInit,
  dispatch: any,
) => {
  const response = await fetch(url, { ...options });
  if (response.ok) return await response.json();
  else if (response.status === 401 && dispatch) {
    const refreshResult = await dispatch(refreshToken());
    if (refreshToken.fulfilled.match(refreshResult)) {
      const newAccess = refreshResult.payload.access;
      const retryResponse = await fetch(url, {
        ...options,
        headers: {
          ...(options.headers || {}),
          Authorization: `Bearer ${newAccess}`,
        },
      });
      if (retryResponse.ok) return await retryResponse.json();
      else return retryResponse.status;
    }
  }
};

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
        credentials: "include",
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
        credentials: "include",
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
  async ({ access }: { access?: string | null }, { dispatch }) => {
    return await authorizedRequest(
      `${import.meta.env.VITE_API_BASE_URL}/users/me/`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: access ? `Bearer ${access}` : "",
        },
      },
      dispatch,
    );
  },
);

const fetchCart = createAsyncThunk(
  "user/fetchCart",
  async ({ access }: { access?: string | null }, { dispatch }) => {
    return await authorizedRequest(
      `${import.meta.env.VITE_API_BASE_URL}/cart/`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": i18n.language,
          Authorization: access ? `Bearer ${access}` : "",
        },
      },
      dispatch,
    );
  },
);

const addToCart = createAsyncThunk(
  "user/addToCart",
  async (
    {
      access,
      product_id,
      quantity = 1,
    }: {
      access?: string | null;
      product_id: string;
      quantity?: number;
    },
    { dispatch },
  ) => {
    return await authorizedRequest(
      `${import.meta.env.VITE_API_BASE_URL}/cart/`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: access ? `Bearer ${access}` : "",
        },
        body: JSON.stringify({ product_id, quantity }),
      },
      dispatch,
    );
  },
);

const changeCartQuantity = createAsyncThunk(
  "user/changeCartQuantity",
  async (
    {
      access,
      product_id,
      quantity,
    }: {
      access?: string | null;
      product_id: string;
      quantity: number;
    },
    { dispatch },
  ) => {
    return await authorizedRequest(
      `${import.meta.env.VITE_API_BASE_URL}/cart/${product_id}/`,
      {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: access ? `Bearer ${access}` : "",
        },
        body: JSON.stringify({ quantity }),
      },
      dispatch,
    );
  },
);

const fetchWishlist = createAsyncThunk(
  "user/fetchWishlist",
  async ({ access }: { access?: string | null }, { dispatch }) => {
    return await authorizedRequest(
      `${import.meta.env.VITE_API_BASE_URL}/core/wishlist/`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": i18n.language,
          Authorization: access ? `Bearer ${access}` : "",
        },
      },
      dispatch,
    );
  },
);

const addToWishlist = createAsyncThunk(
  "user/addToWishlist",
  async (
    { access, product_id }: { access?: string | null; product_id: string },
    { dispatch },
  ) => {
    return await authorizedRequest(
      `${import.meta.env.VITE_API_BASE_URL}/core/wishlist/`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: access ? `Bearer ${access}` : "",
        },
        body: JSON.stringify({ product_id }),
      },
      dispatch,
    );
  },
);

const deleteFromWishlist = createAsyncThunk(
  "user/deleteFromWishlist",
  async (
    { access, product_id }: { access?: string | null; product_id: string },
    { dispatch },
  ) => {
    return await authorizedRequest(
      `${import.meta.env.VITE_API_BASE_URL}/core/wishlist/${product_id}/`,
      {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: access ? `Bearer ${access}` : "",
        },
      },
      dispatch,
    );
  },
);

const initialState: IUser = {
  status: "idle",
  error: null,
  access: null,
  name: "",
  surname: "",
  email: "",
  phone: null,
  photo: "",
  cart: {
    cart_id: 0,
    items: [],
    quantity: 0,
    total_price: 0,
  },
  wishlist: {
    wishlist_id: 0,
    items: [],
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signOutUser: () => initialState,
  },
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
        state.status = "succeeded";
        state.name = action.payload.name;
        state.surname = action.payload.surname;
        state.email = action.payload.email;
        state.phone = action.payload.phone;
        state.photo = action.payload.photo;
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
        state.cart = action.payload;
        const sortedCart: ICartProduct[] = [...action.payload.items].sort(
          (a, b) => a.id - b.id,
        );

        const quantity = sortedCart.reduce(
          (sum, item) => sum + item.quantity,
          0,
        );

        state.status = "succeeded";
        state.cart.cart_id = action.payload.cart_id;
        state.cart.total_price = action.payload.total_price;
        state.cart.items = sortedCart;
        state.cart.quantity = quantity;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      })
      //----------Change Cart Quantity----------//
      .addCase(changeCartQuantity.pending, (state) => {
        state.status = "pending";
      })
      .addCase(changeCartQuantity.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(changeCartQuantity.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      })
      //----------Get User Wishlist----------//
      .addCase(fetchWishlist.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.wishlist = action.payload;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      })
      //----------Add To The Wishlist----------//
      .addCase(addToWishlist.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      })
      //----------Delete From Wishlist----------//
      .addCase(deleteFromWishlist.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteFromWishlist.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(deleteFromWishlist.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      });
  },
});
export const { signOutUser } = userSlice.actions;

export {
  userSlice,
  registerUser,
  loginUser,
  refreshToken,
  fetchUserInfo,
  fetchCart,
  addToCart,
  changeCartQuantity,
  fetchWishlist,
  addToWishlist,
  deleteFromWishlist,
};
