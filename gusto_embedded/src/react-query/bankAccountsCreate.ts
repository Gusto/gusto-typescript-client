/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  MutationKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { bankAccountsCreate } from "../funcs/bankAccountsCreate.js";
import { combineSignals } from "../lib/primitives.js";
import { RequestOptions } from "../lib/sdks.js";
import {
  PostV1CompaniesCompanyIdBankAccountsRequest,
  PostV1CompaniesCompanyIdBankAccountsResponse,
} from "../models/operations/postv1companiescompanyidbankaccounts.js";
import { unwrapAsync } from "../types/fp.js";
import { useGustoEmbeddedContext } from "./_context.js";
import { MutationHookOptions } from "./_types.js";

export type BankAccountsCreateMutationVariables = {
  request: PostV1CompaniesCompanyIdBankAccountsRequest;
  options?: RequestOptions;
};

export type BankAccountsCreateMutationData =
  PostV1CompaniesCompanyIdBankAccountsResponse;

/**
 * Create a company bank account
 *
 * @remarks
 * This endpoint creates a new company bank account.
 *
 * Upon being created, two verification deposits are automatically sent to the bank account, and the bank account's verification_status is 'awaiting_deposits'.
 *
 * When the deposits are successfully transferred, the verification_status changes to 'ready_for_verification', at which point the verify endpoint can be used to verify the bank account.
 * After successful verification, the bank account's verification_status is 'verified'.
 *
 * scope: `company_bank_accounts:write`
 *
 * > 🚧 Warning
 * >
 * > If a default bank account exists, it will be disabled and the new bank account will replace it as the company's default funding method.
 */
export function useBankAccountsCreateMutation(
  options?: MutationHookOptions<
    BankAccountsCreateMutationData,
    Error,
    BankAccountsCreateMutationVariables
  >,
): UseMutationResult<
  BankAccountsCreateMutationData,
  Error,
  BankAccountsCreateMutationVariables
> {
  const client = useGustoEmbeddedContext();
  return useMutation({
    ...buildBankAccountsCreateMutation(client, options),
    ...options,
  });
}

export function mutationKeyBankAccountsCreate(): MutationKey {
  return ["@gusto/embedded-api", "bankAccounts", "create"];
}

export function buildBankAccountsCreateMutation(
  client$: GustoEmbeddedCore,
  hookOptions?: RequestOptions,
): {
  mutationKey: MutationKey;
  mutationFn: (
    variables: BankAccountsCreateMutationVariables,
  ) => Promise<BankAccountsCreateMutationData>;
} {
  return {
    mutationKey: mutationKeyBankAccountsCreate(),
    mutationFn: function bankAccountsCreateMutationFn({
      request,
      options,
    }): Promise<BankAccountsCreateMutationData> {
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
      return unwrapAsync(bankAccountsCreate(
        client$,
        request,
        mergedOptions,
      ));
    },
  };
}
