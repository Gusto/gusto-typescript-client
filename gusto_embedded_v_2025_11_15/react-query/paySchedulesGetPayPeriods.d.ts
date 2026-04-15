import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type PaySchedulesGetPayPeriodsQueryData = operations.GetV1CompaniesCompanyIdPayPeriodsResponse;
/**
 * Get pay periods for a company
 *
 * @remarks
 * Pay periods are the foundation of payroll. Compensation, time & attendance, taxes, and expense reports all rely on when they happened. To begin submitting information for a given payroll, we need to agree on the time period.
 *
 * By default, this endpoint returns pay periods starting from 6 months ago to the date today.  Use the `start_date` and `end_date` parameters to change the scope of the response.  End dates can be up to 3 months in the future and there is no limit on start dates.
 *
 * Starting in version '2023-04-01', the eligible_employees attribute was removed from the response.  The eligible employees for a payroll are determined by the employee_compensations returned from the payrolls#prepare endpoint.
 *
 * scope: `payrolls:read`
 */
export declare function usePaySchedulesGetPayPeriods(request: operations.GetV1CompaniesCompanyIdPayPeriodsRequest, options?: QueryHookOptions<PaySchedulesGetPayPeriodsQueryData>): UseQueryResult<PaySchedulesGetPayPeriodsQueryData, Error>;
/**
 * Get pay periods for a company
 *
 * @remarks
 * Pay periods are the foundation of payroll. Compensation, time & attendance, taxes, and expense reports all rely on when they happened. To begin submitting information for a given payroll, we need to agree on the time period.
 *
 * By default, this endpoint returns pay periods starting from 6 months ago to the date today.  Use the `start_date` and `end_date` parameters to change the scope of the response.  End dates can be up to 3 months in the future and there is no limit on start dates.
 *
 * Starting in version '2023-04-01', the eligible_employees attribute was removed from the response.  The eligible employees for a payroll are determined by the employee_compensations returned from the payrolls#prepare endpoint.
 *
 * scope: `payrolls:read`
 */
export declare function usePaySchedulesGetPayPeriodsSuspense(request: operations.GetV1CompaniesCompanyIdPayPeriodsRequest, options?: SuspenseQueryHookOptions<PaySchedulesGetPayPeriodsQueryData>): UseSuspenseQueryResult<PaySchedulesGetPayPeriodsQueryData, Error>;
export declare function prefetchPaySchedulesGetPayPeriods(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdPayPeriodsRequest): Promise<void>;
export declare function setPaySchedulesGetPayPeriodsData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        startDate?: string | undefined;
        endDate?: string | undefined;
        payrollTypes?: string | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: PaySchedulesGetPayPeriodsQueryData): PaySchedulesGetPayPeriodsQueryData | undefined;
export declare function invalidatePaySchedulesGetPayPeriods(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        startDate?: string | undefined;
        endDate?: string | undefined;
        payrollTypes?: string | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllPaySchedulesGetPayPeriods(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildPaySchedulesGetPayPeriodsQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdPayPeriodsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<PaySchedulesGetPayPeriodsQueryData>;
};
export declare function queryKeyPaySchedulesGetPayPeriods(companyId: string, parameters: {
    startDate?: string | undefined;
    endDate?: string | undefined;
    payrollTypes?: string | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=paySchedulesGetPayPeriods.d.ts.map