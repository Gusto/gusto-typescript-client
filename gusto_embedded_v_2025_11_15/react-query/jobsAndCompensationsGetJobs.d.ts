import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type JobsAndCompensationsGetJobsQueryData = operations.GetV1EmployeesEmployeeIdJobsResponse;
/**
 * Get jobs for an employee
 *
 * @remarks
 * Get all of the jobs that an employee holds.
 *
 * scope: `jobs:read`
 */
export declare function useJobsAndCompensationsGetJobs(request: operations.GetV1EmployeesEmployeeIdJobsRequest, options?: QueryHookOptions<JobsAndCompensationsGetJobsQueryData>): UseQueryResult<JobsAndCompensationsGetJobsQueryData, Error>;
/**
 * Get jobs for an employee
 *
 * @remarks
 * Get all of the jobs that an employee holds.
 *
 * scope: `jobs:read`
 */
export declare function useJobsAndCompensationsGetJobsSuspense(request: operations.GetV1EmployeesEmployeeIdJobsRequest, options?: SuspenseQueryHookOptions<JobsAndCompensationsGetJobsQueryData>): UseSuspenseQueryResult<JobsAndCompensationsGetJobsQueryData, Error>;
export declare function prefetchJobsAndCompensationsGetJobs(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdJobsRequest): Promise<void>;
export declare function setJobsAndCompensationsGetJobsData(client: QueryClient, queryKeyBase: [
    employeeId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        include?: operations.GetV1EmployeesEmployeeIdJobsQueryParamInclude | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: JobsAndCompensationsGetJobsQueryData): JobsAndCompensationsGetJobsQueryData | undefined;
export declare function invalidateJobsAndCompensationsGetJobs(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        include?: operations.GetV1EmployeesEmployeeIdJobsQueryParamInclude | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllJobsAndCompensationsGetJobs(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildJobsAndCompensationsGetJobsQuery(client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdJobsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<JobsAndCompensationsGetJobsQueryData>;
};
export declare function queryKeyJobsAndCompensationsGetJobs(employeeId: string, parameters: {
    page?: number | undefined;
    per?: number | undefined;
    include?: operations.GetV1EmployeesEmployeeIdJobsQueryParamInclude | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=jobsAndCompensationsGetJobs.d.ts.map