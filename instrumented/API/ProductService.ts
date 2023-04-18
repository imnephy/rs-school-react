function cov_20tdfefc5o() {
  var path = "D:\\\u0423\u0447\u0435\u0431\u0430\\rs_school\\react\\rs-school-react\\src\\API\\ProductService.ts";
  var hash = "b5de0f40b465e85babb8a5e4c315287ef8c26d5b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "D:\\\u0423\u0447\u0435\u0431\u0430\\rs_school\\react\\rs-school-react\\src\\API\\ProductService.ts",
    statementMap: {
      "0": {
        start: {
          line: 47,
          column: 30
        },
        end: {
          line: 61,
          column: 1
        }
      },
      "1": {
        start: {
          line: 48,
          column: 19
        },
        end: {
          line: 58,
          column: 4
        }
      },
      "2": {
        start: {
          line: 60,
          column: 2
        },
        end: {
          line: 60,
          column: 35
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 47,
            column: 30
          },
          end: {
            line: 47,
            column: 31
          }
        },
        loc: {
          start: {
            line: 47,
            column: 93
          },
          end: {
            line: 61,
            column: 1
          }
        },
        line: 47
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 47,
            column: 52
          },
          end: {
            line: 47,
            column: 60
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 47,
            column: 59
          },
          end: {
            line: 47,
            column: 60
          }
        }],
        line: 47
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b5de0f40b465e85babb8a5e4c315287ef8c26d5b"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_20tdfefc5o = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_20tdfefc5o();
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
cov_20tdfefc5o().s[0]++;
export const getMangaSearch = async (query: string, page = (cov_20tdfefc5o().b[0][0]++, 1)): Promise<MangaSearchResult> => {
  cov_20tdfefc5o().f[0]++;
  const {
    data
  } = (cov_20tdfefc5o().s[1]++, await axios.get(`https://api.jikan.moe/v4/manga`, {
    headers: {
      'Content-Type': 'application/json'
    },
    params: {
      q: query,
      limit: 20,
      sfw: true,
      page
    }
  }));
  cov_20tdfefc5o().s[2]++;
  return (data as MangaSearchResult);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMjB0ZGZlZmM1byIsImFjdHVhbENvdmVyYWdlIiwiYXhpb3MiLCJNYW5nYVNlYXJjaFJlc3VsdCIsImRhdGEiLCJNYW5nYVNlYXJjaERhdGEiLCJwYWdpbmF0aW9uIiwibGFzdF92aXNpYmxlX3BhZ2UiLCJoYXNfbmV4dF9wYWdlIiwiY3VycmVudF9wYWdlIiwiaXRlbXMiLCJjb3VudCIsInBlcl9wYWdlIiwidG90YWwiLCJtYWxfaWQiLCJ1cmwiLCJ0aXRsZSIsImltYWdlcyIsIkltYWdlcyIsInN5bm9wc2lzIiwidHlwZSIsIm1lbWJlcnMiLCJnZW5yZXMiLCJHZW5yZXMiLCJhdXRob3JzIiwiQXV0aG9ycyIsInRpdGxlX2phcGFuZXNlIiwic2NvcmUiLCJuYW1lIiwianBnIiwiaW1hZ2VfdXJsIiwicyIsImdldE1hbmdhU2VhcmNoIiwicXVlcnkiLCJwYWdlIiwiYiIsIlByb21pc2UiLCJmIiwiZ2V0IiwiaGVhZGVycyIsInBhcmFtcyIsInEiLCJsaW1pdCIsInNmdyJdLCJzb3VyY2VzIjpbIlByb2R1Y3RTZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1hbmdhU2VhcmNoUmVzdWx0IHtcclxuICBkYXRhOiBNYW5nYVNlYXJjaERhdGFbXTtcclxuICBwYWdpbmF0aW9uOiB7XHJcbiAgICBsYXN0X3Zpc2libGVfcGFnZTogbnVtYmVyO1xyXG4gICAgaGFzX25leHRfcGFnZTogYm9vbGVhbjtcclxuICAgIGN1cnJlbnRfcGFnZTogbnVtYmVyO1xyXG4gICAgaXRlbXM6IHtcclxuICAgICAgY291bnQ6IG51bWJlcjtcclxuICAgICAgcGVyX3BhZ2U6IG51bWJlcjtcclxuICAgICAgdG90YWw6IG51bWJlcjtcclxuICAgIH07XHJcbiAgfTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE1hbmdhU2VhcmNoRGF0YSB7XHJcbiAgbWFsX2lkOiBudW1iZXI7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBpbWFnZXM6IEltYWdlcztcclxuICBzeW5vcHNpczogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBtZW1iZXJzOiBudW1iZXI7XHJcbiAgZ2VucmVzOiBHZW5yZXNbXTtcclxuICBhdXRob3JzOiBBdXRob3JzW107XHJcbiAgdGl0bGVfamFwYW5lc2U6IHN0cmluZztcclxuICBzY29yZTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCB0eXBlIEF1dGhvcnMgPSB7XHJcbiAgbWFsX2lkOiBudW1iZXI7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHVybDogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgR2VucmVzID0ge1xyXG4gIG1hbF9pZDogbnVtYmVyO1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBJbWFnZXMgPSB7XHJcbiAganBnOiB7XHJcbiAgICBpbWFnZV91cmw6IHN0cmluZztcclxuICB9O1xyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0TWFuZ2FTZWFyY2ggPSBhc3luYyAocXVlcnk6IHN0cmluZywgcGFnZSA9IDEpOiBQcm9taXNlPE1hbmdhU2VhcmNoUmVzdWx0PiA9PiB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLmppa2FuLm1vZS92NC9tYW5nYWAsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgcTogcXVlcnksXHJcbiAgICAgIGxpbWl0OiAyMCxcclxuICAgICAgc2Z3OiB0cnVlLFxyXG4gICAgICBwYWdlLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGRhdGEgYXMgTWFuZ2FTZWFy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