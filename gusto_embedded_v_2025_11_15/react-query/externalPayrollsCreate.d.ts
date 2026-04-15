import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type ExternalPayrollsCreateMutationVariables = {
    request: operations.PostV1ExternalPayrollRequest;
    options?: RequestOptions;
};
export type ExternalPayrollsCreateMutationData = operations.PostV1ExternalPayrollResponse;
/**
 * Create a new external payroll for a company
 *
 * @remarks
 * Creates a new external payroll for the company.
 *
 * scope: `external_payrolls:write`
 */
export declare function useExternalPayrollsCreateMutation(options?: MutationHookOptions<ExternalPayrollsCreateMutationData, Error, ExternalPayrollsCreateMutationVariables>): UseMutationResult<ExternalPayrollsCreateMutationData, Error, ExternalPayrollsCreateMutationVariables>;
export declare function mutationKeyExternalPayrollsCreate(): MutationKey;
export declare function buildExternalPayrollsCreateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: ExternalPayrollsCreateMutationVariables) => Promise<ExternalPayrollsCreateMutationData>;
};
//# sourceMappingURL=externalPayrollsCreate.d.ts.map