import { QueryClient, QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import { GetV1CompanyBenefitsCompanyBenefitIdQueryParamInclude, GetV1CompanyBenefitsCompanyBenefitIdRequest, GetV1CompanyBenefitsCompanyBenefitIdResponse } from "../models/operations/getv1companybenefitscompanybenefitid.js";
export type CompanyBenefitsGetQueryData = GetV1CompanyBenefitsCompanyBenefitIdResponse;
export declare function prefetchCompanyBenefitsGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: GetV1CompanyBenefitsCompanyBenefitIdRequest, options?: RequestOptions): Promise<void>;
export declare function buildCompanyBenefitsGetQuery(client$: GustoEmbeddedCore, request: GetV1CompanyBenefitsCompanyBenefitIdRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<CompanyBenefitsGetQueryData>;
};
export declare function queryKeyCompanyBenefitsGet(companyBenefitId: string, parameters: {
    withEmployeeBenefits?: boolean | undefined;
    include?: GetV1CompanyBenefitsCompanyBenefitIdQueryParamInclude | undefined;
    xGustoAPIVersion?: VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=companyBenefitsGet.core.d.ts.map