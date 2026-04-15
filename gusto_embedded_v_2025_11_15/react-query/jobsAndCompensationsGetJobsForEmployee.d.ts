import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type JobsAndCompensationsGetJobsForEmployeeQueryData = Array<components.Job>;
/**
 * Get jobs for an employee
 *
 * @remarks
 * Get all of the jobs that an employee holds.
 *
 * scope: `jobs:read`
 */
export declare function useJobsAndCompensationsGetJobsForEmployee(request: operations.GetV1EmployeesEmployeeIdJobsRequest, options?: QueryHookOptions<JobsAndCompensationsGetJobsForEmployeeQueryData>): UseQueryResult<JobsAndCompensationsGetJobsForEmployeeQueryData, Error>;
/**
 * Get jobs for an employee
 *
 * @remarks
 * Get all of the jobs that an employee holds.
 *
 * scope: `jobs:read`
 */
export declare function useJobsAndCompensationsGetJobsForEmployeeSuspense(request: operations.GetV1EmployeesEmployeeIdJobsRequest, options?: SuspenseQueryHookOptions<JobsAndCompensationsGetJobsForEmployeeQueryData>): UseSuspenseQueryResult<JobsAndCompensationsGetJobsForEmployeeQueryData, Error>;
export declare function prefetchJobsAndCompensationsGetJobsForEmployee(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdJobsRequest): Promise<void>;
export declare function setJobsAndCompensationsGetJobsForEmployeeData(client: QueryClient, queryKeyBase: [
    employeeId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        include?: operations.GetV1EmployeesEmployeeIdJobsQueryParamInclude | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: JobsAndCompensationsGetJobsForEmployeeQueryData): JobsAndCompensationsGetJobsForEmployeeQueryData | undefined;
export declare function invalidateJobsAndCompensationsGetJobsForEmployee(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        include?: operations.GetV1EmployeesEmployeeIdJobsQueryParamInclude | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllJobsAndCompensationsGetJobsForEmployee(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildJobsAndCompensationsGetJobsForEmployeeQuery(client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdJobsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<JobsAndCompensationsGetJobsForEmployeeQueryData>;
};
export declare function queryKeyJobsAndCompensationsGetJobsForEmployee(employeeId: string, parameters: {
    page?: number | undefined;
    per?: number | undefined;
    include?: operations.GetV1EmployeesEmployeeIdJobsQueryParamInclude | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=jobsAndCompensationsGetJobsForEmployee.d.ts.map