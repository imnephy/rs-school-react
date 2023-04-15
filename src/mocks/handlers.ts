/* c8 ignore start */

import { rest } from 'msw';
import { mockMangaData } from './mockMangaData';

export const handlers = [
  rest.get('https://api.jikan.moe/v4/manga', (req, res, ctx) => {
    let response = mockMangaData[0];
    const pageNumber = req.url.searchParams.get('page');
    const querySearch = req.url.searchParams.get('q');
    if (pageNumber === '2') {
      response = mockMangaData[1];
    }
    if (querySearch === 'chainsaw man') {
      response = mockMangaData[2];
    }
    return res(ctx.json(response));
  }),
];
/* c8 ignore stop */
