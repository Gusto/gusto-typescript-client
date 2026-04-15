import { QueryClient, QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GetV1TokenInfoRequest, GetV1TokenInfoResponse, XGustoAPIVersion } from "../models/operations/getv1tokeninfo.js";
export type IntrospectionGetInfoQueryData = GetV1TokenInfoResponse;
export declare function prefetchIntrospectionGetInfo(queryClient: QueryClient, client$: GustoEmbeddedCore, request: GetV1TokenInfoRequest, options?: RequestOptions): Promise<void>;
export declare function buildIntrospectionGetInfoQuery(client$: GustoEmbeddedCore, request: GetV1TokenInfoRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<IntrospectionGetInfoQueryData>;
};
export declare function queryKeyIntrospectionGetInfo(parameters: {
    xGustoAPIVersion?: XGustoAPIVersion | undefined;
}): QueryKey;
//# sourceMappingURL=introspectionGetInfo.core.d.ts.map