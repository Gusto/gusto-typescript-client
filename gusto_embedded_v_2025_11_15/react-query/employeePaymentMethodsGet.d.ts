import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeePaymentMethodsGetQueryData = components.EmployeePaymentMethod;
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
export declare function useEmployeePaymentMethodsGet(request: operations.GetV1EmployeesEmployeeIdPaymentMethodRequest, options?: QueryHookOptions<EmployeePaymentMethodsGetQueryData>): UseQueryResult<EmployeePaymentMethodsGetQueryData, Error>;
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
export declare function useEmployeePaymentMethodsGetSuspense(request: operations.GetV1EmployeesEmployeeIdPaymentMethodRequest, options?: SuspenseQueryHookOptions<EmployeePaymentMethodsGetQueryData>): UseSuspenseQueryResult<EmployeePaymentMethodsGetQueryData, Error>;
export declare function prefetchEmployeePaymentMethodsGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdPaymentMethodRequest): Promise<void>;
export declare function setEmployeePaymentMethodsGetData(client: QueryClient, queryKeyBase: [
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeePaymentMethodsGetQueryData): EmployeePaymentMethodsGetQueryData | undefined;
export declare function invalidateEmployeePaymentMethodsGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeePaymentMethodsGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeePaymentMethodsGetQuery(client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdPaymentMethodRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeePaymentMethodsGetQueryData>;
};
export declare function queryKeyEmployeePaymentMethodsGet(employeeId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeePaymentMethodsGet.d.ts.map