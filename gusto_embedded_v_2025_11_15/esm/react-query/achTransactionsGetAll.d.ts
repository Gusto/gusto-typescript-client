import { InvalidateQueryFilters, QueryClient, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { VersionHeader } from "../models/components/versionheader.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { GetAchTransactionsRequest } from "../models/operations/getachtransactions.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
import { AchTransactionsGetAllQueryData, buildAchTransactionsGetAllQuery, prefetchAchTransactionsGetAll, queryKeyAchTransactionsGetAll } from "./achTransactionsGetAll.core.js";
export { type AchTransactionsGetAllQueryData, buildAchTransactionsGetAllQuery, prefetchAchTransactionsGetAll, queryKeyAchTransactionsGetAll, };
export type AchTransactionsGetAllQueryError = GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError;
/**
 * Get all ACH transactions for a company
 *
 * @remarks
 * Fetches all ACH transactions for a company.
 *
 * scope: `ach_transactions:read`
 */
export declare function useAchTransactionsGetAll(request: GetAchTransactionsRequest, options?: QueryHookOptions<AchTransactionsGetAllQueryData, AchTransactionsGetAllQueryError>): UseQueryResult<AchTransactionsGetAllQueryData, AchTransactionsGetAllQueryError>;
/**
 * Get all ACH transactions for a company
 *
 * @remarks
 * Fetches all ACH transactions for a company.
 *
 * scope: `ach_transactions:read`
 */
export declare function useAchTransactionsGetAllSuspense(request: GetAchTransactionsRequest, options?: SuspenseQueryHookOptions<AchTransactionsGetAllQueryData, AchTransactionsGetAllQueryError>): UseSuspenseQueryResult<AchTransactionsGetAllQueryData, AchTransactionsGetAllQueryError>;
export declare function setAchTransactionsGetAllData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    parameters: {
        contractorPaymentUuid?: string | undefined;
        payrollUuid?: string | undefined;
        transactionType?: string | undefined;
        paymentDirection?: string | undefined;
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: VersionHeader | undefined;
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
        xGustoAPIVersion?: VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllAchTransactionsGetAll(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
//# sourceMappingURL=achTransactionsGetAll.d.ts.map