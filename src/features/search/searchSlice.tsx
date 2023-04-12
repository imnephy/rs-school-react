import { RootState } from '@/app/store';
import { createSlice } from '@reduxjs/toolkit';

export interface ISearchState {
  value: string;
}

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: '',
  },
  reducers: {
    setSearchValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;
export const selectSearch = (state: RootState) => state.search.value;

export default searchSlice.reducer;
