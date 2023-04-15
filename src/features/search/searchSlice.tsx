import { RootState } from '@/app/store';
import { createSlice } from '@reduxjs/toolkit';

export interface ISearchState {
  value: string;
  page: number;
}

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: '',
    page: 1,
  },
  reducers: {
    setSearchValue: (state, action) => {
      state.value = action.payload;
    },
    setSearchPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setSearchValue, setSearchPage } = searchSlice.actions;
export const selectSearch = (state: RootState) => state.search.value;
export const selectPage = (state: RootState) => state.search.page;

export default searchSlice.reducer;
