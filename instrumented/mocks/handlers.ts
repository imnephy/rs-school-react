function cov_20qk54u75x() {
  var path = "D:\\\u0423\u0447\u0435\u0431\u0430\\rs_school\\react\\rs-school-react\\src\\mocks\\handlers.ts";
  var hash = "ccadca2c1dccd7d3cab0e4fa2aaf7caed9c44c1c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "D:\\\u0423\u0447\u0435\u0431\u0430\\rs_school\\react\\rs-school-react\\src\\mocks\\handlers.ts",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 24
        },
        end: {
          line: 19,
          column: 1
        }
      },
      "1": {
        start: {
          line: 8,
          column: 19
        },
        end: {
          line: 8,
          column: 35
        }
      },
      "2": {
        start: {
          line: 9,
          column: 23
        },
        end: {
          line: 9,
          column: 55
        }
      },
      "3": {
        start: {
          line: 10,
          column: 24
        },
        end: {
          line: 10,
          column: 53
        }
      },
      "4": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 13,
          column: 5
        }
      },
      "5": {
        start: {
          line: 12,
          column: 6
        },
        end: {
          line: 12,
          column: 34
        }
      },
      "6": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 16,
          column: 5
        }
      },
      "7": {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 15,
          column: 34
        }
      },
      "8": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 35
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 45
          },
          end: {
            line: 7,
            column: 46
          }
        },
        loc: {
          start: {
            line: 7,
            column: 64
          },
          end: {
            line: 18,
            column: 3
          }
        },
        line: 7
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 13,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 13,
            column: 5
          }
        }, {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 13,
            column: 5
          }
        }],
        line: 11
      },
      "1": {
        loc: {
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        }, {
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        }],
        line: 14
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ccadca2c1dccd7d3cab0e4fa2aaf7caed9c44c1c"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_20qk54u75x = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_20qk54u75x();
/* c8 ignore start */

import { rest } from 'msw';
import { mockMangaData } from './mockMangaData';
export const handlers = (cov_20qk54u75x().s[0]++, [rest.get('https://api.jikan.moe/v4/manga', (req, res, ctx) => {
  cov_20qk54u75x().f[0]++;
  let response = (cov_20qk54u75x().s[1]++, mockMangaData[0]);
  const pageNumber = (cov_20qk54u75x().s[2]++, req.url.searchParams.get('page'));
  const querySearch = (cov_20qk54u75x().s[3]++, req.url.searchParams.get('q'));
  cov_20qk54u75x().s[4]++;
  if (pageNumber === '2') {
    cov_20qk54u75x().b[0][0]++;
    cov_20qk54u75x().s[5]++;
    response = mockMangaData[1];
  } else {
    cov_20qk54u75x().b[0][1]++;
  }
  cov_20qk54u75x().s[6]++;
  if (querySearch === 'chainsaw man') {
    cov_20qk54u75x().b[1][0]++;
    cov_20qk54u75x().s[7]++;
    response = mockMangaData[2];
  } else {
    cov_20qk54u75x().b[1][1]++;
  }
  cov_20qk54u75x().s[8]++;
  return res(ctx.json(response));
})]);
/* c8 ignore stop */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMjBxazU0dTc1eCIsImFjdHVhbENvdmVyYWdlIiwicmVzdCIsIm1vY2tNYW5nYURhdGEiLCJoYW5kbGVycyIsInMiLCJnZXQiLCJyZXEiLCJyZXMiLCJjdHgiLCJmIiwicmVzcG9uc2UiLCJwYWdlTnVtYmVyIiwidXJsIiwic2VhcmNoUGFyYW1zIiwicXVlcnlTZWFyY2giLCJiIiwianNvbiJdLCJzb3VyY2VzIjpbImhhbmRsZXJzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGM4IGlnbm9yZSBzdGFydCAqL1xyXG5cclxuaW1wb3J0IHsgcmVzdCB9IGZyb20gJ21zdyc7XHJcbmltcG9ydCB7IG1vY2tNYW5nYURhdGEgfSBmcm9tICcuL21vY2tNYW5nYURhdGEnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZXJzID0gW1xyXG4gIHJlc3QuZ2V0KCdodHRwczovL2FwaS5qaWthbi5tb2UvdjQvbWFuZ2EnLCAocmVxLCByZXMsIGN0eCkgPT4ge1xyXG4gICAgbGV0IHJlc3BvbnNlID0gbW9ja01hbmdhRGF0YVswXTtcclxuICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSByZXEudXJsLnNlYXJjaFBhcmFtcy5nZXQoJ3BhZ2UnKTtcclxuICAgIGNvbnN0IHF1ZXJ5U2VhcmNoID0gcmVxLnVybC5zZWFyY2hQYXJhbXMuZ2V0KCdxJyk7XHJcbiAgICBpZiAocGFnZU51bWJlciA9PT0gJzInKSB7XHJcbiAgICAgIHJlc3BvbnNlID0gbW9ja01hbmdhRGF0YVsxXTtcclxuICAgIH1cclxuICAgIGlmIChxdWVyeVNlYXJjaCA9PT0gJ2NoYWluc2F3IG1hbicpIHtcclxuICAgICAgcmVzcG9uc2UgPSBtb2NrTWFuZ2FEYXRhWzJdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcyhjdHguanNvbihyZXNwb25zZSkpO1xyXG4gIH0pLFxyXG5dO1xyXG4vKiBjOCBpZ25vcmUgc3RvcCAqL1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxjQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxjQUFBO0FBZlo7O0FBRUEsU0FBU0UsSUFBSSxRQUFRLEtBQUs7QUFDMUIsU0FBU0MsYUFBYSxRQUFRLGlCQUFpQjtBQUUvQyxPQUFPLE1BQU1DLFFBQVEsSUFBQUosY0FBQSxHQUFBSyxDQUFBLE9BQUcsQ0FDdEJILElBQUksQ0FBQ0ksR0FBRyxDQUFDLGdDQUFnQyxFQUFFLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEtBQUs7RUFBQVQsY0FBQSxHQUFBVSxDQUFBO0VBQzVELElBQUlDLFFBQVEsSUFBQVgsY0FBQSxHQUFBSyxDQUFBLE9BQUdGLGFBQWEsQ0FBQyxDQUFDLENBQUM7RUFDL0IsTUFBTVMsVUFBVSxJQUFBWixjQUFBLEdBQUFLLENBQUEsT0FBR0UsR0FBRyxDQUFDTSxHQUFHLENBQUNDLFlBQVksQ0FBQ1IsR0FBRyxDQUFDLE1BQU0sQ0FBQztFQUNuRCxNQUFNUyxXQUFXLElBQUFmLGNBQUEsR0FBQUssQ0FBQSxPQUFHRSxHQUFHLENBQUNNLEdBQUcsQ0FBQ0MsWUFBWSxDQUFDUixHQUFHLENBQUMsR0FBRyxDQUFDO0VBQUNOLGNBQUEsR0FBQUssQ0FBQTtFQUNsRCxJQUFJTyxVQUFVLEtBQUssR0FBRyxFQUFFO0lBQUFaLGNBQUEsR0FBQWdCLENBQUE7SUFBQWhCLGNBQUEsR0FBQUssQ0FBQTtJQUN0Qk0sUUFBUSxHQUFHUixhQUFhLENBQUMsQ0FBQyxDQUFDO0VBQzdCLENBQUM7SUFBQUgsY0FBQSxHQUFBZ0IsQ0FBQTtFQUFBO0VBQUFoQixjQUFBLEdBQUFLLENBQUE7RUFDRCxJQUFJVSxXQUFXLEtBQUssY0FBYyxFQUFFO0lBQUFmLGNBQUEsR0FBQWdCLENBQUE7SUFBQWhCLGNBQUEsR0FBQUssQ0FBQTtJQUNsQ00sUUFBUSxHQUFHUixhQUFhLENBQUMsQ0FBQyxDQUFDO0VBQzdCLENBQUM7SUFBQUgsY0FBQSxHQUFBZ0IsQ0FBQTtFQUFBO0VBQUFoQixjQUFBLEdBQUFLLENBQUE7RUFDRCxPQUFPRyxHQUFHLENBQUNDLEdBQUcsQ0FBQ1EsSUFBSSxDQUFDTixRQUFRLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUMsQ0FDSDtBQUNEIn0=