import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type PayrollsSkipMutationVariables = {
    request: operations.PostCompaniesPayrollSkipCompanyUuidRequest;
    options?: RequestOptions;
};
export type PayrollsSkipMutationData = operations.PostCompaniesPayrollSkipCompanyUuidResponse;
/**
 * Skip a payroll
 *
 * @remarks
 * Submits a $0 payroll for employees associated with the pay schedule to skip payroll. This submission is asynchronous and a successful request responds with a 202 HTTP status. Upon success, the payroll is transitioned to the `processed` state.
 *
 * If the company is blocked from running payroll due to issues like incomplete setup, missing information or other compliance issues, the response will be 422 Unprocessable Entity with a categorization of the blockers as described in the error responses.
 *
 * scope: `payrolls:run`
 */
export declare function usePayrollsSkipMutation(options?: MutationHookOptions<PayrollsSkipMutationData, Error, PayrollsSkipMutationVariables>): UseMutationResult<PayrollsSkipMutationData, Error, PayrollsSkipMutationVariables>;
export declare function mutationKeyPayrollsSkip(): MutationKey;
export declare function buildPayrollsSkipMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: PayrollsSkipMutationVariables) => Promise<PayrollsSkipMutationData>;
};
//# sourceMappingURL=payrollsSkip.d.ts.map