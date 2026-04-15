import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EarningTypesGetQueryData = components.EarningTypeList;
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
export declare function useEarningTypesGet(request: operations.GetV1CompaniesCompanyIdEarningTypesRequest, options?: QueryHookOptions<EarningTypesGetQueryData>): UseQueryResult<EarningTypesGetQueryData, Error>;
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
export declare function useEarningTypesGetSuspense(request: operations.GetV1CompaniesCompanyIdEarningTypesRequest, options?: SuspenseQueryHookOptions<EarningTypesGetQueryData>): UseSuspenseQueryResult<EarningTypesGetQueryData, Error>;
export declare function prefetchEarningTypesGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdEarningTypesRequest): Promise<void>;
export declare function setEarningTypesGetData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EarningTypesGetQueryData): EarningTypesGetQueryData | undefined;
export declare function invalidateEarningTypesGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEarningTypesGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEarningTypesGetQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdEarningTypesRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EarningTypesGetQueryData>;
};
export declare function queryKeyEarningTypesGet(companyId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=earningTypesGet.d.ts.map