import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeeFormsGetQueryData = operations.GetV1EmployeeFormResponse;
/**
 * Get an employee form
 *
 * @remarks
 * Get an employee form
 *
 * scope: `employee_forms:read`
 */
export declare function useEmployeeFormsGet(request: operations.GetV1EmployeeFormRequest, options?: QueryHookOptions<EmployeeFormsGetQueryData>): UseQueryResult<EmployeeFormsGetQueryData, Error>;
/**
 * Get an employee form
 *
 * @remarks
 * Get an employee form
 *
 * scope: `employee_forms:read`
 */
export declare function useEmployeeFormsGetSuspense(request: operations.GetV1EmployeeFormRequest, options?: SuspenseQueryHookOptions<EmployeeFormsGetQueryData>): UseSuspenseQueryResult<EmployeeFormsGetQueryData, Error>;
export declare function prefetchEmployeeFormsGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1EmployeeFormRequest): Promise<void>;
export declare function setEmployeeFormsGetData(client: QueryClient, queryKeyBase: [
    employeeId: string,
    formId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeeFormsGetQueryData): EmployeeFormsGetQueryData | undefined;
export declare function invalidateEmployeeFormsGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeId: string,
    formId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeeFormsGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeeFormsGetQuery(client$: GustoEmbeddedCore, request: operations.GetV1EmployeeFormRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeeFormsGetQueryData>;
};
export declare function queryKeyEmployeeFormsGet(employeeId: string, formId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeeFormsGet.d.ts.map