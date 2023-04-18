function cov_11lhjlko62() {
  var path = "D:\\\u0423\u0447\u0435\u0431\u0430\\rs_school\\react\\rs-school-react\\src\\features\\form\\formCardSlice.tsx";
  var hash = "47c2e01526ddf07165f865b505686a2e9af4ddb6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "D:\\\u0423\u0447\u0435\u0431\u0430\\rs_school\\react\\rs-school-react\\src\\features\\form\\formCardSlice.tsx",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 29
        },
        end: {
          line: 19,
          column: 2
        }
      },
      "1": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 16,
          column: 53
        }
      },
      "2": {
        start: {
          line: 21,
          column: 37
        },
        end: {
          line: 21,
          column: 58
        }
      },
      "3": {
        start: {
          line: 22,
          column: 31
        },
        end: {
          line: 22,
          column: 69
        }
      },
      "4": {
        start: {
          line: 22,
          column: 53
        },
        end: {
          line: 22,
          column: 69
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 15,
            column: 23
          },
          end: {
            line: 15,
            column: 24
          }
        },
        loc: {
          start: {
            line: 15,
            column: 42
          },
          end: {
            line: 17,
            column: 5
          }
        },
        line: 15
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 22,
            column: 31
          },
          end: {
            line: 22,
            column: 32
          }
        },
        loc: {
          start: {
            line: 22,
            column: 53
          },
          end: {
            line: 22,
            column: 69
          }
        },
        line: 22
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "47c2e01526ddf07165f865b505686a2e9af4ddb6"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_11lhjlko62 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_11lhjlko62();
import { RootState } from '@/app/store';
import { IProductCard } from '@/pages/Forms';
import { createSlice } from '@reduxjs/toolkit';
export interface IFormCardState {
  value: IProductCard[];
}
export const formCardSlice = (cov_11lhjlko62().s[0]++, createSlice({
  name: 'form',
  initialState: {
    value: ([] as IProductCard[])
  },
  reducers: {
    setFormCardsValue: (state, action) => {
      cov_11lhjlko62().f[0]++;
      cov_11lhjlko62().s[1]++;
      state.value = [...state.value, action.payload];
    }
  }
}));
export const {
  setFormCardsValue
} = (cov_11lhjlko62().s[2]++, formCardSlice.actions);
cov_11lhjlko62().s[3]++;
export const selectFormCards = (state: RootState) => {
  cov_11lhjlko62().f[1]++;
  cov_11lhjlko62().s[4]++;
  return state.form.value;
};
export default formCardSlice.reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMTFsaGpsa282MiIsImFjdHVhbENvdmVyYWdlIiwiUm9vdFN0YXRlIiwiSVByb2R1Y3RDYXJkIiwiY3JlYXRlU2xpY2UiLCJJRm9ybUNhcmRTdGF0ZSIsInZhbHVlIiwiZm9ybUNhcmRTbGljZSIsInMiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwicmVkdWNlcnMiLCJzZXRGb3JtQ2FyZHNWYWx1ZSIsInN0YXRlIiwiYWN0aW9uIiwiZiIsInBheWxvYWQiLCJhY3Rpb25zIiwic2VsZWN0Rm9ybUNhcmRzIiwiZm9ybSIsInJlZHVjZXIiXSwic291cmNlcyI6WyJmb3JtQ2FyZFNsaWNlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICdAL2FwcC9zdG9yZSc7XHJcbmltcG9ydCB7IElQcm9kdWN0Q2FyZCB9IGZyb20gJ0AvcGFnZXMvRm9ybXMnO1xyXG5pbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRm9ybUNhcmRTdGF0ZSB7XHJcbiAgdmFsdWU6IElQcm9kdWN0Q2FyZFtdO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybUNhcmRTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnZm9ybScsXHJcbiAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICB2YWx1ZTogW10gYXMgSVByb2R1Y3RDYXJkW10sXHJcbiAgfSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgc2V0Rm9ybUNhcmRzVmFsdWU6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnZhbHVlID0gWy4uLnN0YXRlLnZhbHVlLCBhY3Rpb24ucGF5bG9hZF07XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgc2V0Rm9ybUNhcmRzVmFsdWUgfSA9IGZvcm1DYXJkU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGNvbnN0IHNlbGVjdEZvcm1DYXJkcyA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5mb3JtLnZhbHVlO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9ybUNhcmRTbGljZS5yZWR1Y2VyO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsY0FBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsY0FBQTtBQWZaLFNBQVNFLFNBQVMsUUFBUSxhQUFhO0FBQ3ZDLFNBQVNDLFlBQVksUUFBUSxlQUFlO0FBQzVDLFNBQVNDLFdBQVcsUUFBUSxrQkFBa0I7QUFFOUMsT0FBTyxVQUFVQyxjQUFjLENBQUM7RUFDOUJDLEtBQUssRUFBRUgsWUFBWSxFQUFFO0FBQ3ZCO0FBRUEsT0FBTyxNQUFNSSxhQUFhLElBQUFQLGNBQUEsR0FBQVEsQ0FBQSxPQUFHSixXQUFXLENBQUM7RUFDdkNLLElBQUksRUFBRSxNQUFNO0VBQ1pDLFlBQVksRUFBRTtJQUNaSixLQUFLLEdBQUUsRUFBRSxJQUFJSCxZQUFZLEVBQUU7RUFDN0IsQ0FBQztFQUNEUSxRQUFRLEVBQUU7SUFDUkMsaUJBQWlCLEVBQUVBLENBQUNDLEtBQUssRUFBRUMsTUFBTSxLQUFLO01BQUFkLGNBQUEsR0FBQWUsQ0FBQTtNQUFBZixjQUFBLEdBQUFRLENBQUE7TUFDcENLLEtBQUssQ0FBQ1AsS0FBSyxHQUFHLENBQUMsR0FBR08sS0FBSyxDQUFDUCxLQUFLLEVBQUVRLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDO0lBQ2hEO0VBQ0Y7QUFDRixDQUFDLENBQUM7QUFFRixPQUFPLE1BQU07RUFBRUo7QUFBa0IsQ0FBQyxJQUFBWixjQUFBLEdBQUFRLENBQUEsT0FBR0QsYUFBYSxDQUFDVSxPQUFPO0FBQUNqQixjQUFBLEdBQUFRLENBQUE7QUFDM0QsT0FBTyxNQUFNVSxlQUFlLEdBQUdBLENBQUNMLEtBQUssRUFBRVgsU0FBUyxLQUFLO0VBQUFGLGNBQUEsR0FBQWUsQ0FBQTtFQUFBZixjQUFBLEdBQUFRLENBQUE7RUFBQSxPQUFBSyxLQUFLLENBQUNNLElBQUksQ0FBQ2IsS0FBSztBQUFELENBQUM7QUFFckUsZUFBZUMsYUFBYSxDQUFDYSxPQUFPIn0=