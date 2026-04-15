import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type BankAccountsCreateMutationVariables = {
    request: operations.PostV1CompaniesCompanyIdBankAccountsRequest;
    options?: RequestOptions;
};
export type BankAccountsCreateMutationData = operations.PostV1CompaniesCompanyIdBankAccountsResponse;
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
export declare function useBankAccountsCreateMutation(options?: MutationHookOptions<BankAccountsCreateMutationData, Error, BankAccountsCreateMutationVariables>): UseMutationResult<BankAccountsCreateMutationData, Error, BankAccountsCreateMutationVariables>;
export declare function mutationKeyBankAccountsCreate(): MutationKey;
export declare function buildBankAccountsCreateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: BankAccountsCreateMutationVariables) => Promise<BankAccountsCreateMutationData>;
};
//# sourceMappingURL=bankAccountsCreate.d.ts.map