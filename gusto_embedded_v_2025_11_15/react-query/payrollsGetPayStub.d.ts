import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type PayrollsGetPayStubQueryData = operations.GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubResponse;
/**
 * Get an employee pay stub (pdf)
 *
 * @remarks
 * Get an employee's pay stub for the specified payroll. By default, an application/pdf response will be returned. No other content types are currently supported, but may be supported in the future.
 *
 * scope: `pay_stubs:read`
 */
export declare function usePayrollsGetPayStub(request: operations.GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequest, options?: QueryHookOptions<PayrollsGetPayStubQueryData>): UseQueryResult<PayrollsGetPayStubQueryData, Error>;
/**
 * Get an employee pay stub (pdf)
 *
 * @remarks
 * Get an employee's pay stub for the specified payroll. By default, an application/pdf response will be returned. No other content types are currently supported, but may be supported in the future.
 *
 * scope: `pay_stubs:read`
 */
export declare function usePayrollsGetPayStubSuspense(request: operations.GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequest, options?: SuspenseQueryHookOptions<PayrollsGetPayStubQueryData>): UseSuspenseQueryResult<PayrollsGetPayStubQueryData, Error>;
export declare function prefetchPayrollsGetPayStub(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequest): Promise<void>;
export declare function setPayrollsGetPayStubData(client: QueryClient, queryKeyBase: [
    payrollId: string,
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: PayrollsGetPayStubQueryData): PayrollsGetPayStubQueryData | undefined;
export declare function invalidatePayrollsGetPayStub(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    payrollId: string,
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllPayrollsGetPayStub(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildPayrollsGetPayStubQuery(client$: GustoEmbeddedCore, request: operations.GetV1PayrollsPayrollUuidEmployeesEmployeeUuidPayStubRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<PayrollsGetPayStubQueryData>;
};
export declare function queryKeyPayrollsGetPayStub(payrollId: string, employeeId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=payrollsGetPayStub.d.ts.map