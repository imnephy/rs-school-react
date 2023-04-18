import { Provider } from 'react-redux';
import { RenderOptions, render } from '@testing-library/react';
import { IStoreState, RootState } from '@/app/store';
import { PreloadedState, Store, combineReducers, configureStore } from '@reduxjs/toolkit';
import { PropsWithChildren } from 'react';
import { api } from '@/app/services/manga';
import searchReducer from '../features/search/searchSlice';
import formCardReducer from '@/features/form/formCardSlice';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

function renderWithRedux(ui: React.ReactElement, store: Store<IStoreState>) {
  return render(<Provider store={store}>{ui}</Provider>);
}

export default renderWithRedux;

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: ToolkitStore<IStoreState>;
}

const rootReducer = combineReducers({
  search: searchReducer,
  form: formCardReducer,
  api: api.reducer,
});

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
