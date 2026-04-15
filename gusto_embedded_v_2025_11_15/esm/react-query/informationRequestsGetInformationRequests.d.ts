import { InvalidateQueryFilters, QueryClient, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { VersionHeader } from "../models/components/versionheader.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { GetInformationRequestsRequest } from "../models/operations/getinformationrequests.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
import { buildInformationRequestsGetInformationRequestsQuery, InformationRequestsGetInformationRequestsQueryData, prefetchInformationRequestsGetInformationRequests, queryKeyInformationRequestsGetInformationRequests } from "./informationRequestsGetInformationRequests.core.js";
export { buildInformationRequestsGetInformationRequestsQuery, type InformationRequestsGetInformationRequestsQueryData, prefetchInformationRequestsGetInformationRequests, queryKeyInformationRequestsGetInformationRequests, };
export type InformationRequestsGetInformationRequestsQueryError = GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError;
/**
 * Get all information requests for a company
 *
 * @remarks
 * Fetch all information requests for a company.
 *
 * scope: `information_requests:read`
 */
export declare function useInformationRequestsGetInformationRequests(request: GetInformationRequestsRequest, options?: QueryHookOptions<InformationRequestsGetInformationRequestsQueryData, InformationRequestsGetInformationRequestsQueryError>): UseQueryResult<InformationRequestsGetInformationRequestsQueryData, InformationRequestsGetInformationRequestsQueryError>;
/**
 * Get all information requests for a company
 *
 * @remarks
 * Fetch all information requests for a company.
 *
 * scope: `information_requests:read`
 */
export declare function useInformationRequestsGetInformationRequestsSuspense(request: GetInformationRequestsRequest, options?: SuspenseQueryHookOptions<InformationRequestsGetInformationRequestsQueryData, InformationRequestsGetInformationRequestsQueryError>): UseSuspenseQueryResult<InformationRequestsGetInformationRequestsQueryData, InformationRequestsGetInformationRequestsQueryError>;
export declare function setInformationRequestsGetInformationRequestsData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: VersionHeader | undefined;
    }
], data: InformationRequestsGetInformationRequestsQueryData): InformationRequestsGetInformationRequestsQueryData | undefined;
export declare function invalidateInformationRequestsGetInformationRequests(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllInformationRequestsGetInformationRequests(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
//# sourceMappingURL=informationRequestsGetInformationRequests.d.ts.map