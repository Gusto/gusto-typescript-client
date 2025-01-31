/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { timeOffPoliciesCreate } from "../funcs/timeOffPoliciesCreate.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type TimeOffPoliciesCreateMutationVariables = {
  request: operations.PostCompaniesCompanyUuidTimeOffPoliciesRequest;
  options?: RequestOptions;
};

export type TimeOffPoliciesCreateMutationData = components.TimeOffPolicy;

/**
 * Create a time off policy
 *
 * @remarks
 * Create a time off policy
 *
 * scope: `time_off_policies:write`
 */
export function useTimeOffPoliciesCreateMutation(
  options?: MutationHookOptions<
    TimeOffPoliciesCreateMutationData,
    Error,
    TimeOffPoliciesCreateMutationVariables
  >,
): UseMutationResult<
  TimeOffPoliciesCreateMutationData,
  Error,
  TimeOffPoliciesCreateMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildTimeOffPoliciesCreateMutation(client, options),
    ...options,
  });
}

export function mutationKeyTimeOffPoliciesCreate(): MutationKey {
  return ["@gusto/embedded-api", "timeOffPolicies", "create"];
}

export function buildTimeOffPoliciesCreateMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: TimeOffPoliciesCreateMutationVariables,
  ) => Promise<TimeOffPoliciesCreateMutationData>;
} {
  return {
    mutationKey: mutationKeyTimeOffPoliciesCreate(),
    mutationFn: function timeOffPoliciesCreateMutationFn({
      request,
      options,
    }): Promise<TimeOffPoliciesCreateMutationData> {
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
      return unwrapAsync(timeOffPoliciesCreate(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
