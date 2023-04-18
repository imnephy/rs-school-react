function cov_dve9lsut9() {
  var path = "D:\\\u0423\u0447\u0435\u0431\u0430\\rs_school\\react\\rs-school-react\\src\\mocks\\server.ts";
  var hash = "8505be1166da0c50737be83c8399d6bbf24b9a19";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "D:\\\u0423\u0447\u0435\u0431\u0430\\rs_school\\react\\rs-school-react\\src\\mocks\\server.ts",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 22
        },
        end: {
          line: 4,
          column: 46
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8505be1166da0c50737be83c8399d6bbf24b9a19"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_dve9lsut9 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_dve9lsut9();
import { setupServer } from 'msw/node';
import { handlers } from './handlers';
// This configures a Service Worker with the given request handlers.
export const server = (cov_dve9lsut9().s[0]++, setupServer(...handlers));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfZHZlOWxzdXQ5IiwiYWN0dWFsQ292ZXJhZ2UiLCJzZXR1cFNlcnZlciIsImhhbmRsZXJzIiwic2VydmVyIiwicyJdLCJzb3VyY2VzIjpbInNlcnZlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXR1cFNlcnZlciB9IGZyb20gJ21zdy9ub2RlJztcclxuaW1wb3J0IHsgaGFuZGxlcnMgfSBmcm9tICcuL2hhbmRsZXJzJztcclxuLy8gVGhpcyBjb25maWd1cmVzIGEgU2VydmljZSBXb3JrZXIgd2l0aCB0aGUgZ2l2ZW4gcmVxdWVzdCBoYW5kbGVycy5cclxuZXhwb3J0IGNvbnN0IHNlcnZlciA9IHNldHVwU2VydmVyKC4uLmhhbmRsZXJzKTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGFBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGFBQUE7QUFmWixTQUFTRSxXQUFXLFFBQVEsVUFBVTtBQUN0QyxTQUFTQyxRQUFRLFFBQVEsWUFBWTtBQUNyQztBQUNBLE9BQU8sTUFBTUMsTUFBTSxJQUFBSixhQUFBLEdBQUFLLENBQUEsT0FBR0gsV0FBVyxDQUFDLEdBQUdDLFFBQVEsQ0FBQyJ9