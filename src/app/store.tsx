import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search/searchSlice';
import formCardReducer from '@/features/form/formCardSlice';
import { api } from './services/manga';

const rootReducer = combineReducers({
  search: searchReducer,
  form: formCardReducer,
  api: api.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export default store;
export type IStoreState = ReturnType<typeof rootReducer>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
