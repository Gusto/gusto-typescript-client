import { InvalidateQueryFilters, QueryClient, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { VersionHeader } from "../models/components/versionheader.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { GetV1JobsJobIdQueryParamInclude, GetV1JobsJobIdRequest } from "../models/operations/getv1jobsjobid.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
import { buildJobsAndCompensationsGetJobQuery, JobsAndCompensationsGetJobQueryData, prefetchJobsAndCompensationsGetJob, queryKeyJobsAndCompensationsGetJob } from "./jobsAndCompensationsGetJob.core.js";
export { buildJobsAndCompensationsGetJobQuery, type JobsAndCompensationsGetJobQueryData, prefetchJobsAndCompensationsGetJob, queryKeyJobsAndCompensationsGetJob, };
export type JobsAndCompensationsGetJobQueryError = GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError;
/**
 * Get a job
 *
 * @remarks
 * Get a job.
 *
 * Note: Compensation data (pay rate, payment unit, and related fields) represents sensitive employee pay information. These fields (`rate`, `payment_unit`, `current_compensation_uuid`, `compensations`) are returned only when the `compensations:read` scope is included.
 *
 * scope: `jobs:read`
 */
export declare function useJobsAndCompensationsGetJob(request: GetV1JobsJobIdRequest, options?: QueryHookOptions<JobsAndCompensationsGetJobQueryData, JobsAndCompensationsGetJobQueryError>): UseQueryResult<JobsAndCompensationsGetJobQueryData, JobsAndCompensationsGetJobQueryError>;
/**
 * Get a job
 *
 * @remarks
 * Get a job.
 *
 * Note: Compensation data (pay rate, payment unit, and related fields) represents sensitive employee pay information. These fields (`rate`, `payment_unit`, `current_compensation_uuid`, `compensations`) are returned only when the `compensations:read` scope is included.
 *
 * scope: `jobs:read`
 */
export declare function useJobsAndCompensationsGetJobSuspense(request: GetV1JobsJobIdRequest, options?: SuspenseQueryHookOptions<JobsAndCompensationsGetJobQueryData, JobsAndCompensationsGetJobQueryError>): UseSuspenseQueryResult<JobsAndCompensationsGetJobQueryData, JobsAndCompensationsGetJobQueryError>;
export declare function setJobsAndCompensationsGetJobData(client: QueryClient, queryKeyBase: [
    jobId: string,
    parameters: {
        include?: GetV1JobsJobIdQueryParamInclude | undefined;
        xGustoAPIVersion?: VersionHeader | undefined;
    }
], data: JobsAndCompensationsGetJobQueryData): JobsAndCompensationsGetJobQueryData | undefined;
export declare function invalidateJobsAndCompensationsGetJob(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    jobId: string,
    parameters: {
        include?: GetV1JobsJobIdQueryParamInclude | undefined;
        xGustoAPIVersion?: VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllJobsAndCompensationsGetJob(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
//# sourceMappingURL=jobsAndCompensationsGetJob.d.ts.map