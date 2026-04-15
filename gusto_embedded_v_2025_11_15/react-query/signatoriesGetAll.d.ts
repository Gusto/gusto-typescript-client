import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type SignatoriesGetAllQueryData = Array<components.Signatory>;
/**
 * Get all company signatories
 *
 * @remarks
 * Returns company signatories. Currently we only support a single signatory per company.
 *
 * scope: `signatories:read`
 */
export declare function useSignatoriesGetAll(request: operations.GetV1CompaniesCompanyUuidSignatoriesRequest, options?: QueryHookOptions<SignatoriesGetAllQueryData>): UseQueryResult<SignatoriesGetAllQueryData, Error>;
/**
 * Get all company signatories
 *
 * @remarks
 * Returns company signatories. Currently we only support a single signatory per company.
 *
 * scope: `signatories:read`
 */
export declare function useSignatoriesGetAllSuspense(request: operations.GetV1CompaniesCompanyUuidSignatoriesRequest, options?: SuspenseQueryHookOptions<SignatoriesGetAllQueryData>): UseSuspenseQueryResult<SignatoriesGetAllQueryData, Error>;
export declare function prefetchSignatoriesGetAll(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyUuidSignatoriesRequest): Promise<void>;
export declare function setSignatoriesGetAllData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: SignatoriesGetAllQueryData): SignatoriesGetAllQueryData | undefined;
export declare function invalidateSignatoriesGetAll(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllSignatoriesGetAll(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildSignatoriesGetAllQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyUuidSignatoriesRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<SignatoriesGetAllQueryData>;
};
export declare function queryKeySignatoriesGetAll(companyUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=signatoriesGetAll.d.ts.map