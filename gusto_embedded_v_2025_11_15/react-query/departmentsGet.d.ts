import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type DepartmentsGetQueryData = operations.GetDepartmentResponse;
/**
 * Get a department
 *
 * @remarks
 * Get a department given the UUID
 *
 * scope: `departments:read`
 */
export declare function useDepartmentsGet(request: operations.GetDepartmentRequest, options?: QueryHookOptions<DepartmentsGetQueryData>): UseQueryResult<DepartmentsGetQueryData, Error>;
/**
 * Get a department
 *
 * @remarks
 * Get a department given the UUID
 *
 * scope: `departments:read`
 */
export declare function useDepartmentsGetSuspense(request: operations.GetDepartmentRequest, options?: SuspenseQueryHookOptions<DepartmentsGetQueryData>): UseSuspenseQueryResult<DepartmentsGetQueryData, Error>;
export declare function prefetchDepartmentsGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetDepartmentRequest): Promise<void>;
export declare function setDepartmentsGetData(client: QueryClient, queryKeyBase: [
    departmentUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: DepartmentsGetQueryData): DepartmentsGetQueryData | undefined;
export declare function invalidateDepartmentsGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    departmentUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllDepartmentsGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildDepartmentsGetQuery(client$: GustoEmbeddedCore, request: operations.GetDepartmentRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<DepartmentsGetQueryData>;
};
export declare function queryKeyDepartmentsGet(departmentUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=departmentsGet.d.ts.map