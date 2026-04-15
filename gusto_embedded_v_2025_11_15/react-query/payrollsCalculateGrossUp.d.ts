import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type PayrollsCalculateGrossUpMutationVariables = {
    request: operations.PostPayrollsGrossUpPayrollUuidRequest;
    options?: RequestOptions;
};
export type PayrollsCalculateGrossUpMutationData = operations.PostPayrollsGrossUpPayrollUuidResponse;
/**
 * Calculate gross up
 *
 * @remarks
 * Calculates gross up earnings for an employee's payroll, given net earnings. This endpoint is only applicable to off-cycle unprocessed payrolls.
 *
 * The gross up amount must then be mapped to the corresponding fixed compensation earning type to get the correct payroll amount. For example, for bonus off-cycles, the gross up amount should be set with the Bonus earning type in the payroll `fixed_compensations` field.
 *
 * scope: `payrolls:run`
 */
export declare function usePayrollsCalculateGrossUpMutation(options?: MutationHookOptions<PayrollsCalculateGrossUpMutationData, Error, PayrollsCalculateGrossUpMutationVariables>): UseMutationResult<PayrollsCalculateGrossUpMutationData, Error, PayrollsCalculateGrossUpMutationVariables>;
export declare function mutationKeyPayrollsCalculateGrossUp(): MutationKey;
export declare function buildPayrollsCalculateGrossUpMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: PayrollsCalculateGrossUpMutationVariables) => Promise<PayrollsCalculateGrossUpMutationData>;
};
//# sourceMappingURL=payrollsCalculateGrossUp.d.ts.map