function cov_2cv8l93r81() {
  var path = "D:\\\u0423\u0447\u0435\u0431\u0430\\rs_school\\react\\rs-school-react\\src\\hooks\\useFetching.tsx";
  var hash = "349a6232afb6dc6060b53bdfcf8004778a4c51e1";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "D:\\\u0423\u0447\u0435\u0431\u0430\\rs_school\\react\\rs-school-react\\src\\hooks\\useFetching.tsx",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 20
        },
        end: {
          line: 21,
          column: 1
        }
      },
      "1": {
        start: {
          line: 6,
          column: 36
        },
        end: {
          line: 6,
          column: 51
        }
      },
      "2": {
        start: {
          line: 7,
          column: 28
        },
        end: {
          line: 7,
          column: 40
        }
      },
      "3": {
        start: {
          line: 8,
          column: 19
        },
        end: {
          line: 18,
          column: 3
        }
      },
      "4": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 17,
          column: 5
        }
      },
      "5": {
        start: {
          line: 10,
          column: 6
        },
        end: {
          line: 10,
          column: 25
        }
      },
      "6": {
        start: {
          line: 11,
          column: 6
        },
        end: {
          line: 11,
          column: 28
        }
      },
      "7": {
        start: {
          line: 12,
          column: 6
        },
        end: {
          line: 12,
          column: 19
        }
      },
      "8": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 14,
          column: 37
        }
      },
      "9": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 16,
          column: 26
        }
      },
      "10": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 20,
          column: 38
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 20
          },
          end: {
            line: 3,
            column: 21
          }
        },
        loc: {
          start: {
            line: 5,
            column: 73
          },
          end: {
            line: 21,
            column: 1
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 8,
            column: 19
          },
          end: {
            line: 8,
            column: 20
          }
        },
        loc: {
          start: {
            line: 8,
            column: 41
          },
          end: {
            line: 18,
            column: 3
          }
        },
        line: 8
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 8,
            column: 26
          },
          end: {
            line: 8,
            column: 36
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 8,
            column: 34
          },
          end: {
            line: 8,
            column: 36
          }
        }],
        line: 8
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
      "8": 0,
      "9": 0,
      "10": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "349a6232afb6dc6060b53bdfcf8004778a4c51e1"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2cv8l93r81 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2cv8l93r81();
import { useState } from 'react';
cov_2cv8l93r81().s[0]++;
const useFetching = (callback: (value: string, page?: number) => Promise<void>): [(value: string, page?: number) => Promise<void>, boolean, string] => {
  cov_2cv8l93r81().f[0]++;
  const [isLoading, setIsLoading] = (cov_2cv8l93r81().s[1]++, useState(false));
  const [error, setError] = (cov_2cv8l93r81().s[2]++, useState(''));
  cov_2cv8l93r81().s[3]++;
  const fetching = async (value = (cov_2cv8l93r81().b[0][0]++, '')) => {
    cov_2cv8l93r81().f[1]++;
    cov_2cv8l93r81().s[4]++;
    try {
      cov_2cv8l93r81().s[5]++;
      setIsLoading(true);
      cov_2cv8l93r81().s[6]++;
      await callback(value);
      cov_2cv8l93r81().s[7]++;
      setError('');
    } catch (e) {
      cov_2cv8l93r81().s[8]++;
      setError((e as Error).message);
    } finally {
      cov_2cv8l93r81().s[9]++;
      setIsLoading(false);
    }
  };
  cov_2cv8l93r81().s[10]++;
  return [fetching, isLoading, error];
};
export default useFetching;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMmN2OGw5M3I4MSIsImFjdHVhbENvdmVyYWdlIiwidXNlU3RhdGUiLCJzIiwidXNlRmV0Y2hpbmciLCJjYWxsYmFjayIsInZhbHVlIiwicGFnZSIsIlByb21pc2UiLCJmIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImZldGNoaW5nIiwiYiIsImUiLCJFcnJvciIsIm1lc3NhZ2UiXSwic291cmNlcyI6WyJ1c2VGZXRjaGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCB1c2VGZXRjaGluZyA9IChcclxuICBjYWxsYmFjazogKHZhbHVlOiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIpID0+IFByb21pc2U8dm9pZD5cclxuKTogWyh2YWx1ZTogc3RyaW5nLCBwYWdlPzogbnVtYmVyKSA9PiBQcm9taXNlPHZvaWQ+LCBib29sZWFuLCBzdHJpbmddID0+IHtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IGZldGNoaW5nID0gYXN5bmMgKHZhbHVlID0gJycpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgICAgYXdhaXQgY2FsbGJhY2sodmFsdWUpO1xyXG4gICAgICBzZXRFcnJvcignJyk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHNldEVycm9yKChlIGFzIEVycm9yKS5tZXNzYWdlKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIFtmZXRjaGluZywgaXNMb2FkaW5nLCBlcnJvcl07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VGZXRjaGluZztcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGNBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGNBQUE7QUFmWixTQUFTRSxRQUFRLFFBQVEsT0FBTztBQUFDRixjQUFBLEdBQUFHLENBQUE7QUFFakMsTUFBTUMsV0FBVyxHQUFHQSxDQUNsQkMsUUFBUSxFQUFFLENBQUNDLEtBQUssRUFBRSxNQUFNLEVBQUVDLElBQWEsQ0FBUixFQUFFLE1BQU0sS0FBS0MsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUMxRCxFQUFFLENBQUMsQ0FBQ0YsS0FBSyxFQUFFLE1BQU0sRUFBRUMsSUFBYSxDQUFSLEVBQUUsTUFBTSxLQUFLQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxJQUFJO0VBQUFSLGNBQUEsR0FBQVMsQ0FBQTtFQUN2RSxNQUFNLENBQUNDLFNBQVMsRUFBRUMsWUFBWSxDQUFDLElBQUFYLGNBQUEsR0FBQUcsQ0FBQSxPQUFHRCxRQUFRLENBQUMsS0FBSyxDQUFDO0VBQ2pELE1BQU0sQ0FBQ1UsS0FBSyxFQUFFQyxRQUFRLENBQUMsSUFBQWIsY0FBQSxHQUFBRyxDQUFBLE9BQUdELFFBQVEsQ0FBQyxFQUFFLENBQUM7RUFBQ0YsY0FBQSxHQUFBRyxDQUFBO0VBQ3ZDLE1BQU1XLFFBQVEsR0FBRyxNQUFBQSxDQUFPUixLQUFLLElBQUFOLGNBQUEsR0FBQWUsQ0FBQSxVQUFHLEVBQUUsTUFBSztJQUFBZixjQUFBLEdBQUFTLENBQUE7SUFBQVQsY0FBQSxHQUFBRyxDQUFBO0lBQ3JDLElBQUk7TUFBQUgsY0FBQSxHQUFBRyxDQUFBO01BQ0ZRLFlBQVksQ0FBQyxJQUFJLENBQUM7TUFBQ1gsY0FBQSxHQUFBRyxDQUFBO01BQ25CLE1BQU1FLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDO01BQUNOLGNBQUEsR0FBQUcsQ0FBQTtNQUN0QlUsUUFBUSxDQUFDLEVBQUUsQ0FBQztJQUNkLENBQUMsQ0FBQyxPQUFPRyxDQUFDLEVBQUU7TUFBQWhCLGNBQUEsR0FBQUcsQ0FBQTtNQUNWVSxRQUFRLENBQUMsQ0FBQ0csQ0FBQyxJQUFJQyxLQUFLLEVBQUVDLE9BQU8sQ0FBQztJQUNoQyxDQUFDLFNBQVM7TUFBQWxCLGNBQUEsR0FBQUcsQ0FBQTtNQUNSUSxZQUFZLENBQUMsS0FBSyxDQUFDO0lBQ3JCO0VBQ0YsQ0FBQztFQUFDWCxjQUFBLEdBQUFHLENBQUE7RUFFRixPQUFPLENBQUNXLFFBQVEsRUFBRUosU0FBUyxFQUFFRSxLQUFLLENBQUM7QUFDckMsQ0FBQztBQUVELGVBQWVSLFdBQVcifQ==