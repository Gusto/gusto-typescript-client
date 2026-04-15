import { InvalidateQueryFilters, QueryClient, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { VersionHeader } from "../models/components/versionheader.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { GetV1CompaniesCompanyIdAdminsRequest } from "../models/operations/getv1companiescompanyidadmins.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
import { buildCompaniesListAdminsQuery, CompaniesListAdminsQueryData, prefetchCompaniesListAdmins, queryKeyCompaniesListAdmins } from "./companiesListAdmins.core.js";
export { buildCompaniesListAdminsQuery, type CompaniesListAdminsQueryData, prefetchCompaniesListAdmins, queryKeyCompaniesListAdmins, };
export type CompaniesListAdminsQueryError = GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError;
/**
 * Get all the admins at a company
 *
 * @remarks
 * Returns a list of all the admins at a company
 *
 * scope: `company_admin:read`
 */
export declare function useCompaniesListAdmins(request: GetV1CompaniesCompanyIdAdminsRequest, options?: QueryHookOptions<CompaniesListAdminsQueryData, CompaniesListAdminsQueryError>): UseQueryResult<CompaniesListAdminsQueryData, CompaniesListAdminsQueryError>;
/**
 * Get all the admins at a company
 *
 * @remarks
 * Returns a list of all the admins at a company
 *
 * scope: `company_admin:read`
 */
export declare function useCompaniesListAdminsSuspense(request: GetV1CompaniesCompanyIdAdminsRequest, options?: SuspenseQueryHookOptions<CompaniesListAdminsQueryData, CompaniesListAdminsQueryError>): UseSuspenseQueryResult<CompaniesListAdminsQueryData, CompaniesListAdminsQueryError>;
export declare function setCompaniesListAdminsData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: VersionHeader | undefined;
    }
], data: CompaniesListAdminsQueryData): CompaniesListAdminsQueryData | undefined;
export declare function invalidateCompaniesListAdmins(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllCompaniesListAdmins(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
//# sourceMappingURL=companiesListAdmins.d.ts.map