import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { sliderSlice } from "./slider/slider.slice";
import { topSalesSlice } from "./topSales/topSales.slice";
import { catalogSlice } from "./catalog/catalog.slider";
import { productListSlice } from "./productList/productList.slice";

const store = configureStore({
  reducer: {
    slider: sliderSlice.reducer,
    topSales: topSalesSlice.reducer,
    catalog: catalogSlice.reducer,
    productList: productListSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
const useAppDispatch: () => AppDispatch = useDispatch;

export { store, type RootState, useAppDispatch };
