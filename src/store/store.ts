import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import headerSlice from './slices/headerSlice';
import homeSlice from './slices/homeSlice';

export const store = configureStore({
  reducer: {
    header: headerSlice,
    home: homeSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;