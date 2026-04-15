import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type SignatoriesGetQueryData = Array<components.Signatory>;
/**
 * Get all company signatories
 *
 * @remarks
 * Returns company signatories. Currently we only support a single signatory per company.
 *
 * scope: `signatories:read`
 */
export declare function useSignatoriesGet(request: operations.GetV1CompaniesCompanyUuidSignatoriesRequest, options?: QueryHookOptions<SignatoriesGetQueryData>): UseQueryResult<SignatoriesGetQueryData, Error>;
/**
 * Get all company signatories
 *
 * @remarks
 * Returns company signatories. Currently we only support a single signatory per company.
 *
 * scope: `signatories:read`
 */
export declare function useSignatoriesGetSuspense(request: operations.GetV1CompaniesCompanyUuidSignatoriesRequest, options?: SuspenseQueryHookOptions<SignatoriesGetQueryData>): UseSuspenseQueryResult<SignatoriesGetQueryData, Error>;
export declare function prefetchSignatoriesGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyUuidSignatoriesRequest): Promise<void>;
export declare function setSignatoriesGetData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: SignatoriesGetQueryData): SignatoriesGetQueryData | undefined;
export declare function invalidateSignatoriesGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllSignatoriesGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildSignatoriesGetQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyUuidSignatoriesRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<SignatoriesGetQueryData>;
};
export declare function queryKeySignatoriesGet(companyUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=signatoriesGet.d.ts.map