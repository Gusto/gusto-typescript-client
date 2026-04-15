import { InvalidateQueryFilters, QueryClient, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { VersionHeader } from "../models/components/versionheader.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { GetV1CompaniesCompanyUuidTaxRequirementsStateRequest } from "../models/operations/getv1companiescompanyuuidtaxrequirementsstate.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
import { buildTaxRequirementsGetQuery, prefetchTaxRequirementsGet, queryKeyTaxRequirementsGet, TaxRequirementsGetQueryData } from "./taxRequirementsGet.core.js";
export { buildTaxRequirementsGetQuery, prefetchTaxRequirementsGet, queryKeyTaxRequirementsGet, type TaxRequirementsGetQueryData, };
export type TaxRequirementsGetQueryError = GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError;
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
export declare function useTaxRequirementsGet(request: GetV1CompaniesCompanyUuidTaxRequirementsStateRequest, options?: QueryHookOptions<TaxRequirementsGetQueryData, TaxRequirementsGetQueryError>): UseQueryResult<TaxRequirementsGetQueryData, TaxRequirementsGetQueryError>;
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
export declare function useTaxRequirementsGetSuspense(request: GetV1CompaniesCompanyUuidTaxRequirementsStateRequest, options?: SuspenseQueryHookOptions<TaxRequirementsGetQueryData, TaxRequirementsGetQueryError>): UseSuspenseQueryResult<TaxRequirementsGetQueryData, TaxRequirementsGetQueryError>;
export declare function setTaxRequirementsGetData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    state: string,
    parameters: {
        scheduling?: boolean | undefined;
        xGustoAPIVersion?: VersionHeader | undefined;
    }
], data: TaxRequirementsGetQueryData): TaxRequirementsGetQueryData | undefined;
export declare function invalidateTaxRequirementsGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyUuid: string,
    state: string,
    parameters: {
        scheduling?: boolean | undefined;
        xGustoAPIVersion?: VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllTaxRequirementsGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
//# sourceMappingURL=taxRequirementsGet.d.ts.map