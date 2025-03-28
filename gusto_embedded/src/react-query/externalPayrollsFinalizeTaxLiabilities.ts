/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { externalPayrollsFinalizeTaxLiabilities } from "../funcs/externalPayrollsFinalizeTaxLiabilities.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import {
  PutV1TaxLiabilitiesFinishRequest,
  PutV1TaxLiabilitiesFinishResponse,
} from "../models/operations/putv1taxliabilitiesfinish.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type ExternalPayrollsFinalizeTaxLiabilitiesMutationVariables = {
  request: PutV1TaxLiabilitiesFinishRequest;
  options?: RequestOptions;
};

export type ExternalPayrollsFinalizeTaxLiabilitiesMutationData =
  PutV1TaxLiabilitiesFinishResponse;

/**
 * Finalize tax liabilities options and convert into processed payrolls
 *
 * @remarks
 * Finalizes tax liabilities for a company. All external payrolls edit action will be disabled.
 *
 * scope: `external_payrolls:write`
 */
export function useExternalPayrollsFinalizeTaxLiabilitiesMutation(
  options?: MutationHookOptions<
    ExternalPayrollsFinalizeTaxLiabilitiesMutationData,
    Error,
    ExternalPayrollsFinalizeTaxLiabilitiesMutationVariables
  >,
): UseMutationResult<
  ExternalPayrollsFinalizeTaxLiabilitiesMutationData,
  Error,
  ExternalPayrollsFinalizeTaxLiabilitiesMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildExternalPayrollsFinalizeTaxLiabilitiesMutation(client, options),
    ...options,
  });
}

export function mutationKeyExternalPayrollsFinalizeTaxLiabilities(): MutationKey {
  return ["@gusto/embedded-api", "externalPayrolls", "finalizeTaxLiabilities"];
}

export function buildExternalPayrollsFinalizeTaxLiabilitiesMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: ExternalPayrollsFinalizeTaxLiabilitiesMutationVariables,
  ) => Promise<ExternalPayrollsFinalizeTaxLiabilitiesMutationData>;
} {
  return {
    mutationKey: mutationKeyExternalPayrollsFinalizeTaxLiabilities(),
    mutationFn: function externalPayrollsFinalizeTaxLiabilitiesMutationFn({
      request,
      options,
    }): Promise<ExternalPayrollsFinalizeTaxLiabilitiesMutationData> {
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
      return unwrapAsync(externalPayrollsFinalizeTaxLiabilities(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
