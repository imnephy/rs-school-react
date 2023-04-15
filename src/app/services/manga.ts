import { MangaSearchResult } from '@/API/ProductService';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.jikan.moe/v4/manga' }),
  endpoints: (builder) => ({
    listManga: builder.query<MangaSearchResult, { query: string; page: number }>({
      query: ({ query = '', page = 1 }) => `?q=${query}&page=${page}&limit=20&sfw=true`,
    }),
  }),
});

export const { useListMangaQuery } = api;
