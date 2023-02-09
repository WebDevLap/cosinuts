import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CategoryItem = {
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
  categoryItems: CategoryItem[];
  homeSearch: string;
  cardsIsLoading: boolean;
}

const initialState: HomeSliceState = {
  activeCategory: 0,
  categoryItems: [],
  homeSearch: '',
  cardsIsLoading: false,
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<number>) => {
      state.activeCategory = action.payload;
    },
    setCategoryItems: (state, action: PayloadAction<CategoryItem[]>) => {
      state.categoryItems = action.payload;
    },
    setHomeSearch: (state, action: PayloadAction<string>) => {
      state.homeSearch = action.payload;
    },
    setCardsIsLoading: (state, action: PayloadAction<boolean>) => {
      state.cardsIsLoading = action.payload;
    },
  }
})

export const { setActiveCategory, setCategoryItems, setHomeSearch, setCardsIsLoading } = homeSlice.actions;
export default homeSlice.reducer;