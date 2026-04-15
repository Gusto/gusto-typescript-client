import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type WireInRequestsGetAllQueryData = Array<components.WireInRequest>;
/**
 * Get all Wire In Requests for a company
 *
 * @remarks
 * Fetches all Wire In Requests for a company.
 *
 * scope: `payrolls:read`
 */
export declare function useWireInRequestsGetAll(request: operations.GetCompaniesCompanyUuidWireInRequestUuidRequest, options?: QueryHookOptions<WireInRequestsGetAllQueryData>): UseQueryResult<WireInRequestsGetAllQueryData, Error>;
/**
 * Get all Wire In Requests for a company
 *
 * @remarks
 * Fetches all Wire In Requests for a company.
 *
 * scope: `payrolls:read`
 */
export declare function useWireInRequestsGetAllSuspense(request: operations.GetCompaniesCompanyUuidWireInRequestUuidRequest, options?: SuspenseQueryHookOptions<WireInRequestsGetAllQueryData>): UseSuspenseQueryResult<WireInRequestsGetAllQueryData, Error>;
export declare function prefetchWireInRequestsGetAll(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetCompaniesCompanyUuidWireInRequestUuidRequest): Promise<void>;
export declare function setWireInRequestsGetAllData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: WireInRequestsGetAllQueryData): WireInRequestsGetAllQueryData | undefined;
export declare function invalidateWireInRequestsGetAll(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllWireInRequestsGetAll(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildWireInRequestsGetAllQuery(client$: GustoEmbeddedCore, request: operations.GetCompaniesCompanyUuidWireInRequestUuidRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<WireInRequestsGetAllQueryData>;
};
export declare function queryKeyWireInRequestsGetAll(companyUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=wireInRequestsGetAll.d.ts.map