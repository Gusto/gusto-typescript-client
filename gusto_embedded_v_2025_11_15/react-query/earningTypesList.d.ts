import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EarningTypesListQueryData = operations.GetV1CompaniesCompanyIdEarningTypesResponse;
/**
 * Get all earning types for a company
 *
 * @remarks
 * A payroll item in Gusto is associated to an earning type to name the type of earning described by the payroll item.
 *
 * #### Default Earning Type
 * Certain earning types are special because they have tax considerations. Those earning types are mostly the same for every company depending on its legal structure (LLC, Corporation, etc.)
 *
 * #### Custom Earning Type
 * Custom earning types are all the other earning types added specifically for a company.
 *
 * scope: `payrolls:read`
 */
export declare function useEarningTypesList(request: operations.GetV1CompaniesCompanyIdEarningTypesRequest, options?: QueryHookOptions<EarningTypesListQueryData>): UseQueryResult<EarningTypesListQueryData, Error>;
/**
 * Get all earning types for a company
 *
 * @remarks
 * A payroll item in Gusto is associated to an earning type to name the type of earning described by the payroll item.
 *
 * #### Default Earning Type
 * Certain earning types are special because they have tax considerations. Those earning types are mostly the same for every company depending on its legal structure (LLC, Corporation, etc.)
 *
 * #### Custom Earning Type
 * Custom earning types are all the other earning types added specifically for a company.
 *
 * scope: `payrolls:read`
 */
export declare function useEarningTypesListSuspense(request: operations.GetV1CompaniesCompanyIdEarningTypesRequest, options?: SuspenseQueryHookOptions<EarningTypesListQueryData>): UseSuspenseQueryResult<EarningTypesListQueryData, Error>;
export declare function prefetchEarningTypesList(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdEarningTypesRequest): Promise<void>;
export declare function setEarningTypesListData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EarningTypesListQueryData): EarningTypesListQueryData | undefined;
export declare function invalidateEarningTypesList(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEarningTypesList(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEarningTypesListQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdEarningTypesRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EarningTypesListQueryData>;
};
export declare function queryKeyEarningTypesList(companyId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=earningTypesList.d.ts.map