// wundergraph.config.ts
var import_sdk2 = require("@wundergraph/sdk");
var import_template = require("@wundergraph/nextjs/dist/template");

// wundergraph.server.ts
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

// wundergraph.operations.ts
var import_sdk = require("@wundergraph/sdk");
var wundergraph_operations_default = (0, import_sdk.configureWunderGraphOperations)({
  operations: {
    defaultConfig: {
      authentication: {
        required: false
      }
    },
    queries: (config) => ({
      ...config,
      caching: {
        enable: false,
        staleWhileRevalidate: 60,
        maxAge: 60,
        public: true
      },
      liveQuery: {
        enable: true,
        pollingIntervalSeconds: 1
      }
    }),
    mutations: (config) => ({
      ...config
    }),
    subscriptions: (config) => ({
      ...config
    }),
    custom: {
      Country: (config) => ({
        ...config,
        authentication: {
          required: true
        }
      })
    }
  }
});

// wundergraph.config.ts
var countries = import_sdk2.introspect.graphql({
  apiNamespace: "countries",
  url: "https://countries.trevorblades.com/graphql"
});
(0, import_sdk2.configureWunderGraphApplication)({
  apis: [countries],
  server: wundergraph_server_default,
  operations: wundergraph_operations_default,
  generate: {
    codeGenerators: [
      {
        templates: [new import_template.NextJsTemplate()],
        path: "../components/generated"
      }
    ]
  },
  cors: {
    ...import_sdk2.cors.allowAll,
    allowedOrigins: [`${process.env.NEXT_PUBLIC_APP_URL}`]
  },
  authentication: {
    tokenBased: {
      providers: [
        {
          jwksURL: `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/jwt/jwks.json`
        }
      ]
    }
  },
  security: {
    enableGraphQLEndpoint: process.env.NODE_ENV !== "production"
  }
});
//# sourceMappingURL=config.cjs.map
