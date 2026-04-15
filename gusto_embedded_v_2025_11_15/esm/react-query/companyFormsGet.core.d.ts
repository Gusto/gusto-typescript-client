import { QueryClient, QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import { GetV1CompanyFormRequest, GetV1CompanyFormResponse } from "../models/operations/getv1companyform.js";
export type CompanyFormsGetQueryData = GetV1CompanyFormResponse;
export declare function prefetchCompanyFormsGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: GetV1CompanyFormRequest, options?: RequestOptions): Promise<void>;
export declare function buildCompanyFormsGetQuery(client$: GustoEmbeddedCore, request: GetV1CompanyFormRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<CompanyFormsGetQueryData>;
};
export declare function queryKeyCompanyFormsGet(formId: string, parameters: {
    xGustoAPIVersion?: VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=companyFormsGet.core.d.ts.map