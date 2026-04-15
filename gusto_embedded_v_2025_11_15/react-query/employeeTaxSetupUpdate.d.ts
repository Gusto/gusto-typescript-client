import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeeTaxSetupUpdateMutationVariables = {
    request: operations.PutV1EmployeesEmployeeIdStateTaxesRequest;
    options?: RequestOptions;
};
export type EmployeeTaxSetupUpdateMutationData = Array<components.EmployeeStateTax>;
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
export declare function useEmployeeTaxSetupUpdateMutation(options?: MutationHookOptions<EmployeeTaxSetupUpdateMutationData, Error, EmployeeTaxSetupUpdateMutationVariables>): UseMutationResult<EmployeeTaxSetupUpdateMutationData, Error, EmployeeTaxSetupUpdateMutationVariables>;
export declare function mutationKeyEmployeeTaxSetupUpdate(): MutationKey;
export declare function buildEmployeeTaxSetupUpdateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeeTaxSetupUpdateMutationVariables) => Promise<EmployeeTaxSetupUpdateMutationData>;
};
//# sourceMappingURL=employeeTaxSetupUpdate.d.ts.map