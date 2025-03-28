/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { garnishmentsUpdate } from "../funcs/garnishmentsUpdate.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import {
  PutV1GarnishmentsGarnishmentIdRequest,
  PutV1GarnishmentsGarnishmentIdResponse,
} from "../models/operations/putv1garnishmentsgarnishmentid.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type GarnishmentsUpdateMutationVariables = {
  request: PutV1GarnishmentsGarnishmentIdRequest;
  options?: RequestOptions;
};

export type GarnishmentsUpdateMutationData =
  PutV1GarnishmentsGarnishmentIdResponse;

/**
 * Update a garnishment
 *
 * @remarks
 * Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments.
 *
 * scope: `garnishments:write`
 */
export function useGarnishmentsUpdateMutation(
  options?: MutationHookOptions<
    GarnishmentsUpdateMutationData,
    Error,
    GarnishmentsUpdateMutationVariables
  >,
): UseMutationResult<
  GarnishmentsUpdateMutationData,
  Error,
  GarnishmentsUpdateMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildGarnishmentsUpdateMutation(client, options),
    ...options,
  });
}

export function mutationKeyGarnishmentsUpdate(): MutationKey {
  return ["@gusto/embedded-api", "Garnishments", "update"];
}

export function buildGarnishmentsUpdateMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: GarnishmentsUpdateMutationVariables,
  ) => Promise<GarnishmentsUpdateMutationData>;
} {
  return {
    mutationKey: mutationKeyGarnishmentsUpdate(),
    mutationFn: function garnishmentsUpdateMutationFn({
      request,
      options,
    }): Promise<GarnishmentsUpdateMutationData> {
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
      return unwrapAsync(garnishmentsUpdate(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
