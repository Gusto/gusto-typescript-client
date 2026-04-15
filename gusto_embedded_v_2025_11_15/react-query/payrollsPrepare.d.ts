import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type PayrollsPrepareMutationVariables = {
    request: operations.PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest;
    options?: RequestOptions;
};
export type PayrollsPrepareMutationData = operations.PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse;
/**
 * Prepare a payroll for update
 *
 * @remarks
 * This endpoint will build the payroll and get it ready for making updates. This includes adding/removing eligible employees from the Payroll and updating the check_date, payroll_deadline, and payroll_status_meta dates & times.
 *
 * Notes:
 *  * Will null out calculated_at & totals if a payroll has already been calculated.
 *  * Will return the version param used for updating the payroll
 *
 * scope: `payrolls:write`
 */
export declare function usePayrollsPrepareMutation(options?: MutationHookOptions<PayrollsPrepareMutationData, Error, PayrollsPrepareMutationVariables>): UseMutationResult<PayrollsPrepareMutationData, Error, PayrollsPrepareMutationVariables>;
export declare function mutationKeyPayrollsPrepare(): MutationKey;
export declare function buildPayrollsPrepareMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: PayrollsPrepareMutationVariables) => Promise<PayrollsPrepareMutationData>;
};
//# sourceMappingURL=payrollsPrepare.d.ts.map