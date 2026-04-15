import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type PayrollsGetAllQueryData = Array<components.PayrollMinimal>;
/**
 * Get all payrolls for a company
 *
 * @remarks
 * Returns a list of payrolls for a company. You can change the payrolls returned by updating the processing_status, payroll_types, start_date, & end_date params.
 *
 * By default, will return processed, regular payrolls for the past 6 months.
 *
 * Notes:
 * * Dollar amounts are returned as string representations of numeric decimals, are represented to the cent.
 * * end_date can be at most 3 months in the future and start_date and end_date can't be more than 1 year apart.
 *
 * scope: `payrolls:read`
 */
export declare function usePayrollsGetAll(request: operations.GetV1CompaniesCompanyIdPayrollsRequest, options?: QueryHookOptions<PayrollsGetAllQueryData>): UseQueryResult<PayrollsGetAllQueryData, Error>;
/**
 * Get all payrolls for a company
 *
 * @remarks
 * Returns a list of payrolls for a company. You can change the payrolls returned by updating the processing_status, payroll_types, start_date, & end_date params.
 *
 * By default, will return processed, regular payrolls for the past 6 months.
 *
 * Notes:
 * * Dollar amounts are returned as string representations of numeric decimals, are represented to the cent.
 * * end_date can be at most 3 months in the future and start_date and end_date can't be more than 1 year apart.
 *
 * scope: `payrolls:read`
 */
export declare function usePayrollsGetAllSuspense(request: operations.GetV1CompaniesCompanyIdPayrollsRequest, options?: SuspenseQueryHookOptions<PayrollsGetAllQueryData>): UseSuspenseQueryResult<PayrollsGetAllQueryData, Error>;
export declare function prefetchPayrollsGetAll(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdPayrollsRequest): Promise<void>;
export declare function setPayrollsGetAllData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        processingStatuses?: Array<operations.ProcessingStatuses> | undefined;
        payrollTypes?: Array<operations.PayrollTypes> | undefined;
        include?: Array<operations.GetV1CompaniesCompanyIdPayrollsQueryParamInclude> | undefined;
        startDate?: string | undefined;
        endDate?: string | undefined;
        sortOrder?: components.SortOrder | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: PayrollsGetAllQueryData): PayrollsGetAllQueryData | undefined;
export declare function invalidatePayrollsGetAll(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        processingStatuses?: Array<operations.ProcessingStatuses> | undefined;
        payrollTypes?: Array<operations.PayrollTypes> | undefined;
        include?: Array<operations.GetV1CompaniesCompanyIdPayrollsQueryParamInclude> | undefined;
        startDate?: string | undefined;
        endDate?: string | undefined;
        sortOrder?: components.SortOrder | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllPayrollsGetAll(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildPayrollsGetAllQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdPayrollsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<PayrollsGetAllQueryData>;
};
export declare function queryKeyPayrollsGetAll(companyId: string, parameters: {
    processingStatuses?: Array<operations.ProcessingStatuses> | undefined;
    payrollTypes?: Array<operations.PayrollTypes> | undefined;
    include?: Array<operations.GetV1CompaniesCompanyIdPayrollsQueryParamInclude> | undefined;
    startDate?: string | undefined;
    endDate?: string | undefined;
    sortOrder?: components.SortOrder | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=payrollsGetAll.d.ts.map