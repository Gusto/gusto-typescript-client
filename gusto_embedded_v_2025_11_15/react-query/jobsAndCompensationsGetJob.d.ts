import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type JobsAndCompensationsGetJobQueryData = operations.GetV1JobsJobIdResponse;
/**
 * Get a job
 *
 * @remarks
 * Get a job.
 *
 * scope: `jobs:read`
 */
export declare function useJobsAndCompensationsGetJob(request: operations.GetV1JobsJobIdRequest, options?: QueryHookOptions<JobsAndCompensationsGetJobQueryData>): UseQueryResult<JobsAndCompensationsGetJobQueryData, Error>;
/**
 * Get a job
 *
 * @remarks
 * Get a job.
 *
 * scope: `jobs:read`
 */
export declare function useJobsAndCompensationsGetJobSuspense(request: operations.GetV1JobsJobIdRequest, options?: SuspenseQueryHookOptions<JobsAndCompensationsGetJobQueryData>): UseSuspenseQueryResult<JobsAndCompensationsGetJobQueryData, Error>;
export declare function prefetchJobsAndCompensationsGetJob(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1JobsJobIdRequest): Promise<void>;
export declare function setJobsAndCompensationsGetJobData(client: QueryClient, queryKeyBase: [
    jobId: string,
    parameters: {
        include?: operations.GetV1JobsJobIdQueryParamInclude | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: JobsAndCompensationsGetJobQueryData): JobsAndCompensationsGetJobQueryData | undefined;
export declare function invalidateJobsAndCompensationsGetJob(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    jobId: string,
    parameters: {
        include?: operations.GetV1JobsJobIdQueryParamInclude | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllJobsAndCompensationsGetJob(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildJobsAndCompensationsGetJobQuery(client$: GustoEmbeddedCore, request: operations.GetV1JobsJobIdRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<JobsAndCompensationsGetJobQueryData>;
};
export declare function queryKeyJobsAndCompensationsGetJob(jobId: string, parameters: {
    include?: operations.GetV1JobsJobIdQueryParamInclude | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=jobsAndCompensationsGetJob.d.ts.map