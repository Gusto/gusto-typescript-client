import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type AchTransactionsGetAllQueryData = operations.GetAchTransactionsResponse;
/**
 * Get all ACH transactions for a company
 *
 * @remarks
 * Fetches all ACH transactions for a company.
 *
 * scope: `ach_transactions:read`
 */
export declare function useAchTransactionsGetAll(request: operations.GetAchTransactionsRequest, options?: QueryHookOptions<AchTransactionsGetAllQueryData>): UseQueryResult<AchTransactionsGetAllQueryData, Error>;
/**
 * Get all ACH transactions for a company
 *
 * @remarks
 * Fetches all ACH transactions for a company.
 *
 * scope: `ach_transactions:read`
 */
export declare function useAchTransactionsGetAllSuspense(request: operations.GetAchTransactionsRequest, options?: SuspenseQueryHookOptions<AchTransactionsGetAllQueryData>): UseSuspenseQueryResult<AchTransactionsGetAllQueryData, Error>;
export declare function prefetchAchTransactionsGetAll(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetAchTransactionsRequest): Promise<void>;
export declare function setAchTransactionsGetAllData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    parameters: {
        contractorPaymentUuid?: string | undefined;
        payrollUuid?: string | undefined;
        transactionType?: string | undefined;
        paymentDirection?: string | undefined;
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: AchTransactionsGetAllQueryData): AchTransactionsGetAllQueryData | undefined;
export declare function invalidateAchTransactionsGetAll(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyUuid: string,
    parameters: {
        contractorPaymentUuid?: string | undefined;
        payrollUuid?: string | undefined;
        transactionType?: string | undefined;
        paymentDirection?: string | undefined;
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllAchTransactionsGetAll(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildAchTransactionsGetAllQuery(client$: GustoEmbeddedCore, request: operations.GetAchTransactionsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<AchTransactionsGetAllQueryData>;
};
export declare function queryKeyAchTransactionsGetAll(companyUuid: string, parameters: {
    contractorPaymentUuid?: string | undefined;
    payrollUuid?: string | undefined;
    transactionType?: string | undefined;
    paymentDirection?: string | undefined;
    page?: number | undefined;
    per?: number | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=achTransactionsGetAll.d.ts.map