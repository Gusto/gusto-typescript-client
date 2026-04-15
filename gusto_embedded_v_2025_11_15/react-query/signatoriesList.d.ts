import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type SignatoriesListQueryData = operations.GetV1CompaniesCompanyUuidSignatoriesResponse;
/**
 * Get all company signatories
 *
 * @remarks
 * Returns company signatories. Currently we only support a single signatory per company.
 *
 * scope: `signatories:read`
 */
export declare function useSignatoriesList(request: operations.GetV1CompaniesCompanyUuidSignatoriesRequest, options?: QueryHookOptions<SignatoriesListQueryData>): UseQueryResult<SignatoriesListQueryData, Error>;
/**
 * Get all company signatories
 *
 * @remarks
 * Returns company signatories. Currently we only support a single signatory per company.
 *
 * scope: `signatories:read`
 */
export declare function useSignatoriesListSuspense(request: operations.GetV1CompaniesCompanyUuidSignatoriesRequest, options?: SuspenseQueryHookOptions<SignatoriesListQueryData>): UseSuspenseQueryResult<SignatoriesListQueryData, Error>;
export declare function prefetchSignatoriesList(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyUuidSignatoriesRequest): Promise<void>;
export declare function setSignatoriesListData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: SignatoriesListQueryData): SignatoriesListQueryData | undefined;
export declare function invalidateSignatoriesList(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllSignatoriesList(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildSignatoriesListQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyUuidSignatoriesRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<SignatoriesListQueryData>;
};
export declare function queryKeySignatoriesList(companyUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=signatoriesList.d.ts.map