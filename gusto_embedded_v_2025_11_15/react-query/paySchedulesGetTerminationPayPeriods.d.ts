import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type PaySchedulesGetTerminationPayPeriodsQueryData = Array<components.UnprocessedTerminationPayPeriod>;
/**
 * Get termination pay periods for a company
 *
 * @remarks
 * When a payroll admin terminates an employee and selects "Dismissal Payroll" as the employee's final payroll, their last pay period will appear on the list.
 *
 * This endpoint returns the unprocessed pay periods for past and future terminated employees in a given company.
 *
 * scope: `payrolls:read`
 */
export declare function usePaySchedulesGetTerminationPayPeriods(request: operations.GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest, options?: QueryHookOptions<PaySchedulesGetTerminationPayPeriodsQueryData>): UseQueryResult<PaySchedulesGetTerminationPayPeriodsQueryData, Error>;
/**
 * Get termination pay periods for a company
 *
 * @remarks
 * When a payroll admin terminates an employee and selects "Dismissal Payroll" as the employee's final payroll, their last pay period will appear on the list.
 *
 * This endpoint returns the unprocessed pay periods for past and future terminated employees in a given company.
 *
 * scope: `payrolls:read`
 */
export declare function usePaySchedulesGetTerminationPayPeriodsSuspense(request: operations.GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest, options?: SuspenseQueryHookOptions<PaySchedulesGetTerminationPayPeriodsQueryData>): UseSuspenseQueryResult<PaySchedulesGetTerminationPayPeriodsQueryData, Error>;
export declare function prefetchPaySchedulesGetTerminationPayPeriods(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest): Promise<void>;
export declare function setPaySchedulesGetTerminationPayPeriodsData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: PaySchedulesGetTerminationPayPeriodsQueryData): PaySchedulesGetTerminationPayPeriodsQueryData | undefined;
export declare function invalidatePaySchedulesGetTerminationPayPeriods(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllPaySchedulesGetTerminationPayPeriods(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildPaySchedulesGetTerminationPayPeriodsQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<PaySchedulesGetTerminationPayPeriodsQueryData>;
};
export declare function queryKeyPaySchedulesGetTerminationPayPeriods(companyId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=paySchedulesGetTerminationPayPeriods.d.ts.map