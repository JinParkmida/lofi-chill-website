import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMoodEntry } from '../../types/interface';

const savedEntries = localStorage.getItem('mood-entries');

const initialState = {
  entries: savedEntries ? JSON.parse(savedEntries) : [],
};

const moodJournalSlice = createSlice({
  name: 'moodJournal',
  initialState,
  reducers: {
    addEntry: (state, action: PayloadAction<IMoodEntry>) => {
      state.entries.push(action.payload);
      localStorage.setItem('mood-entries', JSON.stringify(state.entries));
    },
    updateEntry: (state, action: PayloadAction<IMoodEntry>) => {
      const index = state.entries.findIndex(entry => entry.id === action.payload.id);
      if (index !== -1) {
        state.entries[index] = action.payload;
        localStorage.setItem('mood-entries', JSON.stringify(state.entries));
      }
    },
    deleteEntry: (state, action: PayloadAction<string>) => {
      state.entries = state.entries.filter(entry => entry.id !== action.payload);
      localStorage.setItem('mood-entries', JSON.stringify(state.entries));
    }
  }
});

export const { addEntry, updateEntry, deleteEntry } = moodJournalSlice.actions;
export default moodJournalSlice.reducer;