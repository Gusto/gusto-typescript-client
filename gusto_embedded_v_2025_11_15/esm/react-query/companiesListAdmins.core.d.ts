import { QueryClient, QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import { GetV1CompaniesCompanyIdAdminsRequest, GetV1CompaniesCompanyIdAdminsResponse } from "../models/operations/getv1companiescompanyidadmins.js";
export type CompaniesListAdminsQueryData = GetV1CompaniesCompanyIdAdminsResponse;
export declare function prefetchCompaniesListAdmins(queryClient: QueryClient, client$: GustoEmbeddedCore, request: GetV1CompaniesCompanyIdAdminsRequest, options?: RequestOptions): Promise<void>;
export declare function buildCompaniesListAdminsQuery(client$: GustoEmbeddedCore, request: GetV1CompaniesCompanyIdAdminsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<CompaniesListAdminsQueryData>;
};
export declare function queryKeyCompaniesListAdmins(companyId: string, parameters: {
    page?: number | undefined;
    per?: number | undefined;
    xGustoAPIVersion?: VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=companiesListAdmins.core.d.ts.map