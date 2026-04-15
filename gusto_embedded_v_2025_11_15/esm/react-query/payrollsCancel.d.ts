import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { NotFoundErrorObject } from "../models/errors/notfounderrorobject.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelRequest, PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse } from "../models/operations/putapiv1companiescompanyidpayrollspayrollidcancel.js";
import { MutationHookOptions } from "./_types.js";
export type PayrollsCancelMutationVariables = {
    request: PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelRequest;
    options?: RequestOptions;
};
export type PayrollsCancelMutationData = PutApiV1CompaniesCompanyIdPayrollsPayrollIdCancelResponse;
export type PayrollsCancelMutationError = NotFoundErrorObject | UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError;
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
export declare function usePayrollsCancelMutation(options?: MutationHookOptions<PayrollsCancelMutationData, PayrollsCancelMutationError, PayrollsCancelMutationVariables>): UseMutationResult<PayrollsCancelMutationData, PayrollsCancelMutationError, PayrollsCancelMutationVariables>;
export declare function mutationKeyPayrollsCancel(): MutationKey;
export declare function buildPayrollsCancelMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: PayrollsCancelMutationVariables) => Promise<PayrollsCancelMutationData>;
};
//# sourceMappingURL=payrollsCancel.d.ts.map