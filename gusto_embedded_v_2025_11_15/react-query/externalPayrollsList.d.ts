import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type ExternalPayrollsListQueryData = Array<components.ExternalPayrollBasic>;
/**
 * Get external payrolls for a company
 *
 * @remarks
 * Get an external payroll for a given company.
 *
 * scope: `external_payrolls:read`
 */
export declare function useExternalPayrollsList(request: operations.GetV1CompanyExternalPayrollsRequest, options?: QueryHookOptions<ExternalPayrollsListQueryData>): UseQueryResult<ExternalPayrollsListQueryData, Error>;
/**
 * Get external payrolls for a company
 *
 * @remarks
 * Get an external payroll for a given company.
 *
 * scope: `external_payrolls:read`
 */
export declare function useExternalPayrollsListSuspense(request: operations.GetV1CompanyExternalPayrollsRequest, options?: SuspenseQueryHookOptions<ExternalPayrollsListQueryData>): UseSuspenseQueryResult<ExternalPayrollsListQueryData, Error>;
export declare function prefetchExternalPayrollsList(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompanyExternalPayrollsRequest): Promise<void>;
export declare function setExternalPayrollsListData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: ExternalPayrollsListQueryData): ExternalPayrollsListQueryData | undefined;
export declare function invalidateExternalPayrollsList(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllExternalPayrollsList(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildExternalPayrollsListQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompanyExternalPayrollsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ExternalPayrollsListQueryData>;
};
export declare function queryKeyExternalPayrollsList(companyUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=externalPayrollsList.d.ts.map