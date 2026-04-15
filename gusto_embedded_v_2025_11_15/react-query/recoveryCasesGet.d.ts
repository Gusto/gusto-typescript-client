import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type RecoveryCasesGetQueryData = operations.GetRecoveryCasesResponse;
/**
 * Get all recovery cases for a company
 *
 * @remarks
 * Fetch all recovery cases for a company.
 *
 * scope: `recovery_cases:read`
 */
export declare function useRecoveryCasesGet(request: operations.GetRecoveryCasesRequest, options?: QueryHookOptions<RecoveryCasesGetQueryData>): UseQueryResult<RecoveryCasesGetQueryData, Error>;
/**
 * Get all recovery cases for a company
 *
 * @remarks
 * Fetch all recovery cases for a company.
 *
 * scope: `recovery_cases:read`
 */
export declare function useRecoveryCasesGetSuspense(request: operations.GetRecoveryCasesRequest, options?: SuspenseQueryHookOptions<RecoveryCasesGetQueryData>): UseSuspenseQueryResult<RecoveryCasesGetQueryData, Error>;
export declare function prefetchRecoveryCasesGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetRecoveryCasesRequest): Promise<void>;
export declare function setRecoveryCasesGetData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: RecoveryCasesGetQueryData): RecoveryCasesGetQueryData | undefined;
export declare function invalidateRecoveryCasesGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllRecoveryCasesGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildRecoveryCasesGetQuery(client$: GustoEmbeddedCore, request: operations.GetRecoveryCasesRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<RecoveryCasesGetQueryData>;
};
export declare function queryKeyRecoveryCasesGet(companyUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=recoveryCasesGet.d.ts.map