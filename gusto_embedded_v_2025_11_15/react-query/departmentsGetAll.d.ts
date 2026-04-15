import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type DepartmentsGetAllQueryData = operations.GetCompaniesDepartmentsResponse;
/**
 * Get all departments of a company
 *
 * @remarks
 * Get all of the departments for a given company with the employees and contractors assigned to that department.
 *
 * scope: `departments:read`
 */
export declare function useDepartmentsGetAll(request: operations.GetCompaniesDepartmentsRequest, options?: QueryHookOptions<DepartmentsGetAllQueryData>): UseQueryResult<DepartmentsGetAllQueryData, Error>;
/**
 * Get all departments of a company
 *
 * @remarks
 * Get all of the departments for a given company with the employees and contractors assigned to that department.
 *
 * scope: `departments:read`
 */
export declare function useDepartmentsGetAllSuspense(request: operations.GetCompaniesDepartmentsRequest, options?: SuspenseQueryHookOptions<DepartmentsGetAllQueryData>): UseSuspenseQueryResult<DepartmentsGetAllQueryData, Error>;
export declare function prefetchDepartmentsGetAll(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetCompaniesDepartmentsRequest): Promise<void>;
export declare function setDepartmentsGetAllData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: DepartmentsGetAllQueryData): DepartmentsGetAllQueryData | undefined;
export declare function invalidateDepartmentsGetAll(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllDepartmentsGetAll(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildDepartmentsGetAllQuery(client$: GustoEmbeddedCore, request: operations.GetCompaniesDepartmentsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<DepartmentsGetAllQueryData>;
};
export declare function queryKeyDepartmentsGetAll(companyUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=departmentsGetAll.d.ts.map