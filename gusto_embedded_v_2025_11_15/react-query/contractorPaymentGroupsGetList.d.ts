import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type ContractorPaymentGroupsGetListQueryData = operations.GetV1CompaniesCompanyIdContractorPaymentGroupsResponse;
/**
 * Get contractor payment groups for a company
 *
 * @remarks
 * Returns a list of minimal contractor payment groups within a given time period, including totals but not associated contractor payments.
 *
 * scope: `payrolls:read`
 */
export declare function useContractorPaymentGroupsGetList(request: operations.GetV1CompaniesCompanyIdContractorPaymentGroupsRequest, options?: QueryHookOptions<ContractorPaymentGroupsGetListQueryData>): UseQueryResult<ContractorPaymentGroupsGetListQueryData, Error>;
/**
 * Get contractor payment groups for a company
 *
 * @remarks
 * Returns a list of minimal contractor payment groups within a given time period, including totals but not associated contractor payments.
 *
 * scope: `payrolls:read`
 */
export declare function useContractorPaymentGroupsGetListSuspense(request: operations.GetV1CompaniesCompanyIdContractorPaymentGroupsRequest, options?: SuspenseQueryHookOptions<ContractorPaymentGroupsGetListQueryData>): UseSuspenseQueryResult<ContractorPaymentGroupsGetListQueryData, Error>;
export declare function prefetchContractorPaymentGroupsGetList(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdContractorPaymentGroupsRequest): Promise<void>;
export declare function setContractorPaymentGroupsGetListData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        startDate?: string | undefined;
        endDate?: string | undefined;
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: ContractorPaymentGroupsGetListQueryData): ContractorPaymentGroupsGetListQueryData | undefined;
export declare function invalidateContractorPaymentGroupsGetList(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        startDate?: string | undefined;
        endDate?: string | undefined;
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllContractorPaymentGroupsGetList(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildContractorPaymentGroupsGetListQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdContractorPaymentGroupsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ContractorPaymentGroupsGetListQueryData>;
};
export declare function queryKeyContractorPaymentGroupsGetList(companyId: string, parameters: {
    startDate?: string | undefined;
    endDate?: string | undefined;
    page?: number | undefined;
    per?: number | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=contractorPaymentGroupsGetList.d.ts.map