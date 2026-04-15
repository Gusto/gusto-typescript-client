import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeeFormsGetAllQueryData = Array<components.Form>;
/**
 * Get all employee forms
 *
 * @remarks
 * Get a list of all employee's forms
 *
 * scope: `employee_forms:read`
 */
export declare function useEmployeeFormsGetAll(request: operations.GetV1EmployeeFormsRequest, options?: QueryHookOptions<EmployeeFormsGetAllQueryData>): UseQueryResult<EmployeeFormsGetAllQueryData, Error>;
/**
 * Get all employee forms
 *
 * @remarks
 * Get a list of all employee's forms
 *
 * scope: `employee_forms:read`
 */
export declare function useEmployeeFormsGetAllSuspense(request: operations.GetV1EmployeeFormsRequest, options?: SuspenseQueryHookOptions<EmployeeFormsGetAllQueryData>): UseSuspenseQueryResult<EmployeeFormsGetAllQueryData, Error>;
export declare function prefetchEmployeeFormsGetAll(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1EmployeeFormsRequest): Promise<void>;
export declare function setEmployeeFormsGetAllData(client: QueryClient, queryKeyBase: [
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeeFormsGetAllQueryData): EmployeeFormsGetAllQueryData | undefined;
export declare function invalidateEmployeeFormsGetAll(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeeFormsGetAll(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeeFormsGetAllQuery(client$: GustoEmbeddedCore, request: operations.GetV1EmployeeFormsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeeFormsGetAllQueryData>;
};
export declare function queryKeyEmployeeFormsGetAll(employeeId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeeFormsGetAll.d.ts.map