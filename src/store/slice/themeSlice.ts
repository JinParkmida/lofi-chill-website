import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITheme } from '../../types/interface';

const cherryBlossomTheme: ITheme = {
  name: 'cherryBlossom',
  background: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%)',
  primaryColor: '#e91e63',
  secondaryColor: '#f06292',
  textColor: '#2c3e50',
  accentColor: '#ad1457'
};

const rainySoulTheme: ITheme = {
  name: 'rainySoul',
  background: 'linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)',
  primaryColor: '#546e7a',
  secondaryColor: '#78909c',
  textColor: '#263238',
  accentColor: '#37474f'
};

const initialState = {
  currentTheme: cherryBlossomTheme,
  availableThemes: [cherryBlossomTheme, rainySoulTheme]
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ITheme>) => {
      state.currentTheme = action.payload;
    }
  }
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;