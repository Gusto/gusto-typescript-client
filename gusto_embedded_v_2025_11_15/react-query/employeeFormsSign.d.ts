import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeeFormsSignMutationVariables = {
    request: operations.PutV1EmployeeFormSignRequest;
    options?: RequestOptions;
};
export type EmployeeFormsSignMutationData = operations.PutV1EmployeeFormSignResponse;
/**
 * Sign an employee form
 *
 * @remarks
 * Sign an employee form.
 *
 * The optional preparer attributes are only valid for I-9 form. When a preparer is used, the
 * first name, last name, street address, city, state, and zip for that preparer are all required.
 *
 * scope: `employee_forms:sign`
 */
export declare function useEmployeeFormsSignMutation(options?: MutationHookOptions<EmployeeFormsSignMutationData, Error, EmployeeFormsSignMutationVariables>): UseMutationResult<EmployeeFormsSignMutationData, Error, EmployeeFormsSignMutationVariables>;
export declare function mutationKeyEmployeeFormsSign(): MutationKey;
export declare function buildEmployeeFormsSignMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeeFormsSignMutationVariables) => Promise<EmployeeFormsSignMutationData>;
};
//# sourceMappingURL=employeeFormsSign.d.ts.map