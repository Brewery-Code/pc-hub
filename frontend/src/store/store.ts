import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { sliderSlice } from "./slider/slider.slice";
import { topSalesSlice } from "./topSales/topSales.slice";
import { catalogSlice } from "./catalog/catalog.slider";

const store = configureStore({
  reducer: {
    slider: sliderSlice.reducer,
    topSales: topSalesSlice.reducer,
    catalog: catalogSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
const useAppDispatch: () => AppDispatch = useDispatch;

export { store, type RootState, useAppDispatch };
