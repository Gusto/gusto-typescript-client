import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EarningTypesGetAllQueryData = components.EarningTypeList;
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
export declare function useEarningTypesGetAll(request: operations.GetV1CompaniesCompanyIdEarningTypesRequest, options?: QueryHookOptions<EarningTypesGetAllQueryData>): UseQueryResult<EarningTypesGetAllQueryData, Error>;
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
export declare function useEarningTypesGetAllSuspense(request: operations.GetV1CompaniesCompanyIdEarningTypesRequest, options?: SuspenseQueryHookOptions<EarningTypesGetAllQueryData>): UseSuspenseQueryResult<EarningTypesGetAllQueryData, Error>;
export declare function prefetchEarningTypesGetAll(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdEarningTypesRequest): Promise<void>;
export declare function setEarningTypesGetAllData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EarningTypesGetAllQueryData): EarningTypesGetAllQueryData | undefined;
export declare function invalidateEarningTypesGetAll(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEarningTypesGetAll(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEarningTypesGetAllQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdEarningTypesRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EarningTypesGetAllQueryData>;
};
export declare function queryKeyEarningTypesGetAll(companyId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=earningTypesGetAll.d.ts.map