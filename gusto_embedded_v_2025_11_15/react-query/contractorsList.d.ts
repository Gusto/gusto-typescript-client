import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type ContractorsListQueryData = operations.GetV1CompaniesCompanyUuidContractorsResponse;
/**
 * Get contractors of a company
 *
 * @remarks
 * Get all contractors, active and inactive, individual and business, for a company.
 *
 * scope: `contractors:read`
 */
export declare function useContractorsList(request: operations.GetV1CompaniesCompanyUuidContractorsRequest, options?: QueryHookOptions<ContractorsListQueryData>): UseQueryResult<ContractorsListQueryData, Error>;
/**
 * Get contractors of a company
 *
 * @remarks
 * Get all contractors, active and inactive, individual and business, for a company.
 *
 * scope: `contractors:read`
 */
export declare function useContractorsListSuspense(request: operations.GetV1CompaniesCompanyUuidContractorsRequest, options?: SuspenseQueryHookOptions<ContractorsListQueryData>): UseSuspenseQueryResult<ContractorsListQueryData, Error>;
export declare function prefetchContractorsList(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyUuidContractorsRequest): Promise<void>;
export declare function setContractorsListData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        searchTerm?: string | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: ContractorsListQueryData): ContractorsListQueryData | undefined;
export declare function invalidateContractorsList(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyUuid: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        searchTerm?: string | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllContractorsList(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildContractorsListQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyUuidContractorsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ContractorsListQueryData>;
};
export declare function queryKeyContractorsList(companyUuid: string, parameters: {
    page?: number | undefined;
    per?: number | undefined;
    searchTerm?: string | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=contractorsList.d.ts.map