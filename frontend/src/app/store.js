import { configureStore } from '@reduxjs/toolkit';
import languageReducer from '../features/language/languageSlice';
import sliderReducer from '../features/slider/sliderSlice';
import catalogReducer from '../features/catalog/catalogSlice';

export const store = configureStore({
  reducer: {
    language: languageReducer,
    slider: sliderReducer,
    catalog: catalogReducer,
  },
});

export default store;