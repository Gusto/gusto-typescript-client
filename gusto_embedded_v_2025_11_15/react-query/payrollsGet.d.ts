import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type PayrollsGetQueryData = operations.GetV1CompaniesCompanyIdPayrollsPayrollIdResponse;
/**
 * Get a single payroll
 *
 * @remarks
 * Returns a payroll. If payroll is calculated or processed, will return employee_compensations and totals.
 *
 * Notes:
 * * Hour and dollar amounts are returned as string representations of numeric decimals.
 * * Hours are represented to the thousands place; dollar amounts are represented to the cent.
 * * Every eligible compensation is returned for each employee. If no data has yet be inserted for a given field, it defaults to “0.00” (for fixed amounts) or “0.000” (for hours ).
 * * To return future payrolls, you must include an `end_date` in the future.
 * * When include parameter with benefits value is passed, employee_benefits:read scope is required to return benefits
 *   * Benefits containing PHI are only visible with the `employee_benefits:read:phi` scope
 *
 * scope: `payrolls:read`
 */
export declare function usePayrollsGet(request: operations.GetV1CompaniesCompanyIdPayrollsPayrollIdRequest, options?: QueryHookOptions<PayrollsGetQueryData>): UseQueryResult<PayrollsGetQueryData, Error>;
/**
 * Get a single payroll
 *
 * @remarks
 * Returns a payroll. If payroll is calculated or processed, will return employee_compensations and totals.
 *
 * Notes:
 * * Hour and dollar amounts are returned as string representations of numeric decimals.
 * * Hours are represented to the thousands place; dollar amounts are represented to the cent.
 * * Every eligible compensation is returned for each employee. If no data has yet be inserted for a given field, it defaults to “0.00” (for fixed amounts) or “0.000” (for hours ).
 * * To return future payrolls, you must include an `end_date` in the future.
 * * When include parameter with benefits value is passed, employee_benefits:read scope is required to return benefits
 *   * Benefits containing PHI are only visible with the `employee_benefits:read:phi` scope
 *
 * scope: `payrolls:read`
 */
export declare function usePayrollsGetSuspense(request: operations.GetV1CompaniesCompanyIdPayrollsPayrollIdRequest, options?: SuspenseQueryHookOptions<PayrollsGetQueryData>): UseSuspenseQueryResult<PayrollsGetQueryData, Error>;
export declare function prefetchPayrollsGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdPayrollsPayrollIdRequest): Promise<void>;
export declare function setPayrollsGetData(client: QueryClient, queryKeyBase: [
    companyId: string,
    payrollId: string,
    parameters: {
        include?: Array<operations.GetV1CompaniesCompanyIdPayrollsPayrollIdQueryParamInclude> | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: PayrollsGetQueryData): PayrollsGetQueryData | undefined;
export declare function invalidatePayrollsGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    payrollId: string,
    parameters: {
        include?: Array<operations.GetV1CompaniesCompanyIdPayrollsPayrollIdQueryParamInclude> | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllPayrollsGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildPayrollsGetQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdPayrollsPayrollIdRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<PayrollsGetQueryData>;
};
export declare function queryKeyPayrollsGet(companyId: string, payrollId: string, parameters: {
    include?: Array<operations.GetV1CompaniesCompanyIdPayrollsPayrollIdQueryParamInclude> | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=payrollsGet.d.ts.map