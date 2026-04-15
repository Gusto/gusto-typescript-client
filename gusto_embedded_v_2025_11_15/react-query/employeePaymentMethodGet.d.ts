import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeePaymentMethodGetQueryData = operations.GetV1EmployeesEmployeeIdPaymentMethodResponse;
/**
 * Get an employee's payment method
 *
 * @remarks
 * Fetches an employee's payment method. An employee payment method
 * describes how the payment should be split across the employee's associated
 * bank accounts.
 *
 * scope: `employee_payment_methods:read`
 */
export declare function useEmployeePaymentMethodGet(request: operations.GetV1EmployeesEmployeeIdPaymentMethodRequest, options?: QueryHookOptions<EmployeePaymentMethodGetQueryData>): UseQueryResult<EmployeePaymentMethodGetQueryData, Error>;
/**
 * Get an employee's payment method
 *
 * @remarks
 * Fetches an employee's payment method. An employee payment method
 * describes how the payment should be split across the employee's associated
 * bank accounts.
 *
 * scope: `employee_payment_methods:read`
 */
export declare function useEmployeePaymentMethodGetSuspense(request: operations.GetV1EmployeesEmployeeIdPaymentMethodRequest, options?: SuspenseQueryHookOptions<EmployeePaymentMethodGetQueryData>): UseSuspenseQueryResult<EmployeePaymentMethodGetQueryData, Error>;
export declare function prefetchEmployeePaymentMethodGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdPaymentMethodRequest): Promise<void>;
export declare function setEmployeePaymentMethodGetData(client: QueryClient, queryKeyBase: [
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeePaymentMethodGetQueryData): EmployeePaymentMethodGetQueryData | undefined;
export declare function invalidateEmployeePaymentMethodGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeePaymentMethodGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeePaymentMethodGetQuery(client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdPaymentMethodRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeePaymentMethodGetQueryData>;
};
export declare function queryKeyEmployeePaymentMethodGet(employeeId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeePaymentMethodGet.d.ts.map