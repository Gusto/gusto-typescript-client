import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type ContractorPaymentMethodCreateBankAccountMutationVariables = {
    request: operations.PostV1ContractorsContractorUuidBankAccountsRequest;
    options?: RequestOptions;
};
export type ContractorPaymentMethodCreateBankAccountMutationData = components.ContractorBankAccount;
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
export declare function useContractorPaymentMethodCreateBankAccountMutation(options?: MutationHookOptions<ContractorPaymentMethodCreateBankAccountMutationData, Error, ContractorPaymentMethodCreateBankAccountMutationVariables>): UseMutationResult<ContractorPaymentMethodCreateBankAccountMutationData, Error, ContractorPaymentMethodCreateBankAccountMutationVariables>;
export declare function mutationKeyContractorPaymentMethodCreateBankAccount(): MutationKey;
export declare function buildContractorPaymentMethodCreateBankAccountMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: ContractorPaymentMethodCreateBankAccountMutationVariables) => Promise<ContractorPaymentMethodCreateBankAccountMutationData>;
};
//# sourceMappingURL=contractorPaymentMethodCreateBankAccount.d.ts.map