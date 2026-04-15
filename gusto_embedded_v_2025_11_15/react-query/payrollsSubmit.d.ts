import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type PayrollsSubmitMutationVariables = {
    request: operations.PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitRequest;
    options?: RequestOptions;
};
export type PayrollsSubmitMutationData = operations.PutV1CompaniesCompanyIdPayrollsPayrollIdSubmitResponse;
/**
 * Submit payroll
 *
 * @remarks
 * Submits an unprocessed payroll to be calculated and run. This submission is asynchronous and a successful request responds with a 202 HTTP status. Upon success, transitions the payroll to the `processed` state.
 *
 * You should poll to ensure that payroll is processed successfully, as async errors only occur after async processing is complete.
 *
 * If the company is blocked from running payroll due to issues like incomplete setup, missing information or other compliance issues, the response will be 422 Unprocessable Entity with a categorization of the blockers as described in the error responses.
 *
 * scope: `payrolls:run`
 */
export declare function usePayrollsSubmitMutation(options?: MutationHookOptions<PayrollsSubmitMutationData, Error, PayrollsSubmitMutationVariables>): UseMutationResult<PayrollsSubmitMutationData, Error, PayrollsSubmitMutationVariables>;
export declare function mutationKeyPayrollsSubmit(): MutationKey;
export declare function buildPayrollsSubmitMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: PayrollsSubmitMutationVariables) => Promise<PayrollsSubmitMutationData>;
};
//# sourceMappingURL=payrollsSubmit.d.ts.map