import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type PayrollsGetPayStubsQueryData = operations.GetV1EmployeesEmployeeUuidPayStubsResponse;
/**
 * Get an employee's pay stubs
 *
 * @remarks
 * Get an employee's pay stubs
 *
 * scope: `pay_stubs:read`
 */
export declare function usePayrollsGetPayStubs(request: operations.GetV1EmployeesEmployeeUuidPayStubsRequest, options?: QueryHookOptions<PayrollsGetPayStubsQueryData>): UseQueryResult<PayrollsGetPayStubsQueryData, Error>;
/**
 * Get an employee's pay stubs
 *
 * @remarks
 * Get an employee's pay stubs
 *
 * scope: `pay_stubs:read`
 */
export declare function usePayrollsGetPayStubsSuspense(request: operations.GetV1EmployeesEmployeeUuidPayStubsRequest, options?: SuspenseQueryHookOptions<PayrollsGetPayStubsQueryData>): UseSuspenseQueryResult<PayrollsGetPayStubsQueryData, Error>;
export declare function prefetchPayrollsGetPayStubs(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeUuidPayStubsRequest): Promise<void>;
export declare function setPayrollsGetPayStubsData(client: QueryClient, queryKeyBase: [
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: PayrollsGetPayStubsQueryData): PayrollsGetPayStubsQueryData | undefined;
export declare function invalidatePayrollsGetPayStubs(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllPayrollsGetPayStubs(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildPayrollsGetPayStubsQuery(client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeUuidPayStubsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<PayrollsGetPayStubsQueryData>;
};
export declare function queryKeyPayrollsGetPayStubs(employeeId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=payrollsGetPayStubs.d.ts.map