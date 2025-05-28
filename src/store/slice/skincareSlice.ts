import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISkinCareRoutine } from '../../types/interface';

const savedRoutines = localStorage.getItem('skincare-routines');

const initialState = {
  routines: savedRoutines ? JSON.parse(savedRoutines) : [],
};

const skincareSlice = createSlice({
  name: 'skincare',
  initialState,
  reducers: {
    addRoutine: (state, action: PayloadAction<ISkinCareRoutine>) => {
      state.routines.push(action.payload);
      localStorage.setItem('skincare-routines', JSON.stringify(state.routines));
    },
    updateRoutine: (state, action: PayloadAction<ISkinCareRoutine>) => {
      const index = state.routines.findIndex((routine: ISkinCareRoutine) => routine.id === action.payload.id);
      if (index !== -1) {
        state.routines[index] = action.payload;
        localStorage.setItem('skincare-routines', JSON.stringify(state.routines));
      }
    },
    deleteRoutine: (state, action: PayloadAction<string>) => {
      state.routines = state.routines.filter((routine: ISkinCareRoutine) => routine.id !== action.payload);
      localStorage.setItem('skincare-routines', JSON.stringify(state.routines));
    }
  }
});

export const { addRoutine, updateRoutine, deleteRoutine } = skincareSlice.actions;
export default skincareSlice.reducer;