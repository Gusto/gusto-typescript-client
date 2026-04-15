import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type AchTransactionsGetQueryData = Array<components.AchTransaction>;
/**
 * Get all ACH transactions for a company
 *
 * @remarks
 * Fetches all ACH transactions for a company.
 *
 * scope: `ach_transactions:read`
 */
export declare function useAchTransactionsGet(request: operations.GetAchTransactionsRequest, options?: QueryHookOptions<AchTransactionsGetQueryData>): UseQueryResult<AchTransactionsGetQueryData, Error>;
/**
 * Get all ACH transactions for a company
 *
 * @remarks
 * Fetches all ACH transactions for a company.
 *
 * scope: `ach_transactions:read`
 */
export declare function useAchTransactionsGetSuspense(request: operations.GetAchTransactionsRequest, options?: SuspenseQueryHookOptions<AchTransactionsGetQueryData>): UseSuspenseQueryResult<AchTransactionsGetQueryData, Error>;
export declare function prefetchAchTransactionsGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetAchTransactionsRequest): Promise<void>;
export declare function setAchTransactionsGetData(client: QueryClient, queryKeyBase: [
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
], data: AchTransactionsGetQueryData): AchTransactionsGetQueryData | undefined;
export declare function invalidateAchTransactionsGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
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
export declare function invalidateAllAchTransactionsGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildAchTransactionsGetQuery(client$: GustoEmbeddedCore, request: operations.GetAchTransactionsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<AchTransactionsGetQueryData>;
};
export declare function queryKeyAchTransactionsGet(companyUuid: string, parameters: {
    contractorPaymentUuid?: string | undefined;
    payrollUuid?: string | undefined;
    transactionType?: string | undefined;
    paymentDirection?: string | undefined;
    page?: number | undefined;
    per?: number | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=achTransactionsGet.d.ts.map