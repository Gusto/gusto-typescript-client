import { QueryClient, QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import { GetV1CompanyFormsRequest, GetV1CompanyFormsResponse } from "../models/operations/getv1companyforms.js";
export type CompanyFormsGetAllQueryData = GetV1CompanyFormsResponse;
export declare function prefetchCompanyFormsGetAll(queryClient: QueryClient, client$: GustoEmbeddedCore, request: GetV1CompanyFormsRequest, options?: RequestOptions): Promise<void>;
export declare function buildCompanyFormsGetAllQuery(client$: GustoEmbeddedCore, request: GetV1CompanyFormsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<CompanyFormsGetAllQueryData>;
};
export declare function queryKeyCompanyFormsGetAll(companyId: string, parameters: {
    sortBy?: string | undefined;
    xGustoAPIVersion?: VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=companyFormsGetAll.core.d.ts.map