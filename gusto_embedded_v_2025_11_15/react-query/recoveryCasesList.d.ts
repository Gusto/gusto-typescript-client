import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type RecoveryCasesListQueryData = Array<components.RecoveryCase>;
/**
 * Get all recovery cases for a company
 *
 * @remarks
 * Fetch all recovery cases for a company.
 *
 * scope: `recovery_cases:read`
 */
export declare function useRecoveryCasesList(request: operations.GetRecoveryCasesRequest, options?: QueryHookOptions<RecoveryCasesListQueryData>): UseQueryResult<RecoveryCasesListQueryData, Error>;
/**
 * Get all recovery cases for a company
 *
 * @remarks
 * Fetch all recovery cases for a company.
 *
 * scope: `recovery_cases:read`
 */
export declare function useRecoveryCasesListSuspense(request: operations.GetRecoveryCasesRequest, options?: SuspenseQueryHookOptions<RecoveryCasesListQueryData>): UseSuspenseQueryResult<RecoveryCasesListQueryData, Error>;
export declare function prefetchRecoveryCasesList(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetRecoveryCasesRequest): Promise<void>;
export declare function setRecoveryCasesListData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: RecoveryCasesListQueryData): RecoveryCasesListQueryData | undefined;
export declare function invalidateRecoveryCasesList(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllRecoveryCasesList(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildRecoveryCasesListQuery(client$: GustoEmbeddedCore, request: operations.GetRecoveryCasesRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<RecoveryCasesListQueryData>;
};
export declare function queryKeyRecoveryCasesList(companyUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=recoveryCasesList.d.ts.map