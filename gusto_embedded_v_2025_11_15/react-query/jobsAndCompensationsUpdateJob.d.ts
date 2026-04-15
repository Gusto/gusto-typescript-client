import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type JobsAndCompensationsUpdateJobMutationVariables = {
    request: operations.PutV1JobsJobIdRequest;
    options?: RequestOptions;
};
export type JobsAndCompensationsUpdateJobMutationData = components.Job;
/**
 * Update a job
 *
 * @remarks
 * Update a job.
 *
 * scope: `jobs:write`
 */
export declare function useJobsAndCompensationsUpdateJobMutation(options?: MutationHookOptions<JobsAndCompensationsUpdateJobMutationData, Error, JobsAndCompensationsUpdateJobMutationVariables>): UseMutationResult<JobsAndCompensationsUpdateJobMutationData, Error, JobsAndCompensationsUpdateJobMutationVariables>;
export declare function mutationKeyJobsAndCompensationsUpdateJob(): MutationKey;
export declare function buildJobsAndCompensationsUpdateJobMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: JobsAndCompensationsUpdateJobMutationVariables) => Promise<JobsAndCompensationsUpdateJobMutationData>;
};
//# sourceMappingURL=jobsAndCompensationsUpdateJob.d.ts.map