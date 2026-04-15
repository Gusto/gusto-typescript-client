import { QueryClient, QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import { GetV1ExternalPayrollRequest, GetV1ExternalPayrollResponse } from "../models/operations/getv1externalpayroll.js";
export type ExternalPayrollsRetrieveQueryData = GetV1ExternalPayrollResponse;
export declare function prefetchExternalPayrollsRetrieve(queryClient: QueryClient, client$: GustoEmbeddedCore, request: GetV1ExternalPayrollRequest, options?: RequestOptions): Promise<void>;
export declare function buildExternalPayrollsRetrieveQuery(client$: GustoEmbeddedCore, request: GetV1ExternalPayrollRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ExternalPayrollsRetrieveQueryData>;
};
export declare function queryKeyExternalPayrollsRetrieve(companyUuid: string, externalPayrollId: string, parameters: {
    xGustoAPIVersion?: VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=externalPayrollsRetrieve.core.d.ts.map