import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type WireInRequestsListQueryData = operations.GetCompaniesCompanyUuidWireInRequestUuidResponse;
/**
 * Get all Wire In Requests for a company
 *
 * @remarks
 * Fetches all Wire In Requests for a company.
 *
 * scope: `payrolls:read`
 */
export declare function useWireInRequestsList(request: operations.GetCompaniesCompanyUuidWireInRequestUuidRequest, options?: QueryHookOptions<WireInRequestsListQueryData>): UseQueryResult<WireInRequestsListQueryData, Error>;
/**
 * Get all Wire In Requests for a company
 *
 * @remarks
 * Fetches all Wire In Requests for a company.
 *
 * scope: `payrolls:read`
 */
export declare function useWireInRequestsListSuspense(request: operations.GetCompaniesCompanyUuidWireInRequestUuidRequest, options?: SuspenseQueryHookOptions<WireInRequestsListQueryData>): UseSuspenseQueryResult<WireInRequestsListQueryData, Error>;
export declare function prefetchWireInRequestsList(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetCompaniesCompanyUuidWireInRequestUuidRequest): Promise<void>;
export declare function setWireInRequestsListData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: WireInRequestsListQueryData): WireInRequestsListQueryData | undefined;
export declare function invalidateWireInRequestsList(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllWireInRequestsList(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildWireInRequestsListQuery(client$: GustoEmbeddedCore, request: operations.GetCompaniesCompanyUuidWireInRequestUuidRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<WireInRequestsListQueryData>;
};
export declare function queryKeyWireInRequestsList(companyUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=wireInRequestsList.d.ts.map