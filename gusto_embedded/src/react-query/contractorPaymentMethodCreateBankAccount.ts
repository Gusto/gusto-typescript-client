/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { contractorPaymentMethodCreateBankAccount } from "../funcs/contractorPaymentMethodCreateBankAccount.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type ContractorPaymentMethodCreateBankAccountMutationVariables = {
  request: operations.PostV1ContractorsContractorUuidBankAccountsRequest;
  options?: RequestOptions;
};

export type ContractorPaymentMethodCreateBankAccountMutationData =
  components.ContractorBankAccount;

/**
 * Create a contractor bank account
 *
 * @remarks
 * Creates a contractor bank account.
 *
 * Note: We currently only support one bank account per contractor. Using this endpoint on a contractor who already has a bank account will just replace it.
 *
 * scope: `contractor_payment_methods:write`
 */
export function useContractorPaymentMethodCreateBankAccountMutation(
  options?: MutationHookOptions<
    ContractorPaymentMethodCreateBankAccountMutationData,
    Error,
    ContractorPaymentMethodCreateBankAccountMutationVariables
  >,
): UseMutationResult<
  ContractorPaymentMethodCreateBankAccountMutationData,
  Error,
  ContractorPaymentMethodCreateBankAccountMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildContractorPaymentMethodCreateBankAccountMutation(client, options),
    ...options,
  });
}

export function mutationKeyContractorPaymentMethodCreateBankAccount(): MutationKey {
  return [
    "@gusto/embedded-api",
    "contractorPaymentMethod",
    "createBankAccount",
  ];
}

export function buildContractorPaymentMethodCreateBankAccountMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: ContractorPaymentMethodCreateBankAccountMutationVariables,
  ) => Promise<ContractorPaymentMethodCreateBankAccountMutationData>;
} {
  return {
    mutationKey: mutationKeyContractorPaymentMethodCreateBankAccount(),
    mutationFn: function contractorPaymentMethodCreateBankAccountMutationFn({
      request,
      options,
    }): Promise<ContractorPaymentMethodCreateBankAccountMutationData> {
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
      return unwrapAsync(contractorPaymentMethodCreateBankAccount(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
