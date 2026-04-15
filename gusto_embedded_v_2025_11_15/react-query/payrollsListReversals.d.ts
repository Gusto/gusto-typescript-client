import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type PayrollsListReversalsQueryData = components.PayrollReversal;
/**
 * Get approved payroll reversals
 *
 * @remarks
 * Returns all approved Payroll Reversals for a Company.
 *
 * scope: `payrolls:read`
 */
export declare function usePayrollsListReversals(request: operations.GetV1CompaniesCompanyIdPayrollReversalsRequest, options?: QueryHookOptions<PayrollsListReversalsQueryData>): UseQueryResult<PayrollsListReversalsQueryData, Error>;
/**
 * Get approved payroll reversals
 *
 * @remarks
 * Returns all approved Payroll Reversals for a Company.
 *
 * scope: `payrolls:read`
 */
export declare function usePayrollsListReversalsSuspense(request: operations.GetV1CompaniesCompanyIdPayrollReversalsRequest, options?: SuspenseQueryHookOptions<PayrollsListReversalsQueryData>): UseSuspenseQueryResult<PayrollsListReversalsQueryData, Error>;
export declare function prefetchPayrollsListReversals(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdPayrollReversalsRequest): Promise<void>;
export declare function setPayrollsListReversalsData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: PayrollsListReversalsQueryData): PayrollsListReversalsQueryData | undefined;
export declare function invalidatePayrollsListReversals(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllPayrollsListReversals(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildPayrollsListReversalsQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdPayrollReversalsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<PayrollsListReversalsQueryData>;
};
export declare function queryKeyPayrollsListReversals(companyId: string, parameters: {
    page?: number | undefined;
    per?: number | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=payrollsListReversals.d.ts.map