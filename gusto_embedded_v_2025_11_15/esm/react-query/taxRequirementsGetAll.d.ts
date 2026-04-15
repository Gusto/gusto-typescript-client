import { InvalidateQueryFilters, QueryClient, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { VersionHeader } from "../models/components/versionheader.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { GetV1CompaniesCompanyUuidTaxRequirementsRequest } from "../models/operations/getv1companiescompanyuuidtaxrequirements.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
import { buildTaxRequirementsGetAllQuery, prefetchTaxRequirementsGetAll, queryKeyTaxRequirementsGetAll, TaxRequirementsGetAllQueryData } from "./taxRequirementsGetAll.core.js";
export { buildTaxRequirementsGetAllQuery, prefetchTaxRequirementsGetAll, queryKeyTaxRequirementsGetAll, type TaxRequirementsGetAllQueryData, };
export type TaxRequirementsGetAllQueryError = GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError;
/**
 * Get All Tax Requirement States
 *
 * @remarks
 * Returns objects describing the states that have tax requirements for the company
 *
 * scope: `company_tax_requirements:read`
 */
export declare function useTaxRequirementsGetAll(request: GetV1CompaniesCompanyUuidTaxRequirementsRequest, options?: QueryHookOptions<TaxRequirementsGetAllQueryData, TaxRequirementsGetAllQueryError>): UseQueryResult<TaxRequirementsGetAllQueryData, TaxRequirementsGetAllQueryError>;
/**
 * Get All Tax Requirement States
 *
 * @remarks
 * Returns objects describing the states that have tax requirements for the company
 *
 * scope: `company_tax_requirements:read`
 */
export declare function useTaxRequirementsGetAllSuspense(request: GetV1CompaniesCompanyUuidTaxRequirementsRequest, options?: SuspenseQueryHookOptions<TaxRequirementsGetAllQueryData, TaxRequirementsGetAllQueryError>): UseSuspenseQueryResult<TaxRequirementsGetAllQueryData, TaxRequirementsGetAllQueryError>;
export declare function setTaxRequirementsGetAllData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: VersionHeader | undefined;
    }
], data: TaxRequirementsGetAllQueryData): TaxRequirementsGetAllQueryData | undefined;
export declare function invalidateTaxRequirementsGetAll(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllTaxRequirementsGetAll(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
//# sourceMappingURL=taxRequirementsGetAll.d.ts.map