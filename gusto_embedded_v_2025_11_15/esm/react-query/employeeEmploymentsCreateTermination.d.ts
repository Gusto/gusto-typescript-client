import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { UnprocessableEntityErrorObject } from "../models/errors/unprocessableentityerrorobject.js";
import { PostV1EmployeesEmployeeIdTerminationsRequest, PostV1EmployeesEmployeeIdTerminationsResponse } from "../models/operations/postv1employeesemployeeidterminations.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeeEmploymentsCreateTerminationMutationVariables = {
    request: PostV1EmployeesEmployeeIdTerminationsRequest;
    options?: RequestOptions;
};
export type EmployeeEmploymentsCreateTerminationMutationData = PostV1EmployeesEmployeeIdTerminationsResponse;
export type EmployeeEmploymentsCreateTerminationMutationError = UnprocessableEntityErrorObject | GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError;
/**
 * Create an employee termination
 *
 * @remarks
 * Terminations are created whenever an employee is scheduled to leave the company. The only things required are an effective date (their last day of work) and whether they should receive their wages in a one-off termination payroll or with the rest of the company.
 *
 * Note that some states require employees to receive their final wages within 24 hours (unless they consent otherwise,) in which case running a one-off payroll may be the only option.
 *
 * scope: `employments:write`
 */
export declare function useEmployeeEmploymentsCreateTerminationMutation(options?: MutationHookOptions<EmployeeEmploymentsCreateTerminationMutationData, EmployeeEmploymentsCreateTerminationMutationError, EmployeeEmploymentsCreateTerminationMutationVariables>): UseMutationResult<EmployeeEmploymentsCreateTerminationMutationData, EmployeeEmploymentsCreateTerminationMutationError, EmployeeEmploymentsCreateTerminationMutationVariables>;
export declare function mutationKeyEmployeeEmploymentsCreateTermination(): MutationKey;
export declare function buildEmployeeEmploymentsCreateTerminationMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeeEmploymentsCreateTerminationMutationVariables) => Promise<EmployeeEmploymentsCreateTerminationMutationData>;
};
//# sourceMappingURL=employeeEmploymentsCreateTermination.d.ts.map