import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GustoEmbeddedProvider } from "./react-query/index.js";
import { GustoEmbeddedCore } from "./core.js";

//Reexporting useQueryClient to be available in consumer application without direct react-query dependency
export { useQueryClient } from "@tanstack/react-query"

export function ReactSDKProvider({ url, children }: { url: string, children: React.ReactNode }) {
    const queryClient = new QueryClient();
    const gustoClient = new GustoEmbeddedCore({
        serverURL: url,
    },)
    queryClient.setQueryDefaults(['@gusto/embedded-api'], { retry: false })
    queryClient.setMutationDefaults(['@gusto/embedded-api'], { retry: false })


    return (<QueryClientProvider client={queryClient} >
        <GustoEmbeddedProvider client={gustoClient}>
            {children}
        </GustoEmbeddedProvider>
    </QueryClientProvider>)
}

export default { ReactSDKProvider }