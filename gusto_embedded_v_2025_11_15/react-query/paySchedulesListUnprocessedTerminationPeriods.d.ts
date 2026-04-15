import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type PaySchedulesListUnprocessedTerminationPeriodsQueryData = Array<components.UnprocessedTerminationPayPeriod>;
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
export declare function usePaySchedulesListUnprocessedTerminationPeriods(request: operations.GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest, options?: QueryHookOptions<PaySchedulesListUnprocessedTerminationPeriodsQueryData>): UseQueryResult<PaySchedulesListUnprocessedTerminationPeriodsQueryData, Error>;
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
export declare function usePaySchedulesListUnprocessedTerminationPeriodsSuspense(request: operations.GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest, options?: SuspenseQueryHookOptions<PaySchedulesListUnprocessedTerminationPeriodsQueryData>): UseSuspenseQueryResult<PaySchedulesListUnprocessedTerminationPeriodsQueryData, Error>;
export declare function prefetchPaySchedulesListUnprocessedTerminationPeriods(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest): Promise<void>;
export declare function setPaySchedulesListUnprocessedTerminationPeriodsData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: PaySchedulesListUnprocessedTerminationPeriodsQueryData): PaySchedulesListUnprocessedTerminationPeriodsQueryData | undefined;
export declare function invalidatePaySchedulesListUnprocessedTerminationPeriods(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllPaySchedulesListUnprocessedTerminationPeriods(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildPaySchedulesListUnprocessedTerminationPeriodsQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdUnprocessedTerminationPayPeriodsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<PaySchedulesListUnprocessedTerminationPeriodsQueryData>;
};
export declare function queryKeyPaySchedulesListUnprocessedTerminationPeriods(companyId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=paySchedulesListUnprocessedTerminationPeriods.d.ts.map