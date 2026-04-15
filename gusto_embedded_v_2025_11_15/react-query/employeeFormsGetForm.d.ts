import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeeFormsGetFormQueryData = components.Form;
/**
 * Get an employee form
 *
 * @remarks
 * Get an employee form
 *
 * scope: `employee_forms:read`
 */
export declare function useEmployeeFormsGetForm(request: operations.GetV1EmployeeFormRequest, options?: QueryHookOptions<EmployeeFormsGetFormQueryData>): UseQueryResult<EmployeeFormsGetFormQueryData, Error>;
/**
 * Get an employee form
 *
 * @remarks
 * Get an employee form
 *
 * scope: `employee_forms:read`
 */
export declare function useEmployeeFormsGetFormSuspense(request: operations.GetV1EmployeeFormRequest, options?: SuspenseQueryHookOptions<EmployeeFormsGetFormQueryData>): UseSuspenseQueryResult<EmployeeFormsGetFormQueryData, Error>;
export declare function prefetchEmployeeFormsGetForm(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1EmployeeFormRequest): Promise<void>;
export declare function setEmployeeFormsGetFormData(client: QueryClient, queryKeyBase: [
    employeeId: string,
    formId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeeFormsGetFormQueryData): EmployeeFormsGetFormQueryData | undefined;
export declare function invalidateEmployeeFormsGetForm(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeId: string,
    formId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeeFormsGetForm(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeeFormsGetFormQuery(client$: GustoEmbeddedCore, request: operations.GetV1EmployeeFormRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeeFormsGetFormQueryData>;
};
export declare function queryKeyEmployeeFormsGetForm(employeeId: string, formId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeeFormsGetForm.d.ts.map