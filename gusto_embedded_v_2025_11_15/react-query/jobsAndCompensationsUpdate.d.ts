import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type JobsAndCompensationsUpdateMutationVariables = {
    request: operations.PutV1JobsJobIdRequest;
    options?: RequestOptions;
};
export type JobsAndCompensationsUpdateMutationData = operations.PutV1JobsJobIdResponse;
/**
 * Update a job
 *
 * @remarks
 * Update a job.
 *
 * scope: `jobs:write`
 */
export declare function useJobsAndCompensationsUpdateMutation(options?: MutationHookOptions<JobsAndCompensationsUpdateMutationData, Error, JobsAndCompensationsUpdateMutationVariables>): UseMutationResult<JobsAndCompensationsUpdateMutationData, Error, JobsAndCompensationsUpdateMutationVariables>;
export declare function mutationKeyJobsAndCompensationsUpdate(): MutationKey;
export declare function buildJobsAndCompensationsUpdateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: JobsAndCompensationsUpdateMutationVariables) => Promise<JobsAndCompensationsUpdateMutationData>;
};
//# sourceMappingURL=jobsAndCompensationsUpdate.d.ts.map