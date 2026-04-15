import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type PayrollsGetBlockersQueryData = operations.GetV1CompaniesPayrollBlockersCompanyUuidResponse;
/**
 * Get all payroll blockers for a company
 *
 * @remarks
 * Returns a list of reasons that prevent the company from running payrolls. See the [payroll blockers guide](https://docs.gusto.com/embedded-payroll/docs/payroll-blockers) for a complete list of reasons.
 *
 * The list is empty if there are no payroll blockers.
 *
 * scope: `payrolls:run`
 */
export declare function usePayrollsGetBlockers(request: operations.GetV1CompaniesPayrollBlockersCompanyUuidRequest, options?: QueryHookOptions<PayrollsGetBlockersQueryData>): UseQueryResult<PayrollsGetBlockersQueryData, Error>;
/**
 * Get all payroll blockers for a company
 *
 * @remarks
 * Returns a list of reasons that prevent the company from running payrolls. See the [payroll blockers guide](https://docs.gusto.com/embedded-payroll/docs/payroll-blockers) for a complete list of reasons.
 *
 * The list is empty if there are no payroll blockers.
 *
 * scope: `payrolls:run`
 */
export declare function usePayrollsGetBlockersSuspense(request: operations.GetV1CompaniesPayrollBlockersCompanyUuidRequest, options?: SuspenseQueryHookOptions<PayrollsGetBlockersQueryData>): UseSuspenseQueryResult<PayrollsGetBlockersQueryData, Error>;
export declare function prefetchPayrollsGetBlockers(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesPayrollBlockersCompanyUuidRequest): Promise<void>;
export declare function setPayrollsGetBlockersData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: PayrollsGetBlockersQueryData): PayrollsGetBlockersQueryData | undefined;
export declare function invalidatePayrollsGetBlockers(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllPayrollsGetBlockers(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildPayrollsGetBlockersQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesPayrollBlockersCompanyUuidRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<PayrollsGetBlockersQueryData>;
};
export declare function queryKeyPayrollsGetBlockers(companyUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=payrollsGetBlockers.d.ts.map