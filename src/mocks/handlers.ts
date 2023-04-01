/* c8 ignore start */

import { rest } from 'msw';
import { mockMangaData } from './mockMangaData';

export const handlers = [
  rest.get('https://api.jikan.moe/v4/manga', (req, res, ctx) => {
    return res(ctx.json(mockMangaData));
  }),
];
/* c8 ignore stop */
