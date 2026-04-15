import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type JobsAndCompensationsDeleteCompensationMutationVariables = {
    request: operations.DeleteV1CompensationsCompensationIdRequest;
    options?: RequestOptions;
};
export type JobsAndCompensationsDeleteCompensationMutationData = operations.DeleteV1CompensationsCompensationIdResponse;
/**
 * Delete a compensation
 *
 * @remarks
 * Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`. This endpoint deletes a compensation for a job that hasn't been processed on payroll.
 *
 * scope: `jobs:write`
 */
export declare function useJobsAndCompensationsDeleteCompensationMutation(options?: MutationHookOptions<JobsAndCompensationsDeleteCompensationMutationData, Error, JobsAndCompensationsDeleteCompensationMutationVariables>): UseMutationResult<JobsAndCompensationsDeleteCompensationMutationData, Error, JobsAndCompensationsDeleteCompensationMutationVariables>;
export declare function mutationKeyJobsAndCompensationsDeleteCompensation(): MutationKey;
export declare function buildJobsAndCompensationsDeleteCompensationMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: JobsAndCompensationsDeleteCompensationMutationVariables) => Promise<JobsAndCompensationsDeleteCompensationMutationData>;
};
//# sourceMappingURL=jobsAndCompensationsDeleteCompensation.d.ts.map