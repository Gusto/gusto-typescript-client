import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type JobsAndCompensationsGetCompensationQueryData = operations.GetV1CompensationsCompensationIdResponse;
/**
 * Get a compensation
 *
 * @remarks
 * Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`.
 *
 * scope: `jobs:read`
 */
export declare function useJobsAndCompensationsGetCompensation(request: operations.GetV1CompensationsCompensationIdRequest, options?: QueryHookOptions<JobsAndCompensationsGetCompensationQueryData>): UseQueryResult<JobsAndCompensationsGetCompensationQueryData, Error>;
/**
 * Get a compensation
 *
 * @remarks
 * Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`.
 *
 * scope: `jobs:read`
 */
export declare function useJobsAndCompensationsGetCompensationSuspense(request: operations.GetV1CompensationsCompensationIdRequest, options?: SuspenseQueryHookOptions<JobsAndCompensationsGetCompensationQueryData>): UseSuspenseQueryResult<JobsAndCompensationsGetCompensationQueryData, Error>;
export declare function prefetchJobsAndCompensationsGetCompensation(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompensationsCompensationIdRequest): Promise<void>;
export declare function setJobsAndCompensationsGetCompensationData(client: QueryClient, queryKeyBase: [
    compensationId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: JobsAndCompensationsGetCompensationQueryData): JobsAndCompensationsGetCompensationQueryData | undefined;
export declare function invalidateJobsAndCompensationsGetCompensation(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    compensationId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllJobsAndCompensationsGetCompensation(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildJobsAndCompensationsGetCompensationQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompensationsCompensationIdRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<JobsAndCompensationsGetCompensationQueryData>;
};
export declare function queryKeyJobsAndCompensationsGetCompensation(compensationId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=jobsAndCompensationsGetCompensation.d.ts.map