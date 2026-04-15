import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type PayrollsGetReversalsQueryData = components.PayrollReversal;
/**
 * Get approved payroll reversals
 *
 * @remarks
 * Returns all approved Payroll Reversals for a Company.
 *
 * scope: `payrolls:read`
 */
export declare function usePayrollsGetReversals(request: operations.GetV1CompaniesCompanyIdPayrollReversalsRequest, options?: QueryHookOptions<PayrollsGetReversalsQueryData>): UseQueryResult<PayrollsGetReversalsQueryData, Error>;
/**
 * Get approved payroll reversals
 *
 * @remarks
 * Returns all approved Payroll Reversals for a Company.
 *
 * scope: `payrolls:read`
 */
export declare function usePayrollsGetReversalsSuspense(request: operations.GetV1CompaniesCompanyIdPayrollReversalsRequest, options?: SuspenseQueryHookOptions<PayrollsGetReversalsQueryData>): UseSuspenseQueryResult<PayrollsGetReversalsQueryData, Error>;
export declare function prefetchPayrollsGetReversals(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdPayrollReversalsRequest): Promise<void>;
export declare function setPayrollsGetReversalsData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: PayrollsGetReversalsQueryData): PayrollsGetReversalsQueryData | undefined;
export declare function invalidatePayrollsGetReversals(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllPayrollsGetReversals(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildPayrollsGetReversalsQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdPayrollReversalsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<PayrollsGetReversalsQueryData>;
};
export declare function queryKeyPayrollsGetReversals(companyId: string, parameters: {
    page?: number | undefined;
    per?: number | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=payrollsGetReversals.d.ts.map