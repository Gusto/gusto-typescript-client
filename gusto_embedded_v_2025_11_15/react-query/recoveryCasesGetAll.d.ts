import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type RecoveryCasesGetAllQueryData = Array<components.RecoveryCase>;
/**
 * Get all recovery cases for a company
 *
 * @remarks
 * Fetch all recovery cases for a company.
 *
 * scope: `recovery_cases:read`
 */
export declare function useRecoveryCasesGetAll(request: operations.GetRecoveryCasesRequest, options?: QueryHookOptions<RecoveryCasesGetAllQueryData>): UseQueryResult<RecoveryCasesGetAllQueryData, Error>;
/**
 * Get all recovery cases for a company
 *
 * @remarks
 * Fetch all recovery cases for a company.
 *
 * scope: `recovery_cases:read`
 */
export declare function useRecoveryCasesGetAllSuspense(request: operations.GetRecoveryCasesRequest, options?: SuspenseQueryHookOptions<RecoveryCasesGetAllQueryData>): UseSuspenseQueryResult<RecoveryCasesGetAllQueryData, Error>;
export declare function prefetchRecoveryCasesGetAll(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetRecoveryCasesRequest): Promise<void>;
export declare function setRecoveryCasesGetAllData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: RecoveryCasesGetAllQueryData): RecoveryCasesGetAllQueryData | undefined;
export declare function invalidateRecoveryCasesGetAll(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllRecoveryCasesGetAll(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildRecoveryCasesGetAllQuery(client$: GustoEmbeddedCore, request: operations.GetRecoveryCasesRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<RecoveryCasesGetAllQueryData>;
};
export declare function queryKeyRecoveryCasesGetAll(companyUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=recoveryCasesGetAll.d.ts.map