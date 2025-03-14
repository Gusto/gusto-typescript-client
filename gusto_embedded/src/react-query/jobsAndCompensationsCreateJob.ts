/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { jobsAndCompensationsCreateJob } from "../funcs/jobsAndCompensationsCreateJob.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import {
  PostV1JobsJobIdRequest,
  PostV1JobsJobIdResponse,
} from "../models/operations/postv1jobsjobid.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type JobsAndCompensationsCreateJobMutationVariables = {
  request: PostV1JobsJobIdRequest;
  options?: RequestOptions;
};

export type JobsAndCompensationsCreateJobMutationData = PostV1JobsJobIdResponse;

/**
 * Create a job
 *
 * @remarks
 * Create a job.
 *
 * scope: `jobs:write`
 */
export function useJobsAndCompensationsCreateJobMutation(
  options?: MutationHookOptions<
    JobsAndCompensationsCreateJobMutationData,
    Error,
    JobsAndCompensationsCreateJobMutationVariables
  >,
): UseMutationResult<
  JobsAndCompensationsCreateJobMutationData,
  Error,
  JobsAndCompensationsCreateJobMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildJobsAndCompensationsCreateJobMutation(client, options),
    ...options,
  });
}

export function mutationKeyJobsAndCompensationsCreateJob(): MutationKey {
  return ["@gusto/embedded-api", "jobsAndCompensations", "createJob"];
}

export function buildJobsAndCompensationsCreateJobMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: JobsAndCompensationsCreateJobMutationVariables,
  ) => Promise<JobsAndCompensationsCreateJobMutationData>;
} {
  return {
    mutationKey: mutationKeyJobsAndCompensationsCreateJob(),
    mutationFn: function jobsAndCompensationsCreateJobMutationFn({
      request,
      options,
    }): Promise<JobsAndCompensationsCreateJobMutationData> {
      const mergedOptions = {
        ...hookOptions,
        ...options,
        fetchOptions: {
          ...hookOptions?.fetchOptions,
          ...options?.fetchOptions,
          signal: combineSignals(
            hookOptions?.fetchOptions?.signal,
            options?.fetchOptions?.signal,
          ),
        },
      };
      return unwrapAsync(jobsAndCompensationsCreateJob(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
