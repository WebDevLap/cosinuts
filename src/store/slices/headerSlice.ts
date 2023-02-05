import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HeaderSliceState {
  navIsActive: boolean;
}

const initialState: HeaderSliceState = {
  navIsActive: false,
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setNavIsActive: (state, action: PayloadAction<boolean>) => {
      state.navIsActive = action.payload;
    },
  },
});

export const { setNavIsActive } = headerSlice.actions;
export default headerSlice.reducer;
