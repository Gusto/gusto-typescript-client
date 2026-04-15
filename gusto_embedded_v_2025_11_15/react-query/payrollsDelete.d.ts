import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type PayrollsDeleteMutationVariables = {
    request: operations.DeleteV1CompaniesCompanyIdPayrollsRequest;
    options?: RequestOptions;
};
export type PayrollsDeleteMutationData = operations.DeleteV1CompaniesCompanyIdPayrollsResponse;
/**
 * Delete a payroll
 *
 * @remarks
 * This endpoint allows you to delete an **unprocessed** payroll.
 *
 * By default the payroll and associated data is deleted synchronously. To request an asynchronous delete, use the `async=true` query parameter. In both cases validation of ability to delete will be performed and an Unprocessable Entity error will be returned if the payroll is not able to be deleted. A successful synchronous delete will return `204/No Content`. When a payroll has been enqueued for asynchronous deletion, `202/Accepted` will be returned.
 *
 * scope: `payrolls:run`
 */
export declare function usePayrollsDeleteMutation(options?: MutationHookOptions<PayrollsDeleteMutationData, Error, PayrollsDeleteMutationVariables>): UseMutationResult<PayrollsDeleteMutationData, Error, PayrollsDeleteMutationVariables>;
export declare function mutationKeyPayrollsDelete(): MutationKey;
export declare function buildPayrollsDeleteMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: PayrollsDeleteMutationVariables) => Promise<PayrollsDeleteMutationData>;
};
//# sourceMappingURL=payrollsDelete.d.ts.map