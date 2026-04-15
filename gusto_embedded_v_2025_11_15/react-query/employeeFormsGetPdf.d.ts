import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeeFormsGetPdfQueryData = operations.GetV1EmployeeFormPdfResponse;
/**
 * Get the employee form pdf
 *
 * @remarks
 * Get the link to the employee form PDF
 *
 * scope: `employee_forms:read`
 */
export declare function useEmployeeFormsGetPdf(request: operations.GetV1EmployeeFormPdfRequest, options?: QueryHookOptions<EmployeeFormsGetPdfQueryData>): UseQueryResult<EmployeeFormsGetPdfQueryData, Error>;
/**
 * Get the employee form pdf
 *
 * @remarks
 * Get the link to the employee form PDF
 *
 * scope: `employee_forms:read`
 */
export declare function useEmployeeFormsGetPdfSuspense(request: operations.GetV1EmployeeFormPdfRequest, options?: SuspenseQueryHookOptions<EmployeeFormsGetPdfQueryData>): UseSuspenseQueryResult<EmployeeFormsGetPdfQueryData, Error>;
export declare function prefetchEmployeeFormsGetPdf(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1EmployeeFormPdfRequest): Promise<void>;
export declare function setEmployeeFormsGetPdfData(client: QueryClient, queryKeyBase: [
    employeeId: string,
    formId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeeFormsGetPdfQueryData): EmployeeFormsGetPdfQueryData | undefined;
export declare function invalidateEmployeeFormsGetPdf(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeId: string,
    formId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeeFormsGetPdf(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeeFormsGetPdfQuery(client$: GustoEmbeddedCore, request: operations.GetV1EmployeeFormPdfRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeeFormsGetPdfQueryData>;
};
export declare function queryKeyEmployeeFormsGetPdf(employeeId: string, formId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeeFormsGetPdf.d.ts.map