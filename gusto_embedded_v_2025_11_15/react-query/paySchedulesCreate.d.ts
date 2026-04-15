import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type PaySchedulesCreateMutationVariables = {
    request: operations.PostV1CompaniesCompanyIdPaySchedulesRequest;
    options?: RequestOptions;
};
export type PaySchedulesCreateMutationData = operations.PostV1CompaniesCompanyIdPaySchedulesResponse;
/**
 * Create a new pay schedule
 *
 * @remarks
 * If a company does not have any pay schedules, this endpoint will create a single pay schedule and assign it to all employees. This is a common use case during company onboarding.
 *
 * If a company has an existing active pay schedule and want to support multiple pay schedules, this endpoint will create a pay schedule that is not assigned to any employee.
 *
 * Be sure to **[check state laws](https://www.dol.gov/agencies/whd/state/payday)** to know what schedule is right for your customers.
 *
 * scope: `pay_schedules:write`
 */
export declare function usePaySchedulesCreateMutation(options?: MutationHookOptions<PaySchedulesCreateMutationData, Error, PaySchedulesCreateMutationVariables>): UseMutationResult<PaySchedulesCreateMutationData, Error, PaySchedulesCreateMutationVariables>;
export declare function mutationKeyPaySchedulesCreate(): MutationKey;
export declare function buildPaySchedulesCreateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: PaySchedulesCreateMutationVariables) => Promise<PaySchedulesCreateMutationData>;
};
//# sourceMappingURL=paySchedulesCreate.d.ts.map