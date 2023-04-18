function cov_2jjvd5klrp() {
  var path = "D:\\\u0423\u0447\u0435\u0431\u0430\\rs_school\\react\\rs-school-react\\src\\setup.ts";
  var hash = "2103fb328dc19e8b7f64cb7c01ba9c0b523fcc52";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "D:\\\u0423\u0447\u0435\u0431\u0430\\rs_school\\react\\rs-school-react\\src\\setup.ts",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 0
        },
        end: {
          line: 5,
          column: 24
        }
      },
      "1": {
        start: {
          line: 7,
          column: 0
        },
        end: {
          line: 7,
          column: 64
        }
      },
      "2": {
        start: {
          line: 7,
          column: 16
        },
        end: {
          line: 7,
          column: 62
        }
      },
      "3": {
        start: {
          line: 8,
          column: 0
        },
        end: {
          line: 8,
          column: 31
        }
      },
      "4": {
        start: {
          line: 8,
          column: 15
        },
        end: {
          line: 8,
          column: 29
        }
      },
      "5": {
        start: {
          line: 9,
          column: 0
        },
        end: {
          line: 9,
          column: 40
        }
      },
      "6": {
        start: {
          line: 9,
          column: 16
        },
        end: {
          line: 9,
          column: 38
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 10
          },
          end: {
            line: 7,
            column: 11
          }
        },
        loc: {
          start: {
            line: 7,
            column: 16
          },
          end: {
            line: 7,
            column: 62
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 8,
            column: 9
          },
          end: {
            line: 8,
            column: 10
          }
        },
        loc: {
          start: {
            line: 8,
            column: 15
          },
          end: {
            line: 8,
            column: 29
          }
        },
        line: 8
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 9,
            column: 10
          },
          end: {
            line: 9,
            column: 11
          }
        },
        loc: {
          start: {
            line: 9,
            column: 16
          },
          end: {
            line: 9,
            column: 38
          }
        },
        line: 9
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
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2103fb328dc19e8b7f64cb7c01ba9c0b523fcc52"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2jjvd5klrp = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2jjvd5klrp();
import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';
import { server } from './mocks/server';
cov_2jjvd5klrp().s[0]++;
expect.extend(matchers);
cov_2jjvd5klrp().s[1]++;
beforeAll(() => {
  cov_2jjvd5klrp().f[0]++;
  cov_2jjvd5klrp().s[2]++;
  return server.listen({
    onUnhandledRequest: 'error'
  });
});
cov_2jjvd5klrp().s[3]++;
afterAll(() => {
  cov_2jjvd5klrp().f[1]++;
  cov_2jjvd5klrp().s[4]++;
  return server.close();
});
cov_2jjvd5klrp().s[5]++;
afterEach(() => {
  cov_2jjvd5klrp().f[2]++;
  cov_2jjvd5klrp().s[6]++;
  return server.resetHandlers();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMmpqdmQ1a2xycCIsImFjdHVhbENvdmVyYWdlIiwibWF0Y2hlcnMiLCJleHBlY3QiLCJzZXJ2ZXIiLCJzIiwiZXh0ZW5kIiwiYmVmb3JlQWxsIiwiZiIsImxpc3RlbiIsIm9uVW5oYW5kbGVkUmVxdWVzdCIsImFmdGVyQWxsIiwiY2xvc2UiLCJhZnRlckVhY2giLCJyZXNldEhhbmRsZXJzIl0sInNvdXJjZXMiOlsic2V0dXAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1hdGNoZXJzIGZyb20gJ0B0ZXN0aW5nLWxpYnJhcnkvamVzdC1kb20vbWF0Y2hlcnMnO1xyXG5pbXBvcnQgeyBleHBlY3QgfSBmcm9tICd2aXRlc3QnO1xyXG5pbXBvcnQgeyBzZXJ2ZXIgfSBmcm9tICcuL21vY2tzL3NlcnZlcic7XHJcblxyXG5leHBlY3QuZXh0ZW5kKG1hdGNoZXJzKTtcclxuXHJcbmJlZm9yZUFsbCgoKSA9PiBzZXJ2ZXIubGlzdGVuKHsgb25VbmhhbmRsZWRSZXF1ZXN0OiAnZXJyb3InIH0pKTtcclxuYWZ0ZXJBbGwoKCkgPT4gc2VydmVyLmNsb3NlKCkpO1xyXG5hZnRlckVhY2goKCkgPT4gc2VydmVyLnJlc2V0SGFuZGxlcnMoKSk7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGNBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGNBQUE7QUFmWixPQUFPRSxRQUFRLE1BQU0sb0NBQW9DO0FBQ3pELFNBQVNDLE1BQU0sUUFBUSxRQUFRO0FBQy9CLFNBQVNDLE1BQU0sUUFBUSxnQkFBZ0I7QUFBQ0osY0FBQSxHQUFBSyxDQUFBO0FBRXhDRixNQUFNLENBQUNHLE1BQU0sQ0FBQ0osUUFBUSxDQUFDO0FBQUNGLGNBQUEsR0FBQUssQ0FBQTtBQUV4QkUsU0FBUyxDQUFDLE1BQU07RUFBQVAsY0FBQSxHQUFBUSxDQUFBO0VBQUFSLGNBQUEsR0FBQUssQ0FBQTtFQUFBLE9BQUFELE1BQU0sQ0FBQ0ssTUFBTSxDQUFDO0lBQUVDLGtCQUFrQixFQUFFO0VBQVEsQ0FBQyxDQUFDO0FBQUQsQ0FBQyxDQUFDO0FBQUNWLGNBQUEsR0FBQUssQ0FBQTtBQUNoRU0sUUFBUSxDQUFDLE1BQU07RUFBQVgsY0FBQSxHQUFBUSxDQUFBO0VBQUFSLGNBQUEsR0FBQUssQ0FBQTtFQUFBLE9BQUFELE1BQU0sQ0FBQ1EsS0FBSyxFQUFFO0FBQUQsQ0FBQyxDQUFDO0FBQUNaLGNBQUEsR0FBQUssQ0FBQTtBQUMvQlEsU0FBUyxDQUFDLE1BQU07RUFBQWIsY0FBQSxHQUFBUSxDQUFBO0VBQUFSLGNBQUEsR0FBQUssQ0FBQTtFQUFBLE9BQUFELE1BQU0sQ0FBQ1UsYUFBYSxFQUFFO0FBQUQsQ0FBQyxDQUFDIn0=