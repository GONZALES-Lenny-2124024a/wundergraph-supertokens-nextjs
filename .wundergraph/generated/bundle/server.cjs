var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// wundergraph.server.ts
var wundergraph_server_exports = {};
__export(wundergraph_server_exports, {
  default: () => wundergraph_server_default
});
module.exports = __toCommonJS(wundergraph_server_exports);
var import_server = require("@wundergraph/sdk/server");
var wundergraph_server_default = (0, import_server.configureWunderGraphServer)(() => ({
  hooks: {
    global: {
      httpTransport: {
        onOriginRequest: {
          enableForAllOperations: true,
          hook: async ({ request, user }) => {
            if (user && user.rawIdToken) {
              request.headers.set("Authorization", `Bearer ${user.rawIdToken}`);
            }
            return request;
          }
        }
      }
    },
    queries: {},
    mutations: {}
  },
  graphqlServers: []
}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=server.cjs.map
