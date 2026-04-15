import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type ExternalPayrollsDeleteMutationVariables = {
    request: operations.DeleteV1ExternalPayrollRequest;
    options?: RequestOptions;
};
export type ExternalPayrollsDeleteMutationData = operations.DeleteV1ExternalPayrollResponse;
/**
 * Delete an external payroll
 *
 * @remarks
 * Delete an external payroll.
 *
 * scope: `external_payrolls:write`
 */
export declare function useExternalPayrollsDeleteMutation(options?: MutationHookOptions<ExternalPayrollsDeleteMutationData, Error, ExternalPayrollsDeleteMutationVariables>): UseMutationResult<ExternalPayrollsDeleteMutationData, Error, ExternalPayrollsDeleteMutationVariables>;
export declare function mutationKeyExternalPayrollsDelete(): MutationKey;
export declare function buildExternalPayrollsDeleteMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: ExternalPayrollsDeleteMutationVariables) => Promise<ExternalPayrollsDeleteMutationData>;
};
//# sourceMappingURL=externalPayrollsDelete.d.ts.map