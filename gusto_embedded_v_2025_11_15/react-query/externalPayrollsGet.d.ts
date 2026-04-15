import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type ExternalPayrollsGetQueryData = operations.GetV1CompanyExternalPayrollsResponse;
/**
 * Get external payrolls for a company
 *
 * @remarks
 * Get an external payroll for a given company.
 *
 * scope: `external_payrolls:read`
 */
export declare function useExternalPayrollsGet(request: operations.GetV1CompanyExternalPayrollsRequest, options?: QueryHookOptions<ExternalPayrollsGetQueryData>): UseQueryResult<ExternalPayrollsGetQueryData, Error>;
/**
 * Get external payrolls for a company
 *
 * @remarks
 * Get an external payroll for a given company.
 *
 * scope: `external_payrolls:read`
 */
export declare function useExternalPayrollsGetSuspense(request: operations.GetV1CompanyExternalPayrollsRequest, options?: SuspenseQueryHookOptions<ExternalPayrollsGetQueryData>): UseSuspenseQueryResult<ExternalPayrollsGetQueryData, Error>;
export declare function prefetchExternalPayrollsGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompanyExternalPayrollsRequest): Promise<void>;
export declare function setExternalPayrollsGetData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: ExternalPayrollsGetQueryData): ExternalPayrollsGetQueryData | undefined;
export declare function invalidateExternalPayrollsGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllExternalPayrollsGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildExternalPayrollsGetQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompanyExternalPayrollsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ExternalPayrollsGetQueryData>;
};
export declare function queryKeyExternalPayrollsGet(companyUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=externalPayrollsGet.d.ts.map