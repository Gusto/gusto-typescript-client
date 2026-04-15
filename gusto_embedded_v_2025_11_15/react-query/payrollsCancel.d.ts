import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type PayrollsCancelMutationVariables = {
    request: operations.PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelRequest;
    options?: RequestOptions;
};
export type PayrollsCancelMutationData = operations.PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse;
/**
 * Cancel a payroll
 *
 * @remarks
 * Transitions a `processed` payroll back to the `unprocessed` state. A payroll can be canceled if it meets both criteria:
 * - `processed` is true
 * - Current time is earlier than 3:30pm PT on the payroll_deadline
 *
 * scope: `payrolls:run`
 */
export declare function usePayrollsCancelMutation(options?: MutationHookOptions<PayrollsCancelMutationData, Error, PayrollsCancelMutationVariables>): UseMutationResult<PayrollsCancelMutationData, Error, PayrollsCancelMutationVariables>;
export declare function mutationKeyPayrollsCancel(): MutationKey;
export declare function buildPayrollsCancelMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: PayrollsCancelMutationVariables) => Promise<PayrollsCancelMutationData>;
};
//# sourceMappingURL=payrollsCancel.d.ts.map