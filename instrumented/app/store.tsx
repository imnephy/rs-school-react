function cov_1w0rq0layx() {
  var path = "D:\\\u0423\u0447\u0435\u0431\u0430\\rs_school\\react\\rs-school-react\\src\\app\\store.tsx";
  var hash = "7af162008ff002a720098b17add1d86d6b39d7e6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "D:\\\u0423\u0447\u0435\u0431\u0430\\rs_school\\react\\rs-school-react\\src\\app\\store.tsx",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 20
        },
        end: {
          line: 10,
          column: 2
        }
      },
      "1": {
        start: {
          line: 12,
          column: 14
        },
        end: {
          line: 15,
          column: 2
        }
      },
      "2": {
        start: {
          line: 14,
          column: 40
        },
        end: {
          line: 14,
          column: 85
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 14,
            column: 14
          },
          end: {
            line: 14,
            column: 15
          }
        },
        loc: {
          start: {
            line: 14,
            column: 40
          },
          end: {
            line: 14,
            column: 85
          }
        },
        line: 14
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7af162008ff002a720098b17add1d86d6b39d7e6"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1w0rq0layx = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1w0rq0layx();
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search/searchSlice';
import formCardReducer from '@/features/form/formCardSlice';
import { api } from './services/manga';
const rootReducer = (cov_1w0rq0layx().s[0]++, combineReducers({
  search: searchReducer,
  form: formCardReducer,
  api: api.reducer
}));
const store = (cov_1w0rq0layx().s[1]++, configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    cov_1w0rq0layx().f[0]++;
    cov_1w0rq0layx().s[2]++;
    return getDefaultMiddleware().concat(api.middleware);
  }
}));
export default store;
export type IStoreState = ReturnType<typeof rootReducer>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMXcwcnEwbGF5eCIsImFjdHVhbENvdmVyYWdlIiwiY29tYmluZVJlZHVjZXJzIiwiY29uZmlndXJlU3RvcmUiLCJzZWFyY2hSZWR1Y2VyIiwiZm9ybUNhcmRSZWR1Y2VyIiwiYXBpIiwicm9vdFJlZHVjZXIiLCJzIiwic2VhcmNoIiwiZm9ybSIsInJlZHVjZXIiLCJzdG9yZSIsIm1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsImYiLCJjb25jYXQiLCJJU3RvcmVTdGF0ZSIsIlJldHVyblR5cGUiLCJSb290U3RhdGUiLCJnZXRTdGF0ZSIsIkFwcERpc3BhdGNoIiwiZGlzcGF0Y2giXSwic291cmNlcyI6WyJzdG9yZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzLCBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgc2VhcmNoUmVkdWNlciBmcm9tICcuLi9mZWF0dXJlcy9zZWFyY2gvc2VhcmNoU2xpY2UnO1xyXG5pbXBvcnQgZm9ybUNhcmRSZWR1Y2VyIGZyb20gJ0AvZmVhdHVyZXMvZm9ybS9mb3JtQ2FyZFNsaWNlJztcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi9zZXJ2aWNlcy9tYW5nYSc7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgc2VhcmNoOiBzZWFyY2hSZWR1Y2VyLFxyXG4gIGZvcm06IGZvcm1DYXJkUmVkdWNlcixcclxuICBhcGk6IGFwaS5yZWR1Y2VyLFxyXG59KTtcclxuXHJcbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xyXG4gIHJlZHVjZXI6IHJvb3RSZWR1Y2VyLFxyXG4gIG1pZGRsZXdhcmU6IChnZXREZWZhdWx0TWlkZGxld2FyZSkgPT4gZ2V0RGVmYXVsdE1pZGRsZXdhcmUoKS5jb25jYXQoYXBpLm1pZGRsZXdhcmUpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xyXG5leHBvcnQgdHlwZSBJU3RvcmVTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHJvb3RSZWR1Y2VyPjtcclxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc3RvcmUuZ2V0U3RhdGU+O1xyXG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IHR5cGVvZiBzdG9yZS5kaXNwYXRjaDtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxjQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxjQUFBO0FBZlosU0FBU0UsZUFBZSxFQUFFQyxjQUFjLFFBQVEsa0JBQWtCO0FBQ2xFLE9BQU9DLGFBQWEsTUFBTSxnQ0FBZ0M7QUFDMUQsT0FBT0MsZUFBZSxNQUFNLCtCQUErQjtBQUMzRCxTQUFTQyxHQUFHLFFBQVEsa0JBQWtCO0FBRXRDLE1BQU1DLFdBQVcsSUFBQVAsY0FBQSxHQUFBUSxDQUFBLE9BQUdOLGVBQWUsQ0FBQztFQUNsQ08sTUFBTSxFQUFFTCxhQUFhO0VBQ3JCTSxJQUFJLEVBQUVMLGVBQWU7RUFDckJDLEdBQUcsRUFBRUEsR0FBRyxDQUFDSztBQUNYLENBQUMsQ0FBQztBQUVGLE1BQU1DLEtBQUssSUFBQVosY0FBQSxHQUFBUSxDQUFBLE9BQUdMLGNBQWMsQ0FBQztFQUMzQlEsT0FBTyxFQUFFSixXQUFXO0VBQ3BCTSxVQUFVLEVBQUdDLG9CQUFvQixJQUFLO0lBQUFkLGNBQUEsR0FBQWUsQ0FBQTtJQUFBZixjQUFBLEdBQUFRLENBQUE7SUFBQSxPQUFBTSxvQkFBb0IsRUFBRSxDQUFDRSxNQUFNLENBQUNWLEdBQUcsQ0FBQ08sVUFBVSxDQUFDO0VBQUQ7QUFDcEYsQ0FBQyxDQUFDO0FBRUYsZUFBZUQsS0FBSztBQUNwQixPQUFPLEtBQUtLLFdBQVcsR0FBR0MsVUFBVSxDQUFDLE9BQU9YLFdBQVcsQ0FBQztBQUN4RCxPQUFPLEtBQUtZLFNBQVMsR0FBR0QsVUFBVSxDQUFDLE9BQU9OLEtBQUssQ0FBQ1EsUUFBUSxDQUFDO0FBQ3pELE9BQU8sS0FBS0MsV0FBVyxHQUFHLE9BQU9ULEtBQUssQ0FBQ1UsUUFBUSJ9