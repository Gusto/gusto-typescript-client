import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeeTaxSetupUpdateStateTaxesMutationVariables = {
    request: operations.PutV1EmployeesEmployeeIdStateTaxesRequest;
    options?: RequestOptions;
};
export type EmployeeTaxSetupUpdateStateTaxesMutationData = operations.PutV1EmployeesEmployeeIdStateTaxesResponse;
/**
 * Update an employee's state taxes
 *
 * @remarks
 * Update attributes relevant for an employee's state taxes.
 *
 * As described for the GET endpoint, the answers must be supplied in the effective-dated format, but currently only a single answer will be accepted - `valid_from` and `valid_up_to` must be `"2010-01-01"` and `null` respectively.
 *
 * scope: `employee_state_taxes:write`
 */
export declare function useEmployeeTaxSetupUpdateStateTaxesMutation(options?: MutationHookOptions<EmployeeTaxSetupUpdateStateTaxesMutationData, Error, EmployeeTaxSetupUpdateStateTaxesMutationVariables>): UseMutationResult<EmployeeTaxSetupUpdateStateTaxesMutationData, Error, EmployeeTaxSetupUpdateStateTaxesMutationVariables>;
export declare function mutationKeyEmployeeTaxSetupUpdateStateTaxes(): MutationKey;
export declare function buildEmployeeTaxSetupUpdateStateTaxesMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeeTaxSetupUpdateStateTaxesMutationVariables) => Promise<EmployeeTaxSetupUpdateStateTaxesMutationData>;
};
//# sourceMappingURL=employeeTaxSetupUpdateStateTaxes.d.ts.map