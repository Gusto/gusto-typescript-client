import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type TaxRequirementsGetByStateQueryData = components.TaxRequirementsState;
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
export declare function useTaxRequirementsGetByState(request: operations.GetV1CompaniesCompanyUuidTaxRequirementsStateRequest, options?: QueryHookOptions<TaxRequirementsGetByStateQueryData>): UseQueryResult<TaxRequirementsGetByStateQueryData, Error>;
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
export declare function useTaxRequirementsGetByStateSuspense(request: operations.GetV1CompaniesCompanyUuidTaxRequirementsStateRequest, options?: SuspenseQueryHookOptions<TaxRequirementsGetByStateQueryData>): UseSuspenseQueryResult<TaxRequirementsGetByStateQueryData, Error>;
export declare function prefetchTaxRequirementsGetByState(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyUuidTaxRequirementsStateRequest): Promise<void>;
export declare function setTaxRequirementsGetByStateData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    state: string,
    parameters: {
        scheduling?: boolean | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: TaxRequirementsGetByStateQueryData): TaxRequirementsGetByStateQueryData | undefined;
export declare function invalidateTaxRequirementsGetByState(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyUuid: string,
    state: string,
    parameters: {
        scheduling?: boolean | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllTaxRequirementsGetByState(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildTaxRequirementsGetByStateQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyUuidTaxRequirementsStateRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<TaxRequirementsGetByStateQueryData>;
};
export declare function queryKeyTaxRequirementsGetByState(companyUuid: string, state: string, parameters: {
    scheduling?: boolean | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=taxRequirementsGetByState.d.ts.map