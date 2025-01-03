import { createSlice } from '@reduxjs/toolkit';
import i18n from '../../i18n';

const initialLanguage = localStorage.getItem('language') || 'en';

const languageSlice = createSlice({
  name: 'language',
  initialState: { value: initialLanguage },
  reducers: {
    toggleLanguage: (state) => {
      const newLang = state.value === 'en' ? 'uk' : 'en';
      state.value = newLang;
      localStorage.setItem('language', newLang);
      i18n.changeLanguage(newLang);
      location.reload();
    },
  },
});

export const { toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
