import { QueryClient, QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GetV1CompaniesCompanyIdContractorPaymentGroupsHeaderXGustoAPIVersion, GetV1CompaniesCompanyIdContractorPaymentGroupsRequest, GetV1CompaniesCompanyIdContractorPaymentGroupsResponse } from "../models/operations/getv1companiescompanyidcontractorpaymentgroups.js";
export type ContractorPaymentGroupsGetListQueryData = GetV1CompaniesCompanyIdContractorPaymentGroupsResponse;
export declare function prefetchContractorPaymentGroupsGetList(queryClient: QueryClient, client$: GustoEmbeddedCore, request: GetV1CompaniesCompanyIdContractorPaymentGroupsRequest, options?: RequestOptions): Promise<void>;
export declare function buildContractorPaymentGroupsGetListQuery(client$: GustoEmbeddedCore, request: GetV1CompaniesCompanyIdContractorPaymentGroupsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ContractorPaymentGroupsGetListQueryData>;
};
export declare function queryKeyContractorPaymentGroupsGetList(companyId: string, parameters: {
    startDate?: string | undefined;
    endDate?: string | undefined;
    page?: number | undefined;
    per?: number | undefined;
    xGustoAPIVersion?: GetV1CompaniesCompanyIdContractorPaymentGroupsHeaderXGustoAPIVersion | undefined;
}): QueryKey;
//# sourceMappingURL=contractorPaymentGroupsGetList.core.d.ts.map