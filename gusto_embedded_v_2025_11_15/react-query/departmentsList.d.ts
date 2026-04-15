import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type DepartmentsListQueryData = Array<components.Department>;
/**
 * Get all departments of a company
 *
 * @remarks
 * Get all of the departments for a given company with the employees and contractors assigned to that department.
 *
 * scope: `departments:read`
 */
export declare function useDepartmentsList(request: operations.GetCompaniesDepartmentsRequest, options?: QueryHookOptions<DepartmentsListQueryData>): UseQueryResult<DepartmentsListQueryData, Error>;
/**
 * Get all departments of a company
 *
 * @remarks
 * Get all of the departments for a given company with the employees and contractors assigned to that department.
 *
 * scope: `departments:read`
 */
export declare function useDepartmentsListSuspense(request: operations.GetCompaniesDepartmentsRequest, options?: SuspenseQueryHookOptions<DepartmentsListQueryData>): UseSuspenseQueryResult<DepartmentsListQueryData, Error>;
export declare function prefetchDepartmentsList(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetCompaniesDepartmentsRequest): Promise<void>;
export declare function setDepartmentsListData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: DepartmentsListQueryData): DepartmentsListQueryData | undefined;
export declare function invalidateDepartmentsList(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllDepartmentsList(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildDepartmentsListQuery(client$: GustoEmbeddedCore, request: operations.GetCompaniesDepartmentsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<DepartmentsListQueryData>;
};
export declare function queryKeyDepartmentsList(companyUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=departmentsList.d.ts.map