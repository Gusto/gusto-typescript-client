import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type PayrollsCreateMutationVariables = {
    request: operations.PostV1CompaniesCompanyIdPayrollsRequest;
    options?: RequestOptions;
};
export type PayrollsCreateMutationData = components.PayrollPrepared;
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
export declare function usePayrollsCreateMutation(options?: MutationHookOptions<PayrollsCreateMutationData, Error, PayrollsCreateMutationVariables>): UseMutationResult<PayrollsCreateMutationData, Error, PayrollsCreateMutationVariables>;
export declare function mutationKeyPayrollsCreate(): MutationKey;
export declare function buildPayrollsCreateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: PayrollsCreateMutationVariables) => Promise<PayrollsCreateMutationData>;
};
//# sourceMappingURL=payrollsCreate.d.ts.map