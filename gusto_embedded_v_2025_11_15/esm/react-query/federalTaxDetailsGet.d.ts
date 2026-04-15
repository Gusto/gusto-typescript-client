import { InvalidateQueryFilters, QueryClient, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { VersionHeader } from "../models/components/versionheader.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { GetV1CompaniesCompanyIdFederalTaxDetailsRequest } from "../models/operations/getv1companiescompanyidfederaltaxdetails.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
import { buildFederalTaxDetailsGetQuery, FederalTaxDetailsGetQueryData, prefetchFederalTaxDetailsGet, queryKeyFederalTaxDetailsGet } from "./federalTaxDetailsGet.core.js";
export { buildFederalTaxDetailsGetQuery, type FederalTaxDetailsGetQueryData, prefetchFederalTaxDetailsGet, queryKeyFederalTaxDetailsGet, };
export type FederalTaxDetailsGetQueryError = GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError;
/**
 * Get Federal Tax Details
 *
 * @remarks
 * Fetches attributes relevant for a company's federal taxes.
 *
 * scope: `company_federal_taxes:read`
 */
export declare function useFederalTaxDetailsGet(request: GetV1CompaniesCompanyIdFederalTaxDetailsRequest, options?: QueryHookOptions<FederalTaxDetailsGetQueryData, FederalTaxDetailsGetQueryError>): UseQueryResult<FederalTaxDetailsGetQueryData, FederalTaxDetailsGetQueryError>;
/**
 * Get Federal Tax Details
 *
 * @remarks
 * Fetches attributes relevant for a company's federal taxes.
 *
 * scope: `company_federal_taxes:read`
 */
export declare function useFederalTaxDetailsGetSuspense(request: GetV1CompaniesCompanyIdFederalTaxDetailsRequest, options?: SuspenseQueryHookOptions<FederalTaxDetailsGetQueryData, FederalTaxDetailsGetQueryError>): UseSuspenseQueryResult<FederalTaxDetailsGetQueryData, FederalTaxDetailsGetQueryError>;
export declare function setFederalTaxDetailsGetData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        xGustoAPIVersion?: VersionHeader | undefined;
    }
], data: FederalTaxDetailsGetQueryData): FederalTaxDetailsGetQueryData | undefined;
export declare function invalidateFederalTaxDetailsGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        xGustoAPIVersion?: VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllFederalTaxDetailsGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
//# sourceMappingURL=federalTaxDetailsGet.d.ts.map