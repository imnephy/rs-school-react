function cov_12yglzssw3() {
  var path = "D:\\\u0423\u0447\u0435\u0431\u0430\\rs_school\\react\\rs-school-react\\src\\app\\services\\manga.ts";
  var hash = "990db87c3b332f6fe87d9b5a83073498eb05e51f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "D:\\\u0423\u0447\u0435\u0431\u0430\\rs_school\\react\\rs-school-react\\src\\app\\services\\manga.ts",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 19
        },
        end: {
          line: 12,
          column: 2
        }
      },
      "1": {
        start: {
          line: 7,
          column: 27
        },
        end: {
          line: 11,
          column: 3
        }
      },
      "2": {
        start: {
          line: 9,
          column: 43
        },
        end: {
          line: 9,
          column: 87
        }
      },
      "3": {
        start: {
          line: 14,
          column: 37
        },
        end: {
          line: 14,
          column: 40
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 13
          },
          end: {
            line: 7,
            column: 14
          }
        },
        loc: {
          start: {
            line: 7,
            column: 27
          },
          end: {
            line: 11,
            column: 3
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 9,
            column: 13
          },
          end: {
            line: 9,
            column: 14
          }
        },
        loc: {
          start: {
            line: 9,
            column: 43
          },
          end: {
            line: 9,
            column: 87
          }
        },
        line: 9
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 9,
            column: 16
          },
          end: {
            line: 9,
            column: 26
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 9,
            column: 24
          },
          end: {
            line: 9,
            column: 26
          }
        }],
        line: 9
      },
      "1": {
        loc: {
          start: {
            line: 9,
            column: 28
          },
          end: {
            line: 9,
            column: 36
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 9,
            column: 35
          },
          end: {
            line: 9,
            column: 36
          }
        }],
        line: 9
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0],
      "1": [0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "990db87c3b332f6fe87d9b5a83073498eb05e51f"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_12yglzssw3 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_12yglzssw3();
import 'whatwg-fetch';
import { MangaSearchResult } from '@/API/ProductService';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const api = (cov_12yglzssw3().s[0]++, createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.jikan.moe/v4/manga'
  }),
  endpoints: builder => {
    cov_12yglzssw3().f[0]++;
    cov_12yglzssw3().s[1]++;
    return {
      listManga: builder.query<MangaSearchResult, {
        query: string;
        page: number;
      }>({
        query: ({
          query = (cov_12yglzssw3().b[0][0]++, ''),
          page = (cov_12yglzssw3().b[1][0]++, 1)
        }) => {
          cov_12yglzssw3().f[1]++;
          cov_12yglzssw3().s[2]++;
          return `?q=${query}&page=${page}&limit=20&sfw=true`;
        }
      })
    };
  }
}));
export const {
  useListMangaQuery
} = (cov_12yglzssw3().s[3]++, api);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMTJ5Z2x6c3N3MyIsImFjdHVhbENvdmVyYWdlIiwiTWFuZ2FTZWFyY2hSZXN1bHQiLCJjcmVhdGVBcGkiLCJmZXRjaEJhc2VRdWVyeSIsImFwaSIsInMiLCJiYXNlUXVlcnkiLCJiYXNlVXJsIiwiZW5kcG9pbnRzIiwiYnVpbGRlciIsImYiLCJsaXN0TWFuZ2EiLCJxdWVyeSIsInBhZ2UiLCJiIiwidXNlTGlzdE1hbmdhUXVlcnkiXSwic291cmNlcyI6WyJtYW5nYS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3doYXR3Zy1mZXRjaCc7XHJcbmltcG9ydCB7IE1hbmdhU2VhcmNoUmVzdWx0IH0gZnJvbSAnQC9BUEkvUHJvZHVjdFNlcnZpY2UnO1xyXG5pbXBvcnQgeyBjcmVhdGVBcGksIGZldGNoQmFzZVF1ZXJ5IH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdC9xdWVyeS9yZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgYXBpID0gY3JlYXRlQXBpKHtcclxuICBiYXNlUXVlcnk6IGZldGNoQmFzZVF1ZXJ5KHsgYmFzZVVybDogJ2h0dHBzOi8vYXBpLmppa2FuLm1vZS92NC9tYW5nYScgfSksXHJcbiAgZW5kcG9pbnRzOiAoYnVpbGRlcikgPT4gKHtcclxuICAgIGxpc3RNYW5nYTogYnVpbGRlci5xdWVyeTxNYW5nYVNlYXJjaFJlc3VsdCwgeyBxdWVyeTogc3RyaW5nOyBwYWdlOiBudW1iZXIgfT4oe1xyXG4gICAgICBxdWVyeTogKHsgcXVlcnkgPSAnJywgcGFnZSA9IDEgfSkgPT4gYD9xPSR7cXVlcnl9JnBhZ2U9JHtwYWdlfSZsaW1pdD0yMCZzZnc9dHJ1ZWAsXHJcbiAgICB9KSxcclxuICB9KSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyB1c2VMaXN0TWFuZ2FRdWVyeSB9ID0gYXBpO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxjQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxjQUFBO0FBZlosT0FBTyxjQUFjO0FBQ3JCLFNBQVNFLGlCQUFpQixRQUFRLHNCQUFzQjtBQUN4RCxTQUFTQyxTQUFTLEVBQUVDLGNBQWMsUUFBUSw4QkFBOEI7QUFFeEUsT0FBTyxNQUFNQyxHQUFHLElBQUFMLGNBQUEsR0FBQU0sQ0FBQSxPQUFHSCxTQUFTLENBQUM7RUFDM0JJLFNBQVMsRUFBRUgsY0FBYyxDQUFDO0lBQUVJLE9BQU8sRUFBRTtFQUFpQyxDQUFDLENBQUM7RUFDeEVDLFNBQVMsRUFBR0MsT0FBTyxJQUFNO0lBQUFWLGNBQUEsR0FBQVcsQ0FBQTtJQUFBWCxjQUFBLEdBQUFNLENBQUE7SUFBQTtNQUN2Qk0sU0FBUyxFQUFFRixPQUFPLENBQUNHLEtBQUssQ0FBQ1gsaUJBQWlCLEVBQUU7UUFBRVcsS0FBSyxFQUFFLE1BQU07UUFBRUMsSUFBSSxFQUFFLE1BQU07TUFBQyxDQUFDLENBQUMsQ0FBQztRQUMzRUQsS0FBSyxFQUFFQSxDQUFDO1VBQUVBLEtBQUssSUFBQWIsY0FBQSxHQUFBZSxDQUFBLFVBQUcsRUFBRTtVQUFFRCxJQUFJLElBQUFkLGNBQUEsR0FBQWUsQ0FBQSxVQUFHLENBQUM7UUFBQyxDQUFDLEtBQUs7VUFBQWYsY0FBQSxHQUFBVyxDQUFBO1VBQUFYLGNBQUEsR0FBQU0sQ0FBQTtVQUFBLE9BQUMsTUFBS08sS0FBTSxTQUFRQyxJQUFLLG9CQUFtQjtRQUFEO01BQ2xGLENBQUM7SUFDSCxDQUFDO0VBQUQ7QUFDRixDQUFDLENBQUM7QUFFRixPQUFPLE1BQU07RUFBRUU7QUFBa0IsQ0FBQyxJQUFBaEIsY0FBQSxHQUFBTSxDQUFBLE9BQUdELEdBQUcifQ==