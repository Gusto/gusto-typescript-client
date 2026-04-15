import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type ExternalPayrollsCalculateTaxesQueryData = operations.GetV1ExternalPayrollCalculateTaxesResponse;
/**
 * Get tax suggestions for an external payroll
 *
 * @remarks
 * Get tax suggestions for an external payroll. Earnings and/or benefits
 * data must be saved prior to the calculation in order to retrieve accurate
 * tax calculation.
 *
 * scope: `external_payrolls:read`
 */
export declare function useExternalPayrollsCalculateTaxes(request: operations.GetV1ExternalPayrollCalculateTaxesRequest, options?: QueryHookOptions<ExternalPayrollsCalculateTaxesQueryData>): UseQueryResult<ExternalPayrollsCalculateTaxesQueryData, Error>;
/**
 * Get tax suggestions for an external payroll
 *
 * @remarks
 * Get tax suggestions for an external payroll. Earnings and/or benefits
 * data must be saved prior to the calculation in order to retrieve accurate
 * tax calculation.
 *
 * scope: `external_payrolls:read`
 */
export declare function useExternalPayrollsCalculateTaxesSuspense(request: operations.GetV1ExternalPayrollCalculateTaxesRequest, options?: SuspenseQueryHookOptions<ExternalPayrollsCalculateTaxesQueryData>): UseSuspenseQueryResult<ExternalPayrollsCalculateTaxesQueryData, Error>;
export declare function prefetchExternalPayrollsCalculateTaxes(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1ExternalPayrollCalculateTaxesRequest): Promise<void>;
export declare function setExternalPayrollsCalculateTaxesData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    externalPayrollId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: ExternalPayrollsCalculateTaxesQueryData): ExternalPayrollsCalculateTaxesQueryData | undefined;
export declare function invalidateExternalPayrollsCalculateTaxes(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyUuid: string,
    externalPayrollId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllExternalPayrollsCalculateTaxes(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildExternalPayrollsCalculateTaxesQuery(client$: GustoEmbeddedCore, request: operations.GetV1ExternalPayrollCalculateTaxesRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ExternalPayrollsCalculateTaxesQueryData>;
};
export declare function queryKeyExternalPayrollsCalculateTaxes(companyUuid: string, externalPayrollId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=externalPayrollsCalculateTaxes.d.ts.map