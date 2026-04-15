import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type ContractorPaymentGroupsListQueryData = Array<components.ContractorPaymentGroupMinimal>;
/**
 * Get contractor payment groups for a company
 *
 * @remarks
 * Returns a list of minimal contractor payment groups within a given time period, including totals but not associated contractor payments.
 *
 * scope: `payrolls:read`
 */
export declare function useContractorPaymentGroupsList(request: operations.GetV1CompaniesCompanyIdContractorPaymentGroupsRequest, options?: QueryHookOptions<ContractorPaymentGroupsListQueryData>): UseQueryResult<ContractorPaymentGroupsListQueryData, Error>;
/**
 * Get contractor payment groups for a company
 *
 * @remarks
 * Returns a list of minimal contractor payment groups within a given time period, including totals but not associated contractor payments.
 *
 * scope: `payrolls:read`
 */
export declare function useContractorPaymentGroupsListSuspense(request: operations.GetV1CompaniesCompanyIdContractorPaymentGroupsRequest, options?: SuspenseQueryHookOptions<ContractorPaymentGroupsListQueryData>): UseSuspenseQueryResult<ContractorPaymentGroupsListQueryData, Error>;
export declare function prefetchContractorPaymentGroupsList(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdContractorPaymentGroupsRequest): Promise<void>;
export declare function setContractorPaymentGroupsListData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        startDate?: string | undefined;
        endDate?: string | undefined;
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: ContractorPaymentGroupsListQueryData): ContractorPaymentGroupsListQueryData | undefined;
export declare function invalidateContractorPaymentGroupsList(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        startDate?: string | undefined;
        endDate?: string | undefined;
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllContractorPaymentGroupsList(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildContractorPaymentGroupsListQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdContractorPaymentGroupsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ContractorPaymentGroupsListQueryData>;
};
export declare function queryKeyContractorPaymentGroupsList(companyId: string, parameters: {
    startDate?: string | undefined;
    endDate?: string | undefined;
    page?: number | undefined;
    per?: number | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=contractorPaymentGroupsList.d.ts.map