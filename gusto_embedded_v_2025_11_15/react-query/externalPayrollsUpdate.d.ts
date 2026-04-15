import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type ExternalPayrollsUpdateMutationVariables = {
    request: operations.PutV1ExternalPayrollRequest;
    options?: RequestOptions;
};
export type ExternalPayrollsUpdateMutationData = operations.PutV1ExternalPayrollResponse;
/**
 * Update an external payroll
 *
 * @remarks
 * Update an external payroll with a list of external payroll items
 *
 * scope: `external_payrolls:write`
 */
export declare function useExternalPayrollsUpdateMutation(options?: MutationHookOptions<ExternalPayrollsUpdateMutationData, Error, ExternalPayrollsUpdateMutationVariables>): UseMutationResult<ExternalPayrollsUpdateMutationData, Error, ExternalPayrollsUpdateMutationVariables>;
export declare function mutationKeyExternalPayrollsUpdate(): MutationKey;
export declare function buildExternalPayrollsUpdateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: ExternalPayrollsUpdateMutationVariables) => Promise<ExternalPayrollsUpdateMutationData>;
};
//# sourceMappingURL=externalPayrollsUpdate.d.ts.map