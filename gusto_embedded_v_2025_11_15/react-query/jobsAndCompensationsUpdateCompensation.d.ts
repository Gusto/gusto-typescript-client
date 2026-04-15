import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type JobsAndCompensationsUpdateCompensationMutationVariables = {
    request: operations.PutV1CompensationsCompensationIdRequest;
    options?: RequestOptions;
};
export type JobsAndCompensationsUpdateCompensationMutationData = operations.PutV1CompensationsCompensationIdResponse;
/**
 * Update a compensation
 *
 * @remarks
 * Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`.
 *
 * scope: `jobs:write`
 */
export declare function useJobsAndCompensationsUpdateCompensationMutation(options?: MutationHookOptions<JobsAndCompensationsUpdateCompensationMutationData, Error, JobsAndCompensationsUpdateCompensationMutationVariables>): UseMutationResult<JobsAndCompensationsUpdateCompensationMutationData, Error, JobsAndCompensationsUpdateCompensationMutationVariables>;
export declare function mutationKeyJobsAndCompensationsUpdateCompensation(): MutationKey;
export declare function buildJobsAndCompensationsUpdateCompensationMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: JobsAndCompensationsUpdateCompensationMutationVariables) => Promise<JobsAndCompensationsUpdateCompensationMutationData>;
};
//# sourceMappingURL=jobsAndCompensationsUpdateCompensation.d.ts.map