import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type JobsAndCompensationsDeleteJobMutationVariables = {
    request: operations.DeleteV1JobsJobIdRequest;
    options?: RequestOptions;
};
export type JobsAndCompensationsDeleteJobMutationData = void;
/**
 * Delete an individual job
 *
 * @remarks
 * Deletes a specific job that an employee holds.
 *
 * scope: `jobs:write`
 */
export declare function useJobsAndCompensationsDeleteJobMutation(options?: MutationHookOptions<JobsAndCompensationsDeleteJobMutationData, Error, JobsAndCompensationsDeleteJobMutationVariables>): UseMutationResult<JobsAndCompensationsDeleteJobMutationData, Error, JobsAndCompensationsDeleteJobMutationVariables>;
export declare function mutationKeyJobsAndCompensationsDeleteJob(): MutationKey;
export declare function buildJobsAndCompensationsDeleteJobMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: JobsAndCompensationsDeleteJobMutationVariables) => Promise<JobsAndCompensationsDeleteJobMutationData>;
};
//# sourceMappingURL=jobsAndCompensationsDeleteJob.d.ts.map