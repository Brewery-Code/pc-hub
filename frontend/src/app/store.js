import { configureStore } from '@reduxjs/toolkit';
import languageReducer from '../features/language/languageSlice';
import sliderReducer from '../features/slider/sliderSlice';

export const store = configureStore({
  reducer: {
    language: languageReducer,
    slider: sliderReducer,
  },
});

export default store;