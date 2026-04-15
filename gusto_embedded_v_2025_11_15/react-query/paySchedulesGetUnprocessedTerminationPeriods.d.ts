import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type PaySchedulesGetUnprocessedTerminationPeriodsQueryData = operations.GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsResponse;
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
export declare function usePaySchedulesGetUnprocessedTerminationPeriods(request: operations.GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest, options?: QueryHookOptions<PaySchedulesGetUnprocessedTerminationPeriodsQueryData>): UseQueryResult<PaySchedulesGetUnprocessedTerminationPeriodsQueryData, Error>;
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
export declare function usePaySchedulesGetUnprocessedTerminationPeriodsSuspense(request: operations.GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest, options?: SuspenseQueryHookOptions<PaySchedulesGetUnprocessedTerminationPeriodsQueryData>): UseSuspenseQueryResult<PaySchedulesGetUnprocessedTerminationPeriodsQueryData, Error>;
export declare function prefetchPaySchedulesGetUnprocessedTerminationPeriods(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest): Promise<void>;
export declare function setPaySchedulesGetUnprocessedTerminationPeriodsData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: PaySchedulesGetUnprocessedTerminationPeriodsQueryData): PaySchedulesGetUnprocessedTerminationPeriodsQueryData | undefined;
export declare function invalidatePaySchedulesGetUnprocessedTerminationPeriods(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllPaySchedulesGetUnprocessedTerminationPeriods(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildPaySchedulesGetUnprocessedTerminationPeriodsQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<PaySchedulesGetUnprocessedTerminationPeriodsQueryData>;
};
export declare function queryKeyPaySchedulesGetUnprocessedTerminationPeriods(companyId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=paySchedulesGetUnprocessedTerminationPeriods.d.ts.map