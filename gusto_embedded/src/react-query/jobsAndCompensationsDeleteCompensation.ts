/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { jobsAndCompensationsDeleteCompensation } from "../funcs/jobsAndCompensationsDeleteCompensation.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type JobsAndCompensationsDeleteCompensationMutationVariables = {
  request: operations.DeleteV1CompensationsCompensationIdRequest;
  options?: RequestOptions;
};

export type JobsAndCompensationsDeleteCompensationMutationData =
  operations.DeleteV1CompensationsCompensationIdResponse;

/**
 * Delete a compensation
 *
 * @remarks
 * Compensations contain information on how much is paid out for a job. Jobs may have many compensations, but only one that is active. The current compensation is the one with the most recent `effective_date`. This endpoint deletes a compensation for a job that hasn't been processed on payroll.
 *
 * scope: `jobs:write`
 */
export function useJobsAndCompensationsDeleteCompensationMutation(
  options?: MutationHookOptions<
    JobsAndCompensationsDeleteCompensationMutationData,
    Error,
    JobsAndCompensationsDeleteCompensationMutationVariables
  >,
): UseMutationResult<
  JobsAndCompensationsDeleteCompensationMutationData,
  Error,
  JobsAndCompensationsDeleteCompensationMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildJobsAndCompensationsDeleteCompensationMutation(client, options),
    ...options,
  });
}

export function mutationKeyJobsAndCompensationsDeleteCompensation(): MutationKey {
  return ["@gusto/embedded-api", "jobsAndCompensations", "deleteCompensation"];
}

export function buildJobsAndCompensationsDeleteCompensationMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: JobsAndCompensationsDeleteCompensationMutationVariables,
  ) => Promise<JobsAndCompensationsDeleteCompensationMutationData>;
} {
  return {
    mutationKey: mutationKeyJobsAndCompensationsDeleteCompensation(),
    mutationFn: function jobsAndCompensationsDeleteCompensationMutationFn({
      request,
      options,
    }): Promise<JobsAndCompensationsDeleteCompensationMutationData> {
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
      return unwrapAsync(jobsAndCompensationsDeleteCompensation(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
