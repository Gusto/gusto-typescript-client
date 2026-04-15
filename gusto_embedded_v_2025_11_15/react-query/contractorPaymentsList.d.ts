import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type ContractorPaymentsListQueryData = operations.GetV1CompaniesCompanyIdContractorPaymentsResponse;
/**
 * Get contractor payments for a company
 *
 * @remarks
 * Returns an object containing individual contractor payments, within a given time period, including totals.
 *
 * scope: `payrolls:read`
 */
export declare function useContractorPaymentsList(request: operations.GetV1CompaniesCompanyIdContractorPaymentsRequest, options?: QueryHookOptions<ContractorPaymentsListQueryData>): UseQueryResult<ContractorPaymentsListQueryData, Error>;
/**
 * Get contractor payments for a company
 *
 * @remarks
 * Returns an object containing individual contractor payments, within a given time period, including totals.
 *
 * scope: `payrolls:read`
 */
export declare function useContractorPaymentsListSuspense(request: operations.GetV1CompaniesCompanyIdContractorPaymentsRequest, options?: SuspenseQueryHookOptions<ContractorPaymentsListQueryData>): UseSuspenseQueryResult<ContractorPaymentsListQueryData, Error>;
export declare function prefetchContractorPaymentsList(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdContractorPaymentsRequest): Promise<void>;
export declare function setContractorPaymentsListData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        startDate: string;
        endDate: string;
        contractorUuid?: string | undefined;
        groupByDate?: boolean | undefined;
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: ContractorPaymentsListQueryData): ContractorPaymentsListQueryData | undefined;
export declare function invalidateContractorPaymentsList(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        startDate: string;
        endDate: string;
        contractorUuid?: string | undefined;
        groupByDate?: boolean | undefined;
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllContractorPaymentsList(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildContractorPaymentsListQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdContractorPaymentsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ContractorPaymentsListQueryData>;
};
export declare function queryKeyContractorPaymentsList(companyId: string, parameters: {
    startDate: string;
    endDate: string;
    contractorUuid?: string | undefined;
    groupByDate?: boolean | undefined;
    page?: number | undefined;
    per?: number | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=contractorPaymentsList.d.ts.map