import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type JobsAndCompensationsCreateJobMutationVariables = {
    request: operations.PostV1JobsJobIdRequest;
    options?: RequestOptions;
};
export type JobsAndCompensationsCreateJobMutationData = operations.PostV1JobsJobIdResponse;
/**
 * Create a job
 *
 * @remarks
 * Create a job.
 *
 * scope: `jobs:write`
 */
export declare function useJobsAndCompensationsCreateJobMutation(options?: MutationHookOptions<JobsAndCompensationsCreateJobMutationData, Error, JobsAndCompensationsCreateJobMutationVariables>): UseMutationResult<JobsAndCompensationsCreateJobMutationData, Error, JobsAndCompensationsCreateJobMutationVariables>;
export declare function mutationKeyJobsAndCompensationsCreateJob(): MutationKey;
export declare function buildJobsAndCompensationsCreateJobMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: JobsAndCompensationsCreateJobMutationVariables) => Promise<JobsAndCompensationsCreateJobMutationData>;
};
//# sourceMappingURL=jobsAndCompensationsCreateJob.d.ts.map