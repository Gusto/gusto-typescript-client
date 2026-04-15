import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type PayrollsCreateOffCycleMutationVariables = {
    request: operations.PostV1CompaniesCompanyIdPayrollsRequest;
    options?: RequestOptions;
};
export type PayrollsCreateOffCycleMutationData = operations.PostV1CompaniesCompanyIdPayrollsResponse;
/**
 * Create an off-cycle payroll
 *
 * @remarks
 * Creates a new, unprocessed, off-cycle payroll.
 *
 * ## `off_cycle_reason`
 * By default:
 * - External benefits and deductions will be included when the `off_cycle_reason` is set to `Correction`.
 * - All benefits and deductions are blocked when the `off_cycle_reason` is set to `Bonus`.
 *
 * These elections can be overridden with the `skip_regular_deductions` boolean.
 *
 * scope: `payrolls:run`
 */
export declare function usePayrollsCreateOffCycleMutation(options?: MutationHookOptions<PayrollsCreateOffCycleMutationData, Error, PayrollsCreateOffCycleMutationVariables>): UseMutationResult<PayrollsCreateOffCycleMutationData, Error, PayrollsCreateOffCycleMutationVariables>;
export declare function mutationKeyPayrollsCreateOffCycle(): MutationKey;
export declare function buildPayrollsCreateOffCycleMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: PayrollsCreateOffCycleMutationVariables) => Promise<PayrollsCreateOffCycleMutationData>;
};
//# sourceMappingURL=payrollsCreateOffCycle.d.ts.map