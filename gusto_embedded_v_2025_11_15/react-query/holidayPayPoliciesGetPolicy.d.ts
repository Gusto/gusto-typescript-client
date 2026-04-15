import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type HolidayPayPoliciesGetPolicyQueryData = components.HolidayPayPolicy;
/**
 * Get a company's holiday pay policy
 *
 * @remarks
 * Get a company's holiday pay policy
 *
 * scope: `holiday_pay_policies:read`
 */
export declare function useHolidayPayPoliciesGetPolicy(request: operations.GetCompaniesCompanyUuidHolidayPayPolicyRequest, options?: QueryHookOptions<HolidayPayPoliciesGetPolicyQueryData>): UseQueryResult<HolidayPayPoliciesGetPolicyQueryData, Error>;
/**
 * Get a company's holiday pay policy
 *
 * @remarks
 * Get a company's holiday pay policy
 *
 * scope: `holiday_pay_policies:read`
 */
export declare function useHolidayPayPoliciesGetPolicySuspense(request: operations.GetCompaniesCompanyUuidHolidayPayPolicyRequest, options?: SuspenseQueryHookOptions<HolidayPayPoliciesGetPolicyQueryData>): UseSuspenseQueryResult<HolidayPayPoliciesGetPolicyQueryData, Error>;
export declare function prefetchHolidayPayPoliciesGetPolicy(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetCompaniesCompanyUuidHolidayPayPolicyRequest): Promise<void>;
export declare function setHolidayPayPoliciesGetPolicyData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: HolidayPayPoliciesGetPolicyQueryData): HolidayPayPoliciesGetPolicyQueryData | undefined;
export declare function invalidateHolidayPayPoliciesGetPolicy(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllHolidayPayPoliciesGetPolicy(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildHolidayPayPoliciesGetPolicyQuery(client$: GustoEmbeddedCore, request: operations.GetCompaniesCompanyUuidHolidayPayPolicyRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<HolidayPayPoliciesGetPolicyQueryData>;
};
export declare function queryKeyHolidayPayPoliciesGetPolicy(companyUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=holidayPayPoliciesGetPolicy.d.ts.map