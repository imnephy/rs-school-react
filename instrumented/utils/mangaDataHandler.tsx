function cov_1o4kmoec8r() {
  var path = "D:\\\u0423\u0447\u0435\u0431\u0430\\rs_school\\react\\rs-school-react\\src\\utils\\mangaDataHandler.tsx";
  var hash = "0414264592c9b60d2dfdf747af32474161c9d81e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "D:\\\u0423\u0447\u0435\u0431\u0430\\rs_school\\react\\rs-school-react\\src\\utils\\mangaDataHandler.tsx",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 24
        },
        end: {
          line: 5,
          column: 1
        }
      },
      "1": {
        start: {
          line: 2,
          column: 18
        },
        end: {
          line: 2,
          column: 26
        }
      },
      "2": {
        start: {
          line: 3,
          column: 2
        },
        end: {
          line: 3,
          column: 51
        }
      },
      "3": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 4,
          column: 53
        }
      },
      "4": {
        start: {
          line: 4,
          column: 31
        },
        end: {
          line: 4,
          column: 40
        }
      },
      "5": {
        start: {
          line: 9,
          column: 32
        },
        end: {
          line: 11,
          column: 1
        }
      },
      "6": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 10,
          column: 58
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 25
          }
        },
        loc: {
          start: {
            line: 1,
            column: 53
          },
          end: {
            line: 5,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 4,
            column: 21
          },
          end: {
            line: 4,
            column: 22
          }
        },
        loc: {
          start: {
            line: 4,
            column: 31
          },
          end: {
            line: 4,
            column: 40
          }
        },
        line: 4
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 9,
            column: 32
          },
          end: {
            line: 9,
            column: 33
          }
        },
        loc: {
          start: {
            line: 9,
            column: 49
          },
          end: {
            line: 11,
            column: 1
          }
        },
        line: 9
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 3,
            column: 19
          },
          end: {
            line: 3,
            column: 50
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 3,
            column: 36
          },
          end: {
            line: 3,
            column: 37
          }
        }, {
          start: {
            line: 3,
            column: 40
          },
          end: {
            line: 3,
            column: 50
          }
        }],
        line: 3
      },
      "1": {
        loc: {
          start: {
            line: 10,
            column: 9
          },
          end: {
            line: 10,
            column: 57
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 10,
            column: 27
          },
          end: {
            line: 10,
            column: 51
          }
        }, {
          start: {
            line: 10,
            column: 54
          },
          end: {
            line: 10,
            column: 57
          }
        }],
        line: 10
      }
    },
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
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "0414264592c9b60d2dfdf747af32474161c9d81e"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1o4kmoec8r = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1o4kmoec8r();
cov_1o4kmoec8r().s[0]++;
const getStrFromArray = (arr: {
  name: string;
}[]) => {
  cov_1o4kmoec8r().f[0]++;
  const arrCopy = (cov_1o4kmoec8r().s[1]++, [...arr]);
  cov_1o4kmoec8r().s[2]++;
  arrCopy.length = arr.length > 3 ? (cov_1o4kmoec8r().b[0][0]++, 3) : (cov_1o4kmoec8r().b[0][1]++, arr.length);
  cov_1o4kmoec8r().s[3]++;
  return arrCopy.map(elem => {
    cov_1o4kmoec8r().f[1]++;
    cov_1o4kmoec8r().s[4]++;
    return elem.name;
  }).join(', ');
};
export default getStrFromArray;
cov_1o4kmoec8r().s[5]++;
export const getCorrectLength = (str: string) => {
  cov_1o4kmoec8r().f[2]++;
  cov_1o4kmoec8r().s[6]++;
  return str.length > 40 ? (cov_1o4kmoec8r().b[1][0]++, `${str.slice(0, 40)}...`) : (cov_1o4kmoec8r().b[1][1]++, str);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMW80a21vZWM4ciIsImFjdHVhbENvdmVyYWdlIiwicyIsImdldFN0ckZyb21BcnJheSIsImFyciIsIm5hbWUiLCJmIiwiYXJyQ29weSIsImxlbmd0aCIsImIiLCJtYXAiLCJlbGVtIiwiam9pbiIsImdldENvcnJlY3RMZW5ndGgiLCJzdHIiLCJzbGljZSJdLCJzb3VyY2VzIjpbIm1hbmdhRGF0YUhhbmRsZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldFN0ckZyb21BcnJheSA9IChhcnI6IHsgbmFtZTogc3RyaW5nIH1bXSkgPT4ge1xyXG4gIGNvbnN0IGFyckNvcHkgPSBbLi4uYXJyXTtcclxuICBhcnJDb3B5Lmxlbmd0aCA9IGFyci5sZW5ndGggPiAzID8gMyA6IGFyci5sZW5ndGg7XHJcbiAgcmV0dXJuIGFyckNvcHkubWFwKChlbGVtKSA9PiBlbGVtLm5hbWUpLmpvaW4oJywgJyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRTdHJGcm9tQXJyYXk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29ycmVjdExlbmd0aCA9IChzdHI6IHN0cmluZykgPT4ge1xyXG4gIHJldHVybiBzdHIubGVuZ3RoID4gNDAgPyBgJHtzdHIuc2xpY2UoMCwgNDApfS4uLmAgOiBzdHI7XHJcbn07XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxjQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxjQUFBO0FBQUFBLGNBQUEsR0FBQUUsQ0FBQTtBQWZaLE1BQU1DLGVBQWUsR0FBR0EsQ0FBQ0MsR0FBRyxFQUFFO0VBQUVDLElBQUksRUFBRSxNQUFNO0FBQUMsQ0FBQyxFQUFFLEtBQUs7RUFBQUwsY0FBQSxHQUFBTSxDQUFBO0VBQ25ELE1BQU1DLE9BQU8sSUFBQVAsY0FBQSxHQUFBRSxDQUFBLE9BQUcsQ0FBQyxHQUFHRSxHQUFHLENBQUM7RUFBQ0osY0FBQSxHQUFBRSxDQUFBO0VBQ3pCSyxPQUFPLENBQUNDLE1BQU0sR0FBR0osR0FBRyxDQUFDSSxNQUFNLEdBQUcsQ0FBQyxJQUFBUixjQUFBLEdBQUFTLENBQUEsVUFBRyxDQUFDLEtBQUFULGNBQUEsR0FBQVMsQ0FBQSxVQUFHTCxHQUFHLENBQUNJLE1BQU07RUFBQ1IsY0FBQSxHQUFBRSxDQUFBO0VBQ2pELE9BQU9LLE9BQU8sQ0FBQ0csR0FBRyxDQUFFQyxJQUFJLElBQUs7SUFBQVgsY0FBQSxHQUFBTSxDQUFBO0lBQUFOLGNBQUEsR0FBQUUsQ0FBQTtJQUFBLE9BQUFTLElBQUksQ0FBQ04sSUFBSTtFQUFELENBQUMsQ0FBQyxDQUFDTyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3BELENBQUM7QUFFRCxlQUFlVCxlQUFlO0FBQUNILGNBQUEsR0FBQUUsQ0FBQTtBQUUvQixPQUFPLE1BQU1XLGdCQUFnQixHQUFHQSxDQUFDQyxHQUFHLEVBQUUsTUFBTSxLQUFLO0VBQUFkLGNBQUEsR0FBQU0sQ0FBQTtFQUFBTixjQUFBLEdBQUFFLENBQUE7RUFDL0MsT0FBT1ksR0FBRyxDQUFDTixNQUFNLEdBQUcsRUFBRSxJQUFBUixjQUFBLEdBQUFTLENBQUEsVUFBSSxHQUFFSyxHQUFHLENBQUNDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFFLEtBQUksS0FBQWYsY0FBQSxHQUFBUyxDQUFBLFVBQUdLLEdBQUc7QUFDekQsQ0FBQyJ9