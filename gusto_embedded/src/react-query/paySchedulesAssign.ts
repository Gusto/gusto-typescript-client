/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { paySchedulesAssign } from "../funcs/paySchedulesAssign.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import {
  PostV1CompaniesCompanyIdPaySchedulesAssignRequest,
  PostV1CompaniesCompanyIdPaySchedulesAssignResponse,
} from "../models/operations/postv1companiescompanyidpayschedulesassign.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type PaySchedulesAssignMutationVariables = {
  request: PostV1CompaniesCompanyIdPaySchedulesAssignRequest;
  options?: RequestOptions;
};

export type PaySchedulesAssignMutationData =
  PostV1CompaniesCompanyIdPaySchedulesAssignResponse;

/**
 * Assign pay schedules for a company
 *
 * @remarks
 * This endpoint assigns employees to pay schedules based on the schedule type.
 * For `by_employee` and `by_department` schedules, use the `partial_assignment` parameter to control the assignment scope. Set it to `true` for partial assignments (only some employees or departments at a time) and `false` for full assignments (all employees or departments at once).
 *
 * scope: `pay_schedules:write`
 */
export function usePaySchedulesAssignMutation(
  options?: MutationHookOptions<
    PaySchedulesAssignMutationData,
    Error,
    PaySchedulesAssignMutationVariables
  >,
): UseMutationResult<
  PaySchedulesAssignMutationData,
  Error,
  PaySchedulesAssignMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildPaySchedulesAssignMutation(client, options),
    ...options,
  });
}

export function mutationKeyPaySchedulesAssign(): MutationKey {
  return ["@gusto/embedded-api", "paySchedules", "assign"];
}

export function buildPaySchedulesAssignMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: PaySchedulesAssignMutationVariables,
  ) => Promise<PaySchedulesAssignMutationData>;
} {
  return {
    mutationKey: mutationKeyPaySchedulesAssign(),
    mutationFn: function paySchedulesAssignMutationFn({
      request,
      options,
    }): Promise<PaySchedulesAssignMutationData> {
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
      return unwrapAsync(paySchedulesAssign(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
