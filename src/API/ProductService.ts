import axios from 'axios';

export interface MangaSearchResult {
  data: MangaSearchData[];
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
    current_page: number;
    items: {
      count: number;
      per_page: number;
      total: number;
    };
  };
}
export interface MangaSearchData {
  mal_id: number;
  url: string;
  title: string;
  images: Images;
  synopsis: string;
  type: string;
  members: number;
  genres: Genres[];
  authors: Authors[];
  title_japanese: string;
  score: number;
}
export type Authors = {
  mal_id: number;
  name: string;
  url: string;
};

export type Genres = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type Images = {
  jpg: {
    image_url: string;
  };
};
export const getMangaSearch = async (query: string, page = 1): Promise<MangaSearchResult> => {
  const { data } = await axios.get(`https://api.jikan.moe/v4/manga`, {
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      q: query,
      limit: 20,
      sfw: true,
      page,
    },
  });

  return data as MangaSearchResult;
};
