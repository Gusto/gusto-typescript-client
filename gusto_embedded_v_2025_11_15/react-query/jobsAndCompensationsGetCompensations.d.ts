import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type JobsAndCompensationsGetCompensationsQueryData = operations.GetV1JobsJobIdCompensationsResponse;
/**
 * Get compensations for a job
 *
 * @remarks
 * Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`. By default the API returns only the current compensation - see the `include` query parameter for retrieving all compensations.
 *
 * Note: Currently the API does not support creating multiple compensations per job - creating a compensation with the same `job_uuid` as another will fail with a relevant error.
 *
 * Use `flsa_status` to determine if an employee is eligible for overtime.
 *
 * scope: `jobs:read`
 */
export declare function useJobsAndCompensationsGetCompensations(request: operations.GetV1JobsJobIdCompensationsRequest, options?: QueryHookOptions<JobsAndCompensationsGetCompensationsQueryData>): UseQueryResult<JobsAndCompensationsGetCompensationsQueryData, Error>;
/**
 * Get compensations for a job
 *
 * @remarks
 * Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`. By default the API returns only the current compensation - see the `include` query parameter for retrieving all compensations.
 *
 * Note: Currently the API does not support creating multiple compensations per job - creating a compensation with the same `job_uuid` as another will fail with a relevant error.
 *
 * Use `flsa_status` to determine if an employee is eligible for overtime.
 *
 * scope: `jobs:read`
 */
export declare function useJobsAndCompensationsGetCompensationsSuspense(request: operations.GetV1JobsJobIdCompensationsRequest, options?: SuspenseQueryHookOptions<JobsAndCompensationsGetCompensationsQueryData>): UseSuspenseQueryResult<JobsAndCompensationsGetCompensationsQueryData, Error>;
export declare function prefetchJobsAndCompensationsGetCompensations(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1JobsJobIdCompensationsRequest): Promise<void>;
export declare function setJobsAndCompensationsGetCompensationsData(client: QueryClient, queryKeyBase: [
    jobId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        include?: operations.GetV1JobsJobIdCompensationsQueryParamInclude | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: JobsAndCompensationsGetCompensationsQueryData): JobsAndCompensationsGetCompensationsQueryData | undefined;
export declare function invalidateJobsAndCompensationsGetCompensations(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    jobId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        include?: operations.GetV1JobsJobIdCompensationsQueryParamInclude | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllJobsAndCompensationsGetCompensations(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildJobsAndCompensationsGetCompensationsQuery(client$: GustoEmbeddedCore, request: operations.GetV1JobsJobIdCompensationsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<JobsAndCompensationsGetCompensationsQueryData>;
};
export declare function queryKeyJobsAndCompensationsGetCompensations(jobId: string, parameters: {
    page?: number | undefined;
    per?: number | undefined;
    include?: operations.GetV1JobsJobIdCompensationsQueryParamInclude | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=jobsAndCompensationsGetCompensations.d.ts.map