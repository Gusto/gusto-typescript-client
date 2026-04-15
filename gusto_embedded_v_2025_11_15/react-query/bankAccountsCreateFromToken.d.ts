import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type BankAccountsCreateFromTokenMutationVariables = {
    request: operations.PostV1PlaidProcessorTokenRequest;
    options?: RequestOptions;
};
export type BankAccountsCreateFromTokenMutationData = operations.PostV1PlaidProcessorTokenResponseBody;
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
export declare function useBankAccountsCreateFromTokenMutation(options?: MutationHookOptions<BankAccountsCreateFromTokenMutationData, Error, BankAccountsCreateFromTokenMutationVariables>): UseMutationResult<BankAccountsCreateFromTokenMutationData, Error, BankAccountsCreateFromTokenMutationVariables>;
export declare function mutationKeyBankAccountsCreateFromToken(): MutationKey;
export declare function buildBankAccountsCreateFromTokenMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: BankAccountsCreateFromTokenMutationVariables) => Promise<BankAccountsCreateFromTokenMutationData>;
};
//# sourceMappingURL=bankAccountsCreateFromToken.d.ts.map