import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type categoryItem = {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  priceWithDiscount: number;
  imageUrl: string;
  category: number;
}

interface HomeSliceState {
  activeCategory: number;
  categoryItems: categoryItem[];
}

const initialState: HomeSliceState = {
  activeCategory: 0,
  categoryItems: [],
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<number>) => {
      state.activeCategory = action.payload;
    },
    setCategoryItems: (state, action: PayloadAction<categoryItem[]>) => {
      state.categoryItems = action.payload;
    }
  }
})

export const { setActiveCategory, setCategoryItems } = homeSlice.actions;
export default homeSlice.reducer;