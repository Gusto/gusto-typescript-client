/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { contractorPaymentGroupsDelete } from "../funcs/contractorPaymentGroupsDelete.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type ContractorPaymentGroupsDeleteMutationVariables = {
  request:
    operations.DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdRequest;
  options?: RequestOptions;
};

export type ContractorPaymentGroupsDeleteMutationData =
  operations.DeleteV1ContractorPaymentGroupsContractorPaymentGroupIdResponse;

/**
 * Cancel a contractor payment group
 *
 * @remarks
 * Cancels a contractor payment group and all associated contractor payments. All contractor payments must be cancellable, unfunded.
 *
 * scope: `payrolls:run`
 */
export function useContractorPaymentGroupsDeleteMutation(
  options?: MutationHookOptions<
    ContractorPaymentGroupsDeleteMutationData,
    Error,
    ContractorPaymentGroupsDeleteMutationVariables
  >,
): UseMutationResult<
  ContractorPaymentGroupsDeleteMutationData,
  Error,
  ContractorPaymentGroupsDeleteMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildContractorPaymentGroupsDeleteMutation(client, options),
    ...options,
  });
}

export function mutationKeyContractorPaymentGroupsDelete(): MutationKey {
  return ["@gusto/embedded-api", "contractorPaymentGroups", "delete"];
}

export function buildContractorPaymentGroupsDeleteMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: ContractorPaymentGroupsDeleteMutationVariables,
  ) => Promise<ContractorPaymentGroupsDeleteMutationData>;
} {
  return {
    mutationKey: mutationKeyContractorPaymentGroupsDelete(),
    mutationFn: function contractorPaymentGroupsDeleteMutationFn({
      request,
      options,
    }): Promise<ContractorPaymentGroupsDeleteMutationData> {
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
      return unwrapAsync(contractorPaymentGroupsDelete(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
