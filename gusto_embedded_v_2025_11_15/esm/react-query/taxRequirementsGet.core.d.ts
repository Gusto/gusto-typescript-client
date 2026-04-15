import { QueryClient, QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import { GetV1CompaniesCompanyUuidTaxRequirementsStateRequest, GetV1CompaniesCompanyUuidTaxRequirementsStateResponse } from "../models/operations/getv1companiescompanyuuidtaxrequirementsstate.js";
export type TaxRequirementsGetQueryData = GetV1CompaniesCompanyUuidTaxRequirementsStateResponse;
export declare function prefetchTaxRequirementsGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: GetV1CompaniesCompanyUuidTaxRequirementsStateRequest, options?: RequestOptions): Promise<void>;
export declare function buildTaxRequirementsGetQuery(client$: GustoEmbeddedCore, request: GetV1CompaniesCompanyUuidTaxRequirementsStateRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<TaxRequirementsGetQueryData>;
};
export declare function queryKeyTaxRequirementsGet(companyUuid: string, state: string, parameters: {
    scheduling?: boolean | undefined;
    xGustoAPIVersion?: VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=taxRequirementsGet.core.d.ts.map