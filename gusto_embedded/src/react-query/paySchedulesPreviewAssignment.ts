/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { paySchedulesPreviewAssignment } from "../funcs/paySchedulesPreviewAssignment.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import {
  PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest,
  PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse,
} from "../models/operations/postv1companiescompanyidpayschedulesassignmentpreview.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type PaySchedulesPreviewAssignmentMutationVariables = {
  request: PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewRequest;
  options?: RequestOptions;
};

export type PaySchedulesPreviewAssignmentMutationData =
  PostV1CompaniesCompanyIdPaySchedulesAssignmentPreviewResponse;

/**
 * Preview pay schedule assignments for a company
 *
 * @remarks
 * This endpoint returns the employee changes, including pay period and transition pay periods, for changing the pay schedule.
 *
 * scope: `pay_schedules:write`
 */
export function usePaySchedulesPreviewAssignmentMutation(
  options?: MutationHookOptions<
    PaySchedulesPreviewAssignmentMutationData,
    Error,
    PaySchedulesPreviewAssignmentMutationVariables
  >,
): UseMutationResult<
  PaySchedulesPreviewAssignmentMutationData,
  Error,
  PaySchedulesPreviewAssignmentMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildPaySchedulesPreviewAssignmentMutation(client, options),
    ...options,
  });
}

export function mutationKeyPaySchedulesPreviewAssignment(): MutationKey {
  return ["@gusto/embedded-api", "paySchedules", "previewAssignment"];
}

export function buildPaySchedulesPreviewAssignmentMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: PaySchedulesPreviewAssignmentMutationVariables,
  ) => Promise<PaySchedulesPreviewAssignmentMutationData>;
} {
  return {
    mutationKey: mutationKeyPaySchedulesPreviewAssignment(),
    mutationFn: function paySchedulesPreviewAssignmentMutationFn({
      request,
      options,
    }): Promise<PaySchedulesPreviewAssignmentMutationData> {
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
      return unwrapAsync(paySchedulesPreviewAssignment(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
