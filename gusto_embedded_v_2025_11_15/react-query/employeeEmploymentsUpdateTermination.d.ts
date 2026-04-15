import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeeEmploymentsUpdateTerminationMutationVariables = {
    request: operations.PutV1TerminationsEmployeeIdRequest;
    options?: RequestOptions;
};
export type EmployeeEmploymentsUpdateTerminationMutationData = operations.PutV1TerminationsEmployeeIdResponse;
/**
 * Update an employee termination
 *
 * @remarks
 * Terminations are created whenever an employee is scheduled to leave the company. The only things required are an effective date (their last day of work) and whether they should receive their wages in a one-off termination payroll or with the rest of the company.
 *
 * Note that some states require employees to receive their final wages within 24 hours (unless they consent otherwise,) in which case running a one-off payroll may be the only option.
 *
 * scope: `employments:write`
 */
export declare function useEmployeeEmploymentsUpdateTerminationMutation(options?: MutationHookOptions<EmployeeEmploymentsUpdateTerminationMutationData, Error, EmployeeEmploymentsUpdateTerminationMutationVariables>): UseMutationResult<EmployeeEmploymentsUpdateTerminationMutationData, Error, EmployeeEmploymentsUpdateTerminationMutationVariables>;
export declare function mutationKeyEmployeeEmploymentsUpdateTermination(): MutationKey;
export declare function buildEmployeeEmploymentsUpdateTerminationMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeeEmploymentsUpdateTerminationMutationVariables) => Promise<EmployeeEmploymentsUpdateTerminationMutationData>;
};
//# sourceMappingURL=employeeEmploymentsUpdateTermination.d.ts.map