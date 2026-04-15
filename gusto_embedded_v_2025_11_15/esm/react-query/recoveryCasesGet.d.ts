import { InvalidateQueryFilters, QueryClient, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { VersionHeader } from "../models/components/versionheader.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { GetRecoveryCasesRequest } from "../models/operations/getrecoverycases.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
import { buildRecoveryCasesGetQuery, prefetchRecoveryCasesGet, queryKeyRecoveryCasesGet, RecoveryCasesGetQueryData } from "./recoveryCasesGet.core.js";
export { buildRecoveryCasesGetQuery, prefetchRecoveryCasesGet, queryKeyRecoveryCasesGet, type RecoveryCasesGetQueryData, };
export type RecoveryCasesGetQueryError = GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError;
/**
 * Get all recovery cases for a company
 *
 * @remarks
 * Fetch all recovery cases for a company.
 *
 * scope: `recovery_cases:read`
 */
export declare function useRecoveryCasesGet(request: GetRecoveryCasesRequest, options?: QueryHookOptions<RecoveryCasesGetQueryData, RecoveryCasesGetQueryError>): UseQueryResult<RecoveryCasesGetQueryData, RecoveryCasesGetQueryError>;
/**
 * Get all recovery cases for a company
 *
 * @remarks
 * Fetch all recovery cases for a company.
 *
 * scope: `recovery_cases:read`
 */
export declare function useRecoveryCasesGetSuspense(request: GetRecoveryCasesRequest, options?: SuspenseQueryHookOptions<RecoveryCasesGetQueryData, RecoveryCasesGetQueryError>): UseSuspenseQueryResult<RecoveryCasesGetQueryData, RecoveryCasesGetQueryError>;
export declare function setRecoveryCasesGetData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: VersionHeader | undefined;
    }
], data: RecoveryCasesGetQueryData): RecoveryCasesGetQueryData | undefined;
export declare function invalidateRecoveryCasesGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllRecoveryCasesGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
//# sourceMappingURL=recoveryCasesGet.d.ts.map