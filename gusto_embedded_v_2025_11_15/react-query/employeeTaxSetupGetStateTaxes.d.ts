import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeeTaxSetupGetStateTaxesQueryData = operations.GetV1EmployeesEmployeeIdStateTaxesResponse;
/**
 * Get an employee's state taxes
 *
 * @remarks
 * Get attributes relevant for an employee's state taxes.
 *
 * The data required to correctly calculate an employee's state taxes varies by both home and work location. This API returns information about each question that must be answered grouped by state. Mostly commonly, an employee lives and works in the same state and will only have questions for a single state. The response contains metadata about each question, the type of answer expected, and the current answer stored in Gusto for that question.
 *
 * Answers are represented by an array. Today, this array can only be empty or contain exactly one element, but is designed to allow for forward compatibility with effective-dated fields. Until effective dated answers are supported, the `valid_from` and `valid_up_to` must always be `"2010-01-01"` and `null` respectively.
 *
 * ## About filing new hire reports
 * Payroll Admins are responsible for filing a new hire report for each Employee. The `file_new_hire_report` question will only be listed if:
 * - the `employee.onboarding_status` is one of the following:
 *   - `admin_onboarding_incomplete`
 *   - `self_onboarding_awaiting_admin_review`
 * - that employee's work state requires filing a new hire report
 *
 * scope: `employee_state_taxes:read`
 */
export declare function useEmployeeTaxSetupGetStateTaxes(request: operations.GetV1EmployeesEmployeeIdStateTaxesRequest, options?: QueryHookOptions<EmployeeTaxSetupGetStateTaxesQueryData>): UseQueryResult<EmployeeTaxSetupGetStateTaxesQueryData, Error>;
/**
 * Get an employee's state taxes
 *
 * @remarks
 * Get attributes relevant for an employee's state taxes.
 *
 * The data required to correctly calculate an employee's state taxes varies by both home and work location. This API returns information about each question that must be answered grouped by state. Mostly commonly, an employee lives and works in the same state and will only have questions for a single state. The response contains metadata about each question, the type of answer expected, and the current answer stored in Gusto for that question.
 *
 * Answers are represented by an array. Today, this array can only be empty or contain exactly one element, but is designed to allow for forward compatibility with effective-dated fields. Until effective dated answers are supported, the `valid_from` and `valid_up_to` must always be `"2010-01-01"` and `null` respectively.
 *
 * ## About filing new hire reports
 * Payroll Admins are responsible for filing a new hire report for each Employee. The `file_new_hire_report` question will only be listed if:
 * - the `employee.onboarding_status` is one of the following:
 *   - `admin_onboarding_incomplete`
 *   - `self_onboarding_awaiting_admin_review`
 * - that employee's work state requires filing a new hire report
 *
 * scope: `employee_state_taxes:read`
 */
export declare function useEmployeeTaxSetupGetStateTaxesSuspense(request: operations.GetV1EmployeesEmployeeIdStateTaxesRequest, options?: SuspenseQueryHookOptions<EmployeeTaxSetupGetStateTaxesQueryData>): UseSuspenseQueryResult<EmployeeTaxSetupGetStateTaxesQueryData, Error>;
export declare function prefetchEmployeeTaxSetupGetStateTaxes(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdStateTaxesRequest): Promise<void>;
export declare function setEmployeeTaxSetupGetStateTaxesData(client: QueryClient, queryKeyBase: [
    employeeUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeeTaxSetupGetStateTaxesQueryData): EmployeeTaxSetupGetStateTaxesQueryData | undefined;
export declare function invalidateEmployeeTaxSetupGetStateTaxes(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeeTaxSetupGetStateTaxes(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeeTaxSetupGetStateTaxesQuery(client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdStateTaxesRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeeTaxSetupGetStateTaxesQueryData>;
};
export declare function queryKeyEmployeeTaxSetupGetStateTaxes(employeeUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeeTaxSetupGetStateTaxes.d.ts.map