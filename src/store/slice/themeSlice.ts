import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITheme } from '../../types/interface';

const cherryBlossomTheme: ITheme = {
  name: 'cherryBlossom',
  background: 'linear-gradient(to right, #ffd1dc, #fff0f5)',
  primaryColor: '#ff69b4',
  secondaryColor: '#ffb6c1',
  textColor: '#4a4a4a',
  accentColor: '#ff1493'
};

const rainySoulTheme: ITheme = {
  name: 'rainySoul',
  background: 'linear-gradient(to right, #2c3e50, #3498db)',
  primaryColor: '#34495e',
  secondaryColor: '#95a5a6',
  textColor: '#ecf0f1',
  accentColor: '#3498db'
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