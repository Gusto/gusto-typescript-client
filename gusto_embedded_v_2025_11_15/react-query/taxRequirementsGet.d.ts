import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type TaxRequirementsGetQueryData = operations.GetV1CompaniesCompanyUuidTaxRequirementsStateResponse;
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
export declare function useTaxRequirementsGet(request: operations.GetV1CompaniesCompanyUuidTaxRequirementsStateRequest, options?: QueryHookOptions<TaxRequirementsGetQueryData>): UseQueryResult<TaxRequirementsGetQueryData, Error>;
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
export declare function useTaxRequirementsGetSuspense(request: operations.GetV1CompaniesCompanyUuidTaxRequirementsStateRequest, options?: SuspenseQueryHookOptions<TaxRequirementsGetQueryData>): UseSuspenseQueryResult<TaxRequirementsGetQueryData, Error>;
export declare function prefetchTaxRequirementsGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyUuidTaxRequirementsStateRequest): Promise<void>;
export declare function setTaxRequirementsGetData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    state: string,
    parameters: {
        scheduling?: boolean | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: TaxRequirementsGetQueryData): TaxRequirementsGetQueryData | undefined;
export declare function invalidateTaxRequirementsGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyUuid: string,
    state: string,
    parameters: {
        scheduling?: boolean | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllTaxRequirementsGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildTaxRequirementsGetQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyUuidTaxRequirementsStateRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<TaxRequirementsGetQueryData>;
};
export declare function queryKeyTaxRequirementsGet(companyUuid: string, state: string, parameters: {
    scheduling?: boolean | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=taxRequirementsGet.d.ts.map