import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type ContractorPaymentMethodsCreateBankAccountMutationVariables = {
    request: operations.PostV1ContractorsContractorUuidBankAccountsRequest;
    options?: RequestOptions;
};
export type ContractorPaymentMethodsCreateBankAccountMutationData = operations.PostV1ContractorsContractorUuidBankAccountsResponse;
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
export declare function useContractorPaymentMethodsCreateBankAccountMutation(options?: MutationHookOptions<ContractorPaymentMethodsCreateBankAccountMutationData, Error, ContractorPaymentMethodsCreateBankAccountMutationVariables>): UseMutationResult<ContractorPaymentMethodsCreateBankAccountMutationData, Error, ContractorPaymentMethodsCreateBankAccountMutationVariables>;
export declare function mutationKeyContractorPaymentMethodsCreateBankAccount(): MutationKey;
export declare function buildContractorPaymentMethodsCreateBankAccountMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: ContractorPaymentMethodsCreateBankAccountMutationVariables) => Promise<ContractorPaymentMethodsCreateBankAccountMutationData>;
};
//# sourceMappingURL=contractorPaymentMethodsCreateBankAccount.d.ts.map