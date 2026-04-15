import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeeBenefitsGetQueryData = operations.GetV1EmployeesEmployeeIdEmployeeBenefitsResponse;
/**
 * Get all benefits for an employee
 *
 * @remarks
 * Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.
 *
 * Returns an array of all employee benefits for this employee
 *
 * Benefits containing PHI are only visible to applications with the `employee_benefits:read:phi` scope.
 *
 * scope: `employee_benefits:read`
 */
export declare function useEmployeeBenefitsGet(request: operations.GetV1EmployeesEmployeeIdEmployeeBenefitsRequest, options?: QueryHookOptions<EmployeeBenefitsGetQueryData>): UseQueryResult<EmployeeBenefitsGetQueryData, Error>;
/**
 * Get all benefits for an employee
 *
 * @remarks
 * Employee benefits represent an employee enrolled in a particular company benefit. It includes information specific to that employee’s enrollment.
 *
 * Returns an array of all employee benefits for this employee
 *
 * Benefits containing PHI are only visible to applications with the `employee_benefits:read:phi` scope.
 *
 * scope: `employee_benefits:read`
 */
export declare function useEmployeeBenefitsGetSuspense(request: operations.GetV1EmployeesEmployeeIdEmployeeBenefitsRequest, options?: SuspenseQueryHookOptions<EmployeeBenefitsGetQueryData>): UseSuspenseQueryResult<EmployeeBenefitsGetQueryData, Error>;
export declare function prefetchEmployeeBenefitsGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdEmployeeBenefitsRequest): Promise<void>;
export declare function setEmployeeBenefitsGetData(client: QueryClient, queryKeyBase: [
    employeeId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeeBenefitsGetQueryData): EmployeeBenefitsGetQueryData | undefined;
export declare function invalidateEmployeeBenefitsGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeeBenefitsGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeeBenefitsGetQuery(client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdEmployeeBenefitsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeeBenefitsGetQueryData>;
};
export declare function queryKeyEmployeeBenefitsGet(employeeId: string, parameters: {
    page?: number | undefined;
    per?: number | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeeBenefitsGet.d.ts.map