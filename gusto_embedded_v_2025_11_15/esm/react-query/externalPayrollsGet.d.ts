import { InvalidateQueryFilters, QueryClient, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { VersionHeader } from "../models/components/versionheader.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { GetV1CompanyExternalPayrollsRequest } from "../models/operations/getv1companyexternalpayrolls.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
import { buildExternalPayrollsGetQuery, ExternalPayrollsGetQueryData, prefetchExternalPayrollsGet, queryKeyExternalPayrollsGet } from "./externalPayrollsGet.core.js";
export { buildExternalPayrollsGetQuery, type ExternalPayrollsGetQueryData, prefetchExternalPayrollsGet, queryKeyExternalPayrollsGet, };
export type ExternalPayrollsGetQueryError = GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError;
/**
 * Get external payrolls for a company
 *
 * @remarks
 * Get an external payroll for a given company.
 *
 * scope: `external_payrolls:read`
 */
export declare function useExternalPayrollsGet(request: GetV1CompanyExternalPayrollsRequest, options?: QueryHookOptions<ExternalPayrollsGetQueryData, ExternalPayrollsGetQueryError>): UseQueryResult<ExternalPayrollsGetQueryData, ExternalPayrollsGetQueryError>;
/**
 * Get external payrolls for a company
 *
 * @remarks
 * Get an external payroll for a given company.
 *
 * scope: `external_payrolls:read`
 */
export declare function useExternalPayrollsGetSuspense(request: GetV1CompanyExternalPayrollsRequest, options?: SuspenseQueryHookOptions<ExternalPayrollsGetQueryData, ExternalPayrollsGetQueryError>): UseSuspenseQueryResult<ExternalPayrollsGetQueryData, ExternalPayrollsGetQueryError>;
export declare function setExternalPayrollsGetData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: VersionHeader | undefined;
    }
], data: ExternalPayrollsGetQueryData): ExternalPayrollsGetQueryData | undefined;
export declare function invalidateExternalPayrollsGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllExternalPayrollsGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
//# sourceMappingURL=externalPayrollsGet.d.ts.map