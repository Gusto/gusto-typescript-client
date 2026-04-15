import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type ExternalPayrollsRetrieveQueryData = operations.GetV1ExternalPayrollResponse;
/**
 * Get an external payroll
 *
 * @remarks
 * Get an external payroll for a given company.
 *
 * scope: `external_payrolls:read`
 */
export declare function useExternalPayrollsRetrieve(request: operations.GetV1ExternalPayrollRequest, options?: QueryHookOptions<ExternalPayrollsRetrieveQueryData>): UseQueryResult<ExternalPayrollsRetrieveQueryData, Error>;
/**
 * Get an external payroll
 *
 * @remarks
 * Get an external payroll for a given company.
 *
 * scope: `external_payrolls:read`
 */
export declare function useExternalPayrollsRetrieveSuspense(request: operations.GetV1ExternalPayrollRequest, options?: SuspenseQueryHookOptions<ExternalPayrollsRetrieveQueryData>): UseSuspenseQueryResult<ExternalPayrollsRetrieveQueryData, Error>;
export declare function prefetchExternalPayrollsRetrieve(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1ExternalPayrollRequest): Promise<void>;
export declare function setExternalPayrollsRetrieveData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    externalPayrollId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: ExternalPayrollsRetrieveQueryData): ExternalPayrollsRetrieveQueryData | undefined;
export declare function invalidateExternalPayrollsRetrieve(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyUuid: string,
    externalPayrollId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllExternalPayrollsRetrieve(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildExternalPayrollsRetrieveQuery(client$: GustoEmbeddedCore, request: operations.GetV1ExternalPayrollRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ExternalPayrollsRetrieveQueryData>;
};
export declare function queryKeyExternalPayrollsRetrieve(companyUuid: string, externalPayrollId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=externalPayrollsRetrieve.d.ts.map