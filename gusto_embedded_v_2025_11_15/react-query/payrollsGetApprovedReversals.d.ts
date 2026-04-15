import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type PayrollsGetApprovedReversalsQueryData = operations.GetV1CompaniesCompanyIdPayrollReversalsResponse;
/**
 * Get approved payroll reversals
 *
 * @remarks
 * Returns all approved Payroll Reversals for a Company.
 *
 * scope: `payrolls:read`
 */
export declare function usePayrollsGetApprovedReversals(request: operations.GetV1CompaniesCompanyIdPayrollReversalsRequest, options?: QueryHookOptions<PayrollsGetApprovedReversalsQueryData>): UseQueryResult<PayrollsGetApprovedReversalsQueryData, Error>;
/**
 * Get approved payroll reversals
 *
 * @remarks
 * Returns all approved Payroll Reversals for a Company.
 *
 * scope: `payrolls:read`
 */
export declare function usePayrollsGetApprovedReversalsSuspense(request: operations.GetV1CompaniesCompanyIdPayrollReversalsRequest, options?: SuspenseQueryHookOptions<PayrollsGetApprovedReversalsQueryData>): UseSuspenseQueryResult<PayrollsGetApprovedReversalsQueryData, Error>;
export declare function prefetchPayrollsGetApprovedReversals(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdPayrollReversalsRequest): Promise<void>;
export declare function setPayrollsGetApprovedReversalsData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: PayrollsGetApprovedReversalsQueryData): PayrollsGetApprovedReversalsQueryData | undefined;
export declare function invalidatePayrollsGetApprovedReversals(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllPayrollsGetApprovedReversals(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildPayrollsGetApprovedReversalsQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdPayrollReversalsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<PayrollsGetApprovedReversalsQueryData>;
};
export declare function queryKeyPayrollsGetApprovedReversals(companyId: string, parameters: {
    page?: number | undefined;
    per?: number | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=payrollsGetApprovedReversals.d.ts.map