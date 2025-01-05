import { createSlice } from '@reduxjs/toolkit';
import i18n from '../../i18n';
import { fetchCatalogData } from '../catalog/catalogSlice';
import { fetchSliderData } from '../slider/sliderSlice';
import { fetchTopSalesData } from '../topSales/topSales';

const initialLanguage = localStorage.getItem('language') || 'en';

const languageSlice = createSlice({
  name: 'language',
  initialState: { value: initialLanguage },
  reducers: {
    setLanguage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export const toggleLanguage = () => async (dispatch, getState) => {
  const currentLang = getState().language.value;
  const newLang = currentLang === 'en' ? 'uk' : 'en';
  localStorage.setItem('language', newLang);
  i18n.changeLanguage(newLang);

  dispatch(setLanguage(newLang));
  dispatch(fetchCatalogData());
  dispatch(fetchSliderData());
  dispatch(fetchTopSalesData());
};

export default languageSlice.reducer;
