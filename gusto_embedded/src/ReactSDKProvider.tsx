import { HTTPClient } from "./lib/http.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GustoEmbeddedProvider } from "./react-query/index.js";
import { GustoEmbeddedCore } from "./core.js";

//Reexporting useQueryClient to be available in consumer application without direct react-query dependency
export { useQueryClient } from "@tanstack/react-query";

export function ReactSDKProvider({
  url,
  headers,
  children,
}: {
  url: string;
  headers?: Record<string, string | number>;
  children: React.ReactNode;
}) {
  const httpClientWithHeaders = new HTTPClient({
    fetcher: async (request) => {
      if (request instanceof Request) {
        const requestWithHeaders = {
          ...request,
          headers: {
            ...request.headers,
            ...headers,
          },
        };
        return fetch(requestWithHeaders);
      }
      return fetch(request);
    },
  });

  const queryClient = new QueryClient();
  const gustoClient = new GustoEmbeddedCore({
    serverURL: url,
    httpClient: httpClientWithHeaders,
  });
  queryClient.setQueryDefaults(["@gusto/embedded-api"], { retry: false });
  queryClient.setMutationDefaults(["@gusto/embedded-api"], { retry: false });

  return (
    <QueryClientProvider client={queryClient}>
      <GustoEmbeddedProvider client={gustoClient}>
        {children}
      </GustoEmbeddedProvider>
    </QueryClientProvider>
  );
}

export default { ReactSDKProvider };
