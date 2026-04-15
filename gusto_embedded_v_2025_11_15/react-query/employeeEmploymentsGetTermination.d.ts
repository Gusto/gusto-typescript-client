import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeeEmploymentsGetTerminationQueryData = Array<components.Termination>;
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
export declare function useEmployeeEmploymentsGetTermination(request: operations.GetV1EmployeesEmployeeIdTerminationsRequest, options?: QueryHookOptions<EmployeeEmploymentsGetTerminationQueryData>): UseQueryResult<EmployeeEmploymentsGetTerminationQueryData, Error>;
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
export declare function useEmployeeEmploymentsGetTerminationSuspense(request: operations.GetV1EmployeesEmployeeIdTerminationsRequest, options?: SuspenseQueryHookOptions<EmployeeEmploymentsGetTerminationQueryData>): UseSuspenseQueryResult<EmployeeEmploymentsGetTerminationQueryData, Error>;
export declare function prefetchEmployeeEmploymentsGetTermination(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdTerminationsRequest): Promise<void>;
export declare function setEmployeeEmploymentsGetTerminationData(client: QueryClient, queryKeyBase: [
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeeEmploymentsGetTerminationQueryData): EmployeeEmploymentsGetTerminationQueryData | undefined;
export declare function invalidateEmployeeEmploymentsGetTermination(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeeEmploymentsGetTermination(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeeEmploymentsGetTerminationQuery(client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdTerminationsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeeEmploymentsGetTerminationQueryData>;
};
export declare function queryKeyEmployeeEmploymentsGetTermination(employeeId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeeEmploymentsGetTermination.d.ts.map