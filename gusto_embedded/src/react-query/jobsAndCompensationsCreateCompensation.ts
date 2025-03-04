/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { jobsAndCompensationsCreateCompensation } from "../funcs/jobsAndCompensationsCreateCompensation.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type JobsAndCompensationsCreateCompensationMutationVariables = {
  request: operations.PostV1CompensationsCompensationIdRequest;
  options?: RequestOptions;
};

export type JobsAndCompensationsCreateCompensationMutationData =
  operations.PostV1CompensationsCompensationIdResponse;

/**
 * Create a compensation
 *
 * @remarks
 * Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`.
 *
 * scope: `jobs:write`
 */
export function useJobsAndCompensationsCreateCompensationMutation(
  options?: MutationHookOptions<
    JobsAndCompensationsCreateCompensationMutationData,
    Error,
    JobsAndCompensationsCreateCompensationMutationVariables
  >,
): UseMutationResult<
  JobsAndCompensationsCreateCompensationMutationData,
  Error,
  JobsAndCompensationsCreateCompensationMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildJobsAndCompensationsCreateCompensationMutation(client, options),
    ...options,
  });
}

export function mutationKeyJobsAndCompensationsCreateCompensation(): MutationKey {
  return ["@gusto/embedded-api", "jobsAndCompensations", "createCompensation"];
}

export function buildJobsAndCompensationsCreateCompensationMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: JobsAndCompensationsCreateCompensationMutationVariables,
  ) => Promise<JobsAndCompensationsCreateCompensationMutationData>;
} {
  return {
    mutationKey: mutationKeyJobsAndCompensationsCreateCompensation(),
    mutationFn: function jobsAndCompensationsCreateCompensationMutationFn({
      request,
      options,
    }): Promise<JobsAndCompensationsCreateCompensationMutationData> {
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
      return unwrapAsync(jobsAndCompensationsCreateCompensation(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
