import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeeFormsListQueryData = operations.GetV1EmployeeFormsResponse;
/**
 * Get all employee forms
 *
 * @remarks
 * Get a list of all employee's forms
 *
 * scope: `employee_forms:read`
 */
export declare function useEmployeeFormsList(request: operations.GetV1EmployeeFormsRequest, options?: QueryHookOptions<EmployeeFormsListQueryData>): UseQueryResult<EmployeeFormsListQueryData, Error>;
/**
 * Get all employee forms
 *
 * @remarks
 * Get a list of all employee's forms
 *
 * scope: `employee_forms:read`
 */
export declare function useEmployeeFormsListSuspense(request: operations.GetV1EmployeeFormsRequest, options?: SuspenseQueryHookOptions<EmployeeFormsListQueryData>): UseSuspenseQueryResult<EmployeeFormsListQueryData, Error>;
export declare function prefetchEmployeeFormsList(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1EmployeeFormsRequest): Promise<void>;
export declare function setEmployeeFormsListData(client: QueryClient, queryKeyBase: [
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeeFormsListQueryData): EmployeeFormsListQueryData | undefined;
export declare function invalidateEmployeeFormsList(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeeFormsList(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeeFormsListQuery(client$: GustoEmbeddedCore, request: operations.GetV1EmployeeFormsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeeFormsListQueryData>;
};
export declare function queryKeyEmployeeFormsList(employeeId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeeFormsList.d.ts.map