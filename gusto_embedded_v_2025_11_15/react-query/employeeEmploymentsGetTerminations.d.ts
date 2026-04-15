import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeeEmploymentsGetTerminationsQueryData = operations.GetV1EmployeesEmployeeIdTerminationsResponse;
/**
 * Get terminations for an employee
 *
 * @remarks
 * Terminations are created whenever an employee is scheduled to leave the company. The only things required are an effective date (their last day of work) and whether they should receive their wages in a one-off termination payroll or with the rest of the company.
 *
 * Note that some states require employees to receive their final wages within 24 hours (unless they consent otherwise,) in which case running a one-off payroll may be the only option.
 *
 * scope: `employments:read`
 */
export declare function useEmployeeEmploymentsGetTerminations(request: operations.GetV1EmployeesEmployeeIdTerminationsRequest, options?: QueryHookOptions<EmployeeEmploymentsGetTerminationsQueryData>): UseQueryResult<EmployeeEmploymentsGetTerminationsQueryData, Error>;
/**
 * Get terminations for an employee
 *
 * @remarks
 * Terminations are created whenever an employee is scheduled to leave the company. The only things required are an effective date (their last day of work) and whether they should receive their wages in a one-off termination payroll or with the rest of the company.
 *
 * Note that some states require employees to receive their final wages within 24 hours (unless they consent otherwise,) in which case running a one-off payroll may be the only option.
 *
 * scope: `employments:read`
 */
export declare function useEmployeeEmploymentsGetTerminationsSuspense(request: operations.GetV1EmployeesEmployeeIdTerminationsRequest, options?: SuspenseQueryHookOptions<EmployeeEmploymentsGetTerminationsQueryData>): UseSuspenseQueryResult<EmployeeEmploymentsGetTerminationsQueryData, Error>;
export declare function prefetchEmployeeEmploymentsGetTerminations(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdTerminationsRequest): Promise<void>;
export declare function setEmployeeEmploymentsGetTerminationsData(client: QueryClient, queryKeyBase: [
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeeEmploymentsGetTerminationsQueryData): EmployeeEmploymentsGetTerminationsQueryData | undefined;
export declare function invalidateEmployeeEmploymentsGetTerminations(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeeEmploymentsGetTerminations(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeeEmploymentsGetTerminationsQuery(client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdTerminationsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeeEmploymentsGetTerminationsQueryData>;
};
export declare function queryKeyEmployeeEmploymentsGetTerminations(employeeId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeeEmploymentsGetTerminations.d.ts.map