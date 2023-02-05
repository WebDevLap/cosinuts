import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface HomeSliceState {
  activeCategory: number;
}

const initialState: HomeSliceState = {
  activeCategory: 0,
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<number>) => {
      state.activeCategory = action.payload;
    }
  }
})

export const { setActiveCategory } = homeSlice.actions;
export default homeSlice.reducer;