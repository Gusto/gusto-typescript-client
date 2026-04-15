import { QueryClient, QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import { GetInformationRequestsRequest, GetInformationRequestsResponse } from "../models/operations/getinformationrequests.js";
export type InformationRequestsGetInformationRequestsQueryData = GetInformationRequestsResponse;
export declare function prefetchInformationRequestsGetInformationRequests(queryClient: QueryClient, client$: GustoEmbeddedCore, request: GetInformationRequestsRequest, options?: RequestOptions): Promise<void>;
export declare function buildInformationRequestsGetInformationRequestsQuery(client$: GustoEmbeddedCore, request: GetInformationRequestsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<InformationRequestsGetInformationRequestsQueryData>;
};
export declare function queryKeyInformationRequestsGetInformationRequests(companyUuid: string, parameters: {
    xGustoAPIVersion?: VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=informationRequestsGetInformationRequests.core.d.ts.map