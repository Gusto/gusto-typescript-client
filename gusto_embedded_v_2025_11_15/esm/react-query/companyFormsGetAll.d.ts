import { InvalidateQueryFilters, QueryClient, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { VersionHeader } from "../models/components/versionheader.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { GetV1CompanyFormsRequest } from "../models/operations/getv1companyforms.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
import { buildCompanyFormsGetAllQuery, CompanyFormsGetAllQueryData, prefetchCompanyFormsGetAll, queryKeyCompanyFormsGetAll } from "./companyFormsGetAll.core.js";
export { buildCompanyFormsGetAllQuery, type CompanyFormsGetAllQueryData, prefetchCompanyFormsGetAll, queryKeyCompanyFormsGetAll, };
export type CompanyFormsGetAllQueryError = GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError;
/**
 * Get all company forms
 *
 * @remarks
 * Get a list of all company's forms
 *
 * scope: `company_forms:read`
 */
export declare function useCompanyFormsGetAll(request: GetV1CompanyFormsRequest, options?: QueryHookOptions<CompanyFormsGetAllQueryData, CompanyFormsGetAllQueryError>): UseQueryResult<CompanyFormsGetAllQueryData, CompanyFormsGetAllQueryError>;
/**
 * Get all company forms
 *
 * @remarks
 * Get a list of all company's forms
 *
 * scope: `company_forms:read`
 */
export declare function useCompanyFormsGetAllSuspense(request: GetV1CompanyFormsRequest, options?: SuspenseQueryHookOptions<CompanyFormsGetAllQueryData, CompanyFormsGetAllQueryError>): UseSuspenseQueryResult<CompanyFormsGetAllQueryData, CompanyFormsGetAllQueryError>;
export declare function setCompanyFormsGetAllData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        sortBy?: string | undefined;
        xGustoAPIVersion?: VersionHeader | undefined;
    }
], data: CompanyFormsGetAllQueryData): CompanyFormsGetAllQueryData | undefined;
export declare function invalidateCompanyFormsGetAll(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        sortBy?: string | undefined;
        xGustoAPIVersion?: VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllCompanyFormsGetAll(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
//# sourceMappingURL=companyFormsGetAll.d.ts.map