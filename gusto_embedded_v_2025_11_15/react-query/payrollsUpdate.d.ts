import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type PayrollsUpdateMutationVariables = {
    request: operations.PutV1CompaniesCompanyIdPayrollsRequest;
    options?: RequestOptions;
};
export type PayrollsUpdateMutationData = operations.PutV1CompaniesCompanyIdPayrollsResponse;
/**
 * Update a payroll by ID
 *
 * @remarks
 * This endpoint allows you to update information for one or more employees for a specific **unprocessed** payroll.  You can think of the **unprocessed**
 * payroll object as a template of fields that you can update.  You cannot modify the structure of the payroll object through this endpoint, only values
 * of the fields included in the payroll.  If you do not include specific employee compensations or fixed/hourly compensations in your request body, they
 * will not be removed from the payroll.
 *
 * scope: `payrolls:write`
 */
export declare function usePayrollsUpdateMutation(options?: MutationHookOptions<PayrollsUpdateMutationData, Error, PayrollsUpdateMutationVariables>): UseMutationResult<PayrollsUpdateMutationData, Error, PayrollsUpdateMutationVariables>;
export declare function mutationKeyPayrollsUpdate(): MutationKey;
export declare function buildPayrollsUpdateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: PayrollsUpdateMutationVariables) => Promise<PayrollsUpdateMutationData>;
};
//# sourceMappingURL=payrollsUpdate.d.ts.map