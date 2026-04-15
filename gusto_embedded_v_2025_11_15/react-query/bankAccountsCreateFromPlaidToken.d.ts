import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type BankAccountsCreateFromPlaidTokenMutationVariables = {
    request: operations.PostV1PlaidProcessorTokenRequest;
    options?: RequestOptions;
};
export type BankAccountsCreateFromPlaidTokenMutationData = operations.PostV1PlaidProcessorTokenResponse;
/**
 * Create a bank account from a plaid processor token
 *
 * @remarks
 * This endpoint creates a new **verified** bank account by using a plaid processor token to retrieve its information.
 *
 * scope: `plaid_processor:write`
 *
 * > 📘
 * > To create a token please use the [plaid api](https://plaid.com/docs/api/processors/#processortokencreate) and select "gusto" as processor.
 *
 * > 🚧 Warning - Company Bank Accounts
 * >
 * > If a default company bank account exists, it will be disabled and the new bank account will replace it as the company's default funding method.
 */
export declare function useBankAccountsCreateFromPlaidTokenMutation(options?: MutationHookOptions<BankAccountsCreateFromPlaidTokenMutationData, Error, BankAccountsCreateFromPlaidTokenMutationVariables>): UseMutationResult<BankAccountsCreateFromPlaidTokenMutationData, Error, BankAccountsCreateFromPlaidTokenMutationVariables>;
export declare function mutationKeyBankAccountsCreateFromPlaidToken(): MutationKey;
export declare function buildBankAccountsCreateFromPlaidTokenMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: BankAccountsCreateFromPlaidTokenMutationVariables) => Promise<BankAccountsCreateFromPlaidTokenMutationData>;
};
//# sourceMappingURL=bankAccountsCreateFromPlaidToken.d.ts.map