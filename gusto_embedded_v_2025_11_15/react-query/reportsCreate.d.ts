import { MutationKey, UseMutationResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { MutationHookOptions } from "./_types.js";
export type ReportsCreateMutationVariables = {
    request: operations.PostCompaniesCompanyUuidReportsRequest;
    options?: RequestOptions;
};
export type ReportsCreateMutationData = components.CreateReport;
/**
 * Create a custom report
 *
 * @remarks
 * Create a custom report for a company. This endpoint initiates creating a custom report with custom columns, groupings, and filters. The `request_uuid` in the response can then be used to poll for the status and report URL upon completion using the report GET endpoint.
 *
 * scope: `company_reports:write`
 */
export declare function useReportsCreateMutation(options?: MutationHookOptions<ReportsCreateMutationData, Error, ReportsCreateMutationVariables>): UseMutationResult<ReportsCreateMutationData, Error, ReportsCreateMutationVariables>;
export declare function mutationKeyReportsCreate(): MutationKey;
export declare function buildReportsCreateMutation(client$: GustoEmbeddedCore, hookOptions?: RequestOptions): {
    mutationKey: MutationKey;
    mutationFn: (variables: ReportsCreateMutationVariables) => Promise<ReportsCreateMutationData>;
};
//# sourceMappingURL=reportsCreate.d.ts.map