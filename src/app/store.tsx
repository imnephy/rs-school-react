import { configureStore } from '@reduxjs/toolkit';
import searchReducer, { ISearchState } from '../features/search/searchSlice';
import formCardReducer from '@/features/form/formCardSlice';
import { IProductCard } from '@/pages/Forms';

export interface IStoreState {
  form: IProductCard[];
  search: ISearchState;
}

const store = configureStore({
  reducer: {
    search: searchReducer,
    form: formCardReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
