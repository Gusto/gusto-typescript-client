/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { contractorsCreate } from "../funcs/contractorsCreate.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type ContractorsCreateMutationVariables = {
  request: operations.PostV1CompaniesCompanyUuidContractorsRequest;
  options?: RequestOptions;
};

export type ContractorsCreateMutationData = components.Contractor;

/**
 * Create a contractor
 *
 * @remarks
 * Create an individual or business contractor.
 *
 * scope: `contractors:manage`
 */
export function useContractorsCreateMutation(
  options?: MutationHookOptions<
    ContractorsCreateMutationData,
    Error,
    ContractorsCreateMutationVariables
  >,
): UseMutationResult<
  ContractorsCreateMutationData,
  Error,
  ContractorsCreateMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildContractorsCreateMutation(client, options),
    ...options,
  });
}

export function mutationKeyContractorsCreate(): MutationKey {
  return ["@gusto/embedded-api", "Contractors", "create"];
}

export function buildContractorsCreateMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: ContractorsCreateMutationVariables,
  ) => Promise<ContractorsCreateMutationData>;
} {
  return {
    mutationKey: mutationKeyContractorsCreate(),
    mutationFn: function contractorsCreateMutationFn({
      request,
      options,
    }): Promise<ContractorsCreateMutationData> {
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
      return unwrapAsync(contractorsCreate(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
