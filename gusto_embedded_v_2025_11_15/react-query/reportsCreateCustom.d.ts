import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type ReportsCreateCustomMutationVariables = {
    request: operations.PostCompaniesCompanyUuidReportsRequest;
    options?: RequestOptions;
};
export type ReportsCreateCustomMutationData = operations.PostCompaniesCompanyUuidReportsResponse;
/**
 * Create a custom report
 *
 * @remarks
 * Create a custom report for a company. This endpoint initiates creating a custom report with custom columns, groupings, and filters. The `request_uuid` in the response can then be used to poll for the status and report URL upon completion using the report GET endpoint.
 *
 * scope: `company_reports:write`
 */
export declare function useReportsCreateCustomMutation(options?: MutationHookOptions<ReportsCreateCustomMutationData, Error, ReportsCreateCustomMutationVariables>): UseMutationResult<ReportsCreateCustomMutationData, Error, ReportsCreateCustomMutationVariables>;
export declare function mutationKeyReportsCreateCustom(): MutationKey;
export declare function buildReportsCreateCustomMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: ReportsCreateCustomMutationVariables) => Promise<ReportsCreateCustomMutationData>;
};
//# sourceMappingURL=reportsCreateCustom.d.ts.map