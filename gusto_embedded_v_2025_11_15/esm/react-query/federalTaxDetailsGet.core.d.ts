import { QueryClient, QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import { GetV1CompaniesCompanyIdFederalTaxDetailsRequest, GetV1CompaniesCompanyIdFederalTaxDetailsResponse } from "../models/operations/getv1companiescompanyidfederaltaxdetails.js";
export type FederalTaxDetailsGetQueryData = GetV1CompaniesCompanyIdFederalTaxDetailsResponse;
export declare function prefetchFederalTaxDetailsGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: GetV1CompaniesCompanyIdFederalTaxDetailsRequest, options?: RequestOptions): Promise<void>;
export declare function buildFederalTaxDetailsGetQuery(client$: GustoEmbeddedCore, request: GetV1CompaniesCompanyIdFederalTaxDetailsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<FederalTaxDetailsGetQueryData>;
};
export declare function queryKeyFederalTaxDetailsGet(companyId: string, parameters: {
    xGustoAPIVersion?: VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=federalTaxDetailsGet.core.d.ts.map