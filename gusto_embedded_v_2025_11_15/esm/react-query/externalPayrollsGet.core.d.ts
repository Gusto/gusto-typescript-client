import { QueryClient, QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import { GetV1CompanyExternalPayrollsRequest, GetV1CompanyExternalPayrollsResponse } from "../models/operations/getv1companyexternalpayrolls.js";
export type ExternalPayrollsGetQueryData = GetV1CompanyExternalPayrollsResponse;
export declare function prefetchExternalPayrollsGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: GetV1CompanyExternalPayrollsRequest, options?: RequestOptions): Promise<void>;
export declare function buildExternalPayrollsGetQuery(client$: GustoEmbeddedCore, request: GetV1CompanyExternalPayrollsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ExternalPayrollsGetQueryData>;
};
export declare function queryKeyExternalPayrollsGet(companyUuid: string, parameters: {
    xGustoAPIVersion?: VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=externalPayrollsGet.core.d.ts.map