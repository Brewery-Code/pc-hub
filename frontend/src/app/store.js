import { configureStore } from '@reduxjs/toolkit';
import languageReducer from '../features/language/languageSlice';
import sliderReducer from '../features/slider/sliderSlice';
import catalogReducer from '../features/catalog/catalogSlice';
import topSalesReducer from '../features/topSales/topSales';
export const store = configureStore({
  reducer: {
    language: languageReducer,
    slider: sliderReducer,
    catalog: catalogReducer,
    topSales: topSalesReducer,
  },
});

export default store;