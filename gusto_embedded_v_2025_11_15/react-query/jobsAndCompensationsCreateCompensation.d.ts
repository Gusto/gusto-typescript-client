import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type JobsAndCompensationsCreateCompensationMutationVariables = {
    request: operations.PostV1CompensationsCompensationIdRequest;
    options?: RequestOptions;
};
export type JobsAndCompensationsCreateCompensationMutationData = operations.PostV1CompensationsCompensationIdResponse;
/**
 * Create a compensation
 *
 * @remarks
 * Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`.
 *
 * scope: `jobs:write`
 */
export declare function useJobsAndCompensationsCreateCompensationMutation(options?: MutationHookOptions<JobsAndCompensationsCreateCompensationMutationData, Error, JobsAndCompensationsCreateCompensationMutationVariables>): UseMutationResult<JobsAndCompensationsCreateCompensationMutationData, Error, JobsAndCompensationsCreateCompensationMutationVariables>;
export declare function mutationKeyJobsAndCompensationsCreateCompensation(): MutationKey;
export declare function buildJobsAndCompensationsCreateCompensationMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: JobsAndCompensationsCreateCompensationMutationVariables) => Promise<JobsAndCompensationsCreateCompensationMutationData>;
};
//# sourceMappingURL=jobsAndCompensationsCreateCompensation.d.ts.map