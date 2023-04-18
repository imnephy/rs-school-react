function cov_1d389leakn() {
  var path = "D:\\\u0423\u0447\u0435\u0431\u0430\\rs_school\\react\\rs-school-react\\src\\features\\search\\searchSlice.tsx";
  var hash = "cf488a5d9031610672099c5906ea584bed83b582";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "D:\\\u0423\u0447\u0435\u0431\u0430\\rs_school\\react\\rs-school-react\\src\\features\\search\\searchSlice.tsx",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 27
        },
        end: {
          line: 23,
          column: 2
        }
      },
      "1": {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 17,
          column: 35
        }
      },
      "2": {
        start: {
          line: 20,
          column: 6
        },
        end: {
          line: 20,
          column: 34
        }
      },
      "3": {
        start: {
          line: 25,
          column: 49
        },
        end: {
          line: 25,
          column: 68
        }
      },
      "4": {
        start: {
          line: 26,
          column: 28
        },
        end: {
          line: 26,
          column: 68
        }
      },
      "5": {
        start: {
          line: 26,
          column: 50
        },
        end: {
          line: 26,
          column: 68
        }
      },
      "6": {
        start: {
          line: 27,
          column: 26
        },
        end: {
          line: 27,
          column: 65
        }
      },
      "7": {
        start: {
          line: 27,
          column: 48
        },
        end: {
          line: 27,
          column: 65
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 16,
            column: 20
          },
          end: {
            line: 16,
            column: 21
          }
        },
        loc: {
          start: {
            line: 16,
            column: 39
          },
          end: {
            line: 18,
            column: 5
          }
        },
        line: 16
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 19,
            column: 19
          },
          end: {
            line: 19,
            column: 20
          }
        },
        loc: {
          start: {
            line: 19,
            column: 38
          },
          end: {
            line: 21,
            column: 5
          }
        },
        line: 19
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 26,
            column: 28
          },
          end: {
            line: 26,
            column: 29
          }
        },
        loc: {
          start: {
            line: 26,
            column: 50
          },
          end: {
            line: 26,
            column: 68
          }
        },
        line: 26
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 27,
            column: 26
          },
          end: {
            line: 27,
            column: 27
          }
        },
        loc: {
          start: {
            line: 27,
            column: 48
          },
          end: {
            line: 27,
            column: 65
          }
        },
        line: 27
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "cf488a5d9031610672099c5906ea584bed83b582"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1d389leakn = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1d389leakn();
import { RootState } from '@/app/store';
import { createSlice } from '@reduxjs/toolkit';
export interface ISearchState {
  value: string;
  page: number;
}
export const searchSlice = (cov_1d389leakn().s[0]++, createSlice({
  name: 'search',
  initialState: {
    value: '',
    page: 1
  },
  reducers: {
    setSearchValue: (state, action) => {
      cov_1d389leakn().f[0]++;
      cov_1d389leakn().s[1]++;
      state.value = action.payload;
    },
    setSearchPage: (state, action) => {
      cov_1d389leakn().f[1]++;
      cov_1d389leakn().s[2]++;
      state.page = action.payload;
    }
  }
}));
export const {
  setSearchValue,
  setSearchPage
} = (cov_1d389leakn().s[3]++, searchSlice.actions);
cov_1d389leakn().s[4]++;
export const selectSearch = (state: RootState) => {
  cov_1d389leakn().f[2]++;
  cov_1d389leakn().s[5]++;
  return state.search.value;
};
cov_1d389leakn().s[6]++;
export const selectPage = (state: RootState) => {
  cov_1d389leakn().f[3]++;
  cov_1d389leakn().s[7]++;
  return state.search.page;
};
export default searchSlice.reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMWQzODlsZWFrbiIsImFjdHVhbENvdmVyYWdlIiwiUm9vdFN0YXRlIiwiY3JlYXRlU2xpY2UiLCJJU2VhcmNoU3RhdGUiLCJ2YWx1ZSIsInBhZ2UiLCJzZWFyY2hTbGljZSIsInMiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwicmVkdWNlcnMiLCJzZXRTZWFyY2hWYWx1ZSIsInN0YXRlIiwiYWN0aW9uIiwiZiIsInBheWxvYWQiLCJzZXRTZWFyY2hQYWdlIiwiYWN0aW9ucyIsInNlbGVjdFNlYXJjaCIsInNlYXJjaCIsInNlbGVjdFBhZ2UiLCJyZWR1Y2VyIl0sInNvdXJjZXMiOlsic2VhcmNoU2xpY2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJ0AvYXBwL3N0b3JlJztcclxuaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNlYXJjaFN0YXRlIHtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG4gIHBhZ2U6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlYXJjaFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdzZWFyY2gnLFxyXG4gIGluaXRpYWxTdGF0ZToge1xyXG4gICAgdmFsdWU6ICcnLFxyXG4gICAgcGFnZTogMSxcclxuICB9LFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBzZXRTZWFyY2hWYWx1ZTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudmFsdWUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgICBzZXRTZWFyY2hQYWdlOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5wYWdlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgc2V0U2VhcmNoVmFsdWUsIHNldFNlYXJjaFBhZ2UgfSA9IHNlYXJjaFNsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBjb25zdCBzZWxlY3RTZWFyY2ggPSAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuc2VhcmNoLnZhbHVlO1xyXG5leHBvcnQgY29uc3Qgc2VsZWN0UGFnZSA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5zZWFyY2gucGFnZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlYXJjaFNsaWNlLnJlZHVjZXI7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGNBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGNBQUE7QUFmWixTQUFTRSxTQUFTLFFBQVEsYUFBYTtBQUN2QyxTQUFTQyxXQUFXLFFBQVEsa0JBQWtCO0FBRTlDLE9BQU8sVUFBVUMsWUFBWSxDQUFDO0VBQzVCQyxLQUFLLEVBQUUsTUFBTTtFQUNiQyxJQUFJLEVBQUUsTUFBTTtBQUNkO0FBRUEsT0FBTyxNQUFNQyxXQUFXLElBQUFQLGNBQUEsR0FBQVEsQ0FBQSxPQUFHTCxXQUFXLENBQUM7RUFDckNNLElBQUksRUFBRSxRQUFRO0VBQ2RDLFlBQVksRUFBRTtJQUNaTCxLQUFLLEVBQUUsRUFBRTtJQUNUQyxJQUFJLEVBQUU7RUFDUixDQUFDO0VBQ0RLLFFBQVEsRUFBRTtJQUNSQyxjQUFjLEVBQUVBLENBQUNDLEtBQUssRUFBRUMsTUFBTSxLQUFLO01BQUFkLGNBQUEsR0FBQWUsQ0FBQTtNQUFBZixjQUFBLEdBQUFRLENBQUE7TUFDakNLLEtBQUssQ0FBQ1IsS0FBSyxHQUFHUyxNQUFNLENBQUNFLE9BQU87SUFDOUIsQ0FBQztJQUNEQyxhQUFhLEVBQUVBLENBQUNKLEtBQUssRUFBRUMsTUFBTSxLQUFLO01BQUFkLGNBQUEsR0FBQWUsQ0FBQTtNQUFBZixjQUFBLEdBQUFRLENBQUE7TUFDaENLLEtBQUssQ0FBQ1AsSUFBSSxHQUFHUSxNQUFNLENBQUNFLE9BQU87SUFDN0I7RUFDRjtBQUNGLENBQUMsQ0FBQztBQUVGLE9BQU8sTUFBTTtFQUFFSixjQUFjO0VBQUVLO0FBQWMsQ0FBQyxJQUFBakIsY0FBQSxHQUFBUSxDQUFBLE9BQUdELFdBQVcsQ0FBQ1csT0FBTztBQUFDbEIsY0FBQSxHQUFBUSxDQUFBO0FBQ3JFLE9BQU8sTUFBTVcsWUFBWSxHQUFHQSxDQUFDTixLQUFLLEVBQUVYLFNBQVMsS0FBSztFQUFBRixjQUFBLEdBQUFlLENBQUE7RUFBQWYsY0FBQSxHQUFBUSxDQUFBO0VBQUEsT0FBQUssS0FBSyxDQUFDTyxNQUFNLENBQUNmLEtBQUs7QUFBRCxDQUFDO0FBQUNMLGNBQUEsR0FBQVEsQ0FBQTtBQUNyRSxPQUFPLE1BQU1hLFVBQVUsR0FBR0EsQ0FBQ1IsS0FBSyxFQUFFWCxTQUFTLEtBQUs7RUFBQUYsY0FBQSxHQUFBZSxDQUFBO0VBQUFmLGNBQUEsR0FBQVEsQ0FBQTtFQUFBLE9BQUFLLEtBQUssQ0FBQ08sTUFBTSxDQUFDZCxJQUFJO0FBQUQsQ0FBQztBQUVqRSxlQUFlQyxXQUFXLENBQUNlLE9BQU8ifQ==