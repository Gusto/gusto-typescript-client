import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { NotFoundErrorObject } from "../models/errors/notfounderrorobject.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest, PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse } from "../models/operations/putv1companiescompanyidpayrollspayrollidprepare.js";
import { MutationHookOptions } from "./_types.js";
export type PayrollsPrepareMutationVariables = {
    request: PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareRequest;
    options?: RequestOptions;
};
export type PayrollsPrepareMutationData = PutV1CompaniesCompanyIdPayrollsPayrollIdPrepareResponse;
export type PayrollsPrepareMutationError = NotFoundErrorObject | UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError;
/**
 * Prepare a payroll for update
 *
 * @remarks
 * This endpoint will build the payroll and get it ready for making updates. This includes adding/removing eligible employees from the Payroll and updating the check_date, payroll_deadline, and payroll_status_meta dates & times.
 * Results are paginated, with a maximum page size of 100 employee_compensations.
 *
 * Notes:
 *  * Will null out calculated_at & totals if a payroll has already been calculated.
 *  * Will return the version param used for updating the payroll
 *
 * scope: `payrolls:write`
 */
export declare function usePayrollsPrepareMutation(options?: MutationHookOptions<PayrollsPrepareMutationData, PayrollsPrepareMutationError, PayrollsPrepareMutationVariables>): UseMutationResult<PayrollsPrepareMutationData, PayrollsPrepareMutationError, PayrollsPrepareMutationVariables>;
export declare function mutationKeyPayrollsPrepare(): MutationKey;
export declare function buildPayrollsPrepareMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: PayrollsPrepareMutationVariables) => Promise<PayrollsPrepareMutationData>;
};
//# sourceMappingURL=payrollsPrepare.d.ts.map