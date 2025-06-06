import todoListReducer from './slice/todoListSlice';
import rainReducer from './slice/rainSlice';
import moodReducer from './slice/moodSlice';
import modeReducer from './slice/modeSlice';
import changgeVolumeReducer from './slice/changeVolumeSlice';
import themeReducer from './slice/themeSlice';
import skincareReducer from './slice/skincareSlice';
import moodJournalReducer from './slice/moodJournalSlice';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export type RootState = ReturnType<typeof rootReducer>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const rootReducer = combineReducers({
    todoList: todoListReducer,
    rain: rainReducer,
    mood: moodReducer,
    mode: modeReducer,
    volume: changgeVolumeReducer,
    theme: themeReducer,
    skincare: skincareReducer,
    moodJournal: moodJournalReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export default store;