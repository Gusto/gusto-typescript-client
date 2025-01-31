/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { garnishmentsCreate } from "../funcs/garnishmentsCreate.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type GarnishmentsCreateMutationVariables = {
  request: operations.PostV1EmployeesEmployeeIdGarnishmentsRequest;
  options?: RequestOptions;
};

export type GarnishmentsCreateMutationData = components.Garnishment;

/**
 * Create a garnishment
 *
 * @remarks
 * Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments.
 *
 * scope: `garnishments:write`
 */
export function useGarnishmentsCreateMutation(
  options?: MutationHookOptions<
    GarnishmentsCreateMutationData,
    Error,
    GarnishmentsCreateMutationVariables
  >,
): UseMutationResult<
  GarnishmentsCreateMutationData,
  Error,
  GarnishmentsCreateMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildGarnishmentsCreateMutation(client, options),
    ...options,
  });
}

export function mutationKeyGarnishmentsCreate(): MutationKey {
  return ["@gusto/embedded-api", "Garnishments", "create"];
}

export function buildGarnishmentsCreateMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: GarnishmentsCreateMutationVariables,
  ) => Promise<GarnishmentsCreateMutationData>;
} {
  return {
    mutationKey: mutationKeyGarnishmentsCreate(),
    mutationFn: function garnishmentsCreateMutationFn({
      request,
      options,
    }): Promise<GarnishmentsCreateMutationData> {
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
      return unwrapAsync(garnishmentsCreate(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
