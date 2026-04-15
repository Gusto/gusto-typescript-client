import { QueryClient, QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import { GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsQueryParamInclude, GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest, GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse } from "../models/operations/getv1companybenefitscompanybenefitidemployeebenefits.js";
export type CompanyBenefitsGetEmployeeBenefitsQueryData = GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsResponse;
export declare function prefetchCompanyBenefitsGetEmployeeBenefits(queryClient: QueryClient, client$: GustoEmbeddedCore, request: GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest, options?: RequestOptions): Promise<void>;
export declare function buildCompanyBenefitsGetEmployeeBenefitsQuery(client$: GustoEmbeddedCore, request: GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<CompanyBenefitsGetEmployeeBenefitsQueryData>;
};
export declare function queryKeyCompanyBenefitsGetEmployeeBenefits(companyBenefitId: string, parameters: {
    page?: number | undefined;
    per?: number | undefined;
    include?: GetV1CompanyBenefitsCompanyBenefitIdEmployeeBenefitsQueryParamInclude | undefined;
    xGustoAPIVersion?: VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=companyBenefitsGetEmployeeBenefits.core.d.ts.map