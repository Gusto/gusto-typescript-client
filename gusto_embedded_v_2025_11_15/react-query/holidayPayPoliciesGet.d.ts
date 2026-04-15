import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type HolidayPayPoliciesGetQueryData = operations.GetCompaniesCompanyUuidHolidayPayPolicyResponse;
/**
 * Get a company's holiday pay policy
 *
 * @remarks
 * Get a company's holiday pay policy
 *
 * scope: `holiday_pay_policies:read`
 */
export declare function useHolidayPayPoliciesGet(request: operations.GetCompaniesCompanyUuidHolidayPayPolicyRequest, options?: QueryHookOptions<HolidayPayPoliciesGetQueryData>): UseQueryResult<HolidayPayPoliciesGetQueryData, Error>;
/**
 * Get a company's holiday pay policy
 *
 * @remarks
 * Get a company's holiday pay policy
 *
 * scope: `holiday_pay_policies:read`
 */
export declare function useHolidayPayPoliciesGetSuspense(request: operations.GetCompaniesCompanyUuidHolidayPayPolicyRequest, options?: SuspenseQueryHookOptions<HolidayPayPoliciesGetQueryData>): UseSuspenseQueryResult<HolidayPayPoliciesGetQueryData, Error>;
export declare function prefetchHolidayPayPoliciesGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetCompaniesCompanyUuidHolidayPayPolicyRequest): Promise<void>;
export declare function setHolidayPayPoliciesGetData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: HolidayPayPoliciesGetQueryData): HolidayPayPoliciesGetQueryData | undefined;
export declare function invalidateHolidayPayPoliciesGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllHolidayPayPoliciesGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildHolidayPayPoliciesGetQuery(client$: GustoEmbeddedCore, request: operations.GetCompaniesCompanyUuidHolidayPayPolicyRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<HolidayPayPoliciesGetQueryData>;
};
export declare function queryKeyHolidayPayPoliciesGet(companyUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=holidayPayPoliciesGet.d.ts.map