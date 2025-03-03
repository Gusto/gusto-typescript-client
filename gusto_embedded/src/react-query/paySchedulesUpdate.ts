/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { paySchedulesUpdate } from "../funcs/paySchedulesUpdate.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type PaySchedulesUpdateMutationVariables = {
  request: operations.PutV1CompaniesCompanyIdPaySchedulesPayScheduleIdRequest;
  options?: RequestOptions;
};

export type PaySchedulesUpdateMutationData = components.PayScheduleCreateUpdate;

/**
 * Update a pay schedule
 *
 * @remarks
 * Updates a pay schedule.
 *
 * scope: `pay_schedules:write`
 */
export function usePaySchedulesUpdateMutation(
  options?: MutationHookOptions<
    PaySchedulesUpdateMutationData,
    Error,
    PaySchedulesUpdateMutationVariables
  >,
): UseMutationResult<
  PaySchedulesUpdateMutationData,
  Error,
  PaySchedulesUpdateMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildPaySchedulesUpdateMutation(client, options),
    ...options,
  });
}

export function mutationKeyPaySchedulesUpdate(): MutationKey {
  return ["@gusto/embedded-api", "paySchedules", "update"];
}

export function buildPaySchedulesUpdateMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: PaySchedulesUpdateMutationVariables,
  ) => Promise<PaySchedulesUpdateMutationData>;
} {
  return {
    mutationKey: mutationKeyPaySchedulesUpdate(),
    mutationFn: function paySchedulesUpdateMutationFn({
      request,
      options,
    }): Promise<PaySchedulesUpdateMutationData> {
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
      return unwrapAsync(paySchedulesUpdate(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
