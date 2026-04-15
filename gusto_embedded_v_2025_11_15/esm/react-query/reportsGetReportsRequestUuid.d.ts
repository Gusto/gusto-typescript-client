import { InvalidateQueryFilters, QueryClient, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { VersionHeader } from "../models/components/versionheader.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { GetReportsRequestUuidRequest } from "../models/operations/getreportsrequestuuid.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
import { buildReportsGetReportsRequestUuidQuery, prefetchReportsGetReportsRequestUuid, queryKeyReportsGetReportsRequestUuid, ReportsGetReportsRequestUuidQueryData } from "./reportsGetReportsRequestUuid.core.js";
export { buildReportsGetReportsRequestUuidQuery, prefetchReportsGetReportsRequestUuid, queryKeyReportsGetReportsRequestUuid, type ReportsGetReportsRequestUuidQueryData, };
export type ReportsGetReportsRequestUuidQueryError = GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError;
/**
 * Get a report
 *
 * @remarks
 * Get a company's report given the `request_uuid`. The response will include the report request's status and, if complete, the report URL.
 *
 * Reports containing PHI are inaccessible with `company_reports:read:tier_2_only` data scope
 *
 * scope: `company_reports:read`
 */
export declare function useReportsGetReportsRequestUuid(request: GetReportsRequestUuidRequest, options?: QueryHookOptions<ReportsGetReportsRequestUuidQueryData, ReportsGetReportsRequestUuidQueryError>): UseQueryResult<ReportsGetReportsRequestUuidQueryData, ReportsGetReportsRequestUuidQueryError>;
/**
 * Get a report
 *
 * @remarks
 * Get a company's report given the `request_uuid`. The response will include the report request's status and, if complete, the report URL.
 *
 * Reports containing PHI are inaccessible with `company_reports:read:tier_2_only` data scope
 *
 * scope: `company_reports:read`
 */
export declare function useReportsGetReportsRequestUuidSuspense(request: GetReportsRequestUuidRequest, options?: SuspenseQueryHookOptions<ReportsGetReportsRequestUuidQueryData, ReportsGetReportsRequestUuidQueryError>): UseSuspenseQueryResult<ReportsGetReportsRequestUuidQueryData, ReportsGetReportsRequestUuidQueryError>;
export declare function setReportsGetReportsRequestUuidData(client: QueryClient, queryKeyBase: [
    requestUuid: string,
    parameters: {
        xGustoAPIVersion?: VersionHeader | undefined;
    }
], data: ReportsGetReportsRequestUuidQueryData): ReportsGetReportsRequestUuidQueryData | undefined;
export declare function invalidateReportsGetReportsRequestUuid(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    requestUuid: string,
    parameters: {
        xGustoAPIVersion?: VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllReportsGetReportsRequestUuid(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
//# sourceMappingURL=reportsGetReportsRequestUuid.d.ts.map