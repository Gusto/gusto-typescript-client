import { InvalidateQueryFilters, QueryClient, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { VersionHeader } from "../models/components/versionheader.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { GetWireInRequestsWireInRequestUuidRequest } from "../models/operations/getwireinrequestswireinrequestuuid.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
import { buildWireInRequestsGetQuery, prefetchWireInRequestsGet, queryKeyWireInRequestsGet, WireInRequestsGetQueryData } from "./wireInRequestsGet.core.js";
export { buildWireInRequestsGetQuery, prefetchWireInRequestsGet, queryKeyWireInRequestsGet, type WireInRequestsGetQueryData, };
export type WireInRequestsGetQueryError = GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError;
/**
 * Get a single Wire In Request
 *
 * @remarks
 * Fetch a Wire In Request.
 *
 * scope: `payrolls:read`
 */
export declare function useWireInRequestsGet(request: GetWireInRequestsWireInRequestUuidRequest, options?: QueryHookOptions<WireInRequestsGetQueryData, WireInRequestsGetQueryError>): UseQueryResult<WireInRequestsGetQueryData, WireInRequestsGetQueryError>;
/**
 * Get a single Wire In Request
 *
 * @remarks
 * Fetch a Wire In Request.
 *
 * scope: `payrolls:read`
 */
export declare function useWireInRequestsGetSuspense(request: GetWireInRequestsWireInRequestUuidRequest, options?: SuspenseQueryHookOptions<WireInRequestsGetQueryData, WireInRequestsGetQueryError>): UseSuspenseQueryResult<WireInRequestsGetQueryData, WireInRequestsGetQueryError>;
export declare function setWireInRequestsGetData(client: QueryClient, queryKeyBase: [
    wireInRequestUuid: string,
    parameters: {
        xGustoAPIVersion?: VersionHeader | undefined;
    }
], data: WireInRequestsGetQueryData): WireInRequestsGetQueryData | undefined;
export declare function invalidateWireInRequestsGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    wireInRequestUuid: string,
    parameters: {
        xGustoAPIVersion?: VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllWireInRequestsGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
//# sourceMappingURL=wireInRequestsGet.d.ts.map