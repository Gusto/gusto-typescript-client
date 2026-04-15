import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type TaxRequirementsGetStateQueryData = components.TaxRequirementsState;
/**
 * Get State Tax Requirements
 *
 * @remarks
 * Get all tax requirements for a given state.
 *
 * ### Metadata Examples
 *
 * ```json select
 * {
 *   "type": "select",
 *   "options": [
 *     { "label": "Semiweekly",  value: "Semi-weekly" },
 *     { "label": "Monthly",  value: "Monthly" },
 *     { "label": "Quarterly",  value: "Quarterly" },
 *   ]
 * }
 * ```
 * ```json radio
 * {
 *   "type": "radio",
 *   "options": [
 *     { "label": "No, we cannot reimburse",  value: false, short_label: "Not Reimbursable" },
 *     { "label": "Yes, we can reimburse",  value: true, short_label: "Reimbursable" },
 *   ]
 * }
 * ```
 * ```json account_number
 * {
 *   "type": "account_number",
 *   "mask": "######-##',
 *   "prefix": null
 * }
 * ```
 * ```json tax_rate
 * {
 *   "type": "tax_rate",
 *   "validation": {
 *     "type": "min_max",
 *     "min": "0.0004",
 *     "max": "0.081"
 *   }
 * }
 * ```
 *
 * scope: `company_tax_requirements:read`
 */
export declare function useTaxRequirementsGetState(request: operations.GetV1CompaniesCompanyUuidTaxRequirementsStateRequest, options?: QueryHookOptions<TaxRequirementsGetStateQueryData>): UseQueryResult<TaxRequirementsGetStateQueryData, Error>;
/**
 * Get State Tax Requirements
 *
 * @remarks
 * Get all tax requirements for a given state.
 *
 * ### Metadata Examples
 *
 * ```json select
 * {
 *   "type": "select",
 *   "options": [
 *     { "label": "Semiweekly",  value: "Semi-weekly" },
 *     { "label": "Monthly",  value: "Monthly" },
 *     { "label": "Quarterly",  value: "Quarterly" },
 *   ]
 * }
 * ```
 * ```json radio
 * {
 *   "type": "radio",
 *   "options": [
 *     { "label": "No, we cannot reimburse",  value: false, short_label: "Not Reimbursable" },
 *     { "label": "Yes, we can reimburse",  value: true, short_label: "Reimbursable" },
 *   ]
 * }
 * ```
 * ```json account_number
 * {
 *   "type": "account_number",
 *   "mask": "######-##',
 *   "prefix": null
 * }
 * ```
 * ```json tax_rate
 * {
 *   "type": "tax_rate",
 *   "validation": {
 *     "type": "min_max",
 *     "min": "0.0004",
 *     "max": "0.081"
 *   }
 * }
 * ```
 *
 * scope: `company_tax_requirements:read`
 */
export declare function useTaxRequirementsGetStateSuspense(request: operations.GetV1CompaniesCompanyUuidTaxRequirementsStateRequest, options?: SuspenseQueryHookOptions<TaxRequirementsGetStateQueryData>): UseSuspenseQueryResult<TaxRequirementsGetStateQueryData, Error>;
export declare function prefetchTaxRequirementsGetState(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyUuidTaxRequirementsStateRequest): Promise<void>;
export declare function setTaxRequirementsGetStateData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    state: string,
    parameters: {
        scheduling?: boolean | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: TaxRequirementsGetStateQueryData): TaxRequirementsGetStateQueryData | undefined;
export declare function invalidateTaxRequirementsGetState(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyUuid: string,
    state: string,
    parameters: {
        scheduling?: boolean | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllTaxRequirementsGetState(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildTaxRequirementsGetStateQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyUuidTaxRequirementsStateRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<TaxRequirementsGetStateQueryData>;
};
export declare function queryKeyTaxRequirementsGetState(companyUuid: string, state: string, parameters: {
    scheduling?: boolean | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=taxRequirementsGetState.d.ts.map