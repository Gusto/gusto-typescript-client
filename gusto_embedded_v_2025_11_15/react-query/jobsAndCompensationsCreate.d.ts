import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type JobsAndCompensationsCreateMutationVariables = {
    request: operations.PostV1CompensationsCompensationIdRequest;
    options?: RequestOptions;
};
export type JobsAndCompensationsCreateMutationData = components.Compensation;
/**
 * Create a compensation
 *
 * @remarks
 * Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`.
 *
 * scope: `jobs:write`
 */
export declare function useJobsAndCompensationsCreateMutation(options?: MutationHookOptions<JobsAndCompensationsCreateMutationData, Error, JobsAndCompensationsCreateMutationVariables>): UseMutationResult<JobsAndCompensationsCreateMutationData, Error, JobsAndCompensationsCreateMutationVariables>;
export declare function mutationKeyJobsAndCompensationsCreate(): MutationKey;
export declare function buildJobsAndCompensationsCreateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: JobsAndCompensationsCreateMutationVariables) => Promise<JobsAndCompensationsCreateMutationData>;
};
//# sourceMappingURL=jobsAndCompensationsCreate.d.ts.map