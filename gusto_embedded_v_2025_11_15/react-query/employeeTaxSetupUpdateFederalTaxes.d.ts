import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type EmployeeTaxSetupUpdateFederalTaxesMutationVariables = {
    request: operations.PutV1EmployeesEmployeeIdFederalTaxesRequest;
    options?: RequestOptions;
};
export type EmployeeTaxSetupUpdateFederalTaxesMutationData = operations.PutV1EmployeesEmployeeIdFederalTaxesResponse;
/**
 * Update an employee's federal taxes
 *
 * @remarks
 * Update attributes relevant for an employee's federal taxes.
 *
 * scope: `employee_federal_taxes:write`
 */
export declare function useEmployeeTaxSetupUpdateFederalTaxesMutation(options?: MutationHookOptions<EmployeeTaxSetupUpdateFederalTaxesMutationData, Error, EmployeeTaxSetupUpdateFederalTaxesMutationVariables>): UseMutationResult<EmployeeTaxSetupUpdateFederalTaxesMutationData, Error, EmployeeTaxSetupUpdateFederalTaxesMutationVariables>;
export declare function mutationKeyEmployeeTaxSetupUpdateFederalTaxes(): MutationKey;
export declare function buildEmployeeTaxSetupUpdateFederalTaxesMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: EmployeeTaxSetupUpdateFederalTaxesMutationVariables) => Promise<EmployeeTaxSetupUpdateFederalTaxesMutationData>;
};
//# sourceMappingURL=employeeTaxSetupUpdateFederalTaxes.d.ts.map