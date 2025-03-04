/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { externalPayrollsCreate } from "../funcs/externalPayrollsCreate.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type ExternalPayrollsCreateMutationVariables = {
  request: operations.PostV1ExternalPayrollRequest;
  options?: RequestOptions;
};

export type ExternalPayrollsCreateMutationData =
  operations.PostV1ExternalPayrollResponse;

/**
 * Create a new external payroll for a company
 *
 * @remarks
 * Creates a new external payroll for the company.
 *
 * scope: `external_payrolls:write`
 */
export function useExternalPayrollsCreateMutation(
  options?: MutationHookOptions<
    ExternalPayrollsCreateMutationData,
    Error,
    ExternalPayrollsCreateMutationVariables
  >,
): UseMutationResult<
  ExternalPayrollsCreateMutationData,
  Error,
  ExternalPayrollsCreateMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildExternalPayrollsCreateMutation(client, options),
    ...options,
  });
}

export function mutationKeyExternalPayrollsCreate(): MutationKey {
  return ["@gusto/embedded-api", "externalPayrolls", "create"];
}

export function buildExternalPayrollsCreateMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: ExternalPayrollsCreateMutationVariables,
  ) => Promise<ExternalPayrollsCreateMutationData>;
} {
  return {
    mutationKey: mutationKeyExternalPayrollsCreate(),
    mutationFn: function externalPayrollsCreateMutationFn({
      request,
      options,
    }): Promise<ExternalPayrollsCreateMutationData> {
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
      return unwrapAsync(externalPayrollsCreate(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
