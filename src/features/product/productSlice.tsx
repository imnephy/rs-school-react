import { RootState } from '@/app/store';
import { IProductCard } from '@/pages/Forms';
import { createSlice } from '@reduxjs/toolkit';

export interface IFormCardState {
  value: IProductCard[];
}

export const formCardSlice = createSlice({
  name: 'form',
  initialState: {
    value: [] as IProductCard[],
  },
  reducers: {
    setFormCardsValue: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const { setFormCardsValue } = formCardSlice.actions;
export const selectFormCards = (state: RootState) => state.form.value;

export default formCardSlice.reducer;
