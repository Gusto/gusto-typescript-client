import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type ContractorPaymentsGetPaymentsQueryData = operations.GetV1CompaniesCompanyIdContractorPaymentsResponseBody;
/**
 * Get contractor payments for a company
 *
 * @remarks
 * Returns an object containing individual contractor payments, within a given time period, including totals.
 *
 * scope: `payrolls:read`
 */
export declare function useContractorPaymentsGetPayments(request: operations.GetV1CompaniesCompanyIdContractorPaymentsRequest, options?: QueryHookOptions<ContractorPaymentsGetPaymentsQueryData>): UseQueryResult<ContractorPaymentsGetPaymentsQueryData, Error>;
/**
 * Get contractor payments for a company
 *
 * @remarks
 * Returns an object containing individual contractor payments, within a given time period, including totals.
 *
 * scope: `payrolls:read`
 */
export declare function useContractorPaymentsGetPaymentsSuspense(request: operations.GetV1CompaniesCompanyIdContractorPaymentsRequest, options?: SuspenseQueryHookOptions<ContractorPaymentsGetPaymentsQueryData>): UseSuspenseQueryResult<ContractorPaymentsGetPaymentsQueryData, Error>;
export declare function prefetchContractorPaymentsGetPayments(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdContractorPaymentsRequest): Promise<void>;
export declare function setContractorPaymentsGetPaymentsData(client: QueryClient, queryKeyBase: [
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
], data: ContractorPaymentsGetPaymentsQueryData): ContractorPaymentsGetPaymentsQueryData | undefined;
export declare function invalidateContractorPaymentsGetPayments(client: QueryClient, queryKeyBase: TupleToPrefixes<[
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
export declare function invalidateAllContractorPaymentsGetPayments(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildContractorPaymentsGetPaymentsQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdContractorPaymentsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ContractorPaymentsGetPaymentsQueryData>;
};
export declare function queryKeyContractorPaymentsGetPayments(companyId: string, parameters: {
    startDate: string;
    endDate: string;
    contractorUuid?: string | undefined;
    groupByDate?: boolean | undefined;
    page?: number | undefined;
    per?: number | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=contractorPaymentsGetPayments.d.ts.map