import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeePaymentMethodsGetBankAccountsQueryData = operations.GetV1EmployeesEmployeeIdBankAccountsResponse;
/**
 * Get all employee bank accounts
 *
 * @remarks
 * Returns all employee bank accounts.
 *
 * scope: `employee_payment_methods:read`
 */
export declare function useEmployeePaymentMethodsGetBankAccounts(request: operations.GetV1EmployeesEmployeeIdBankAccountsRequest, options?: QueryHookOptions<EmployeePaymentMethodsGetBankAccountsQueryData>): UseQueryResult<EmployeePaymentMethodsGetBankAccountsQueryData, Error>;
/**
 * Get all employee bank accounts
 *
 * @remarks
 * Returns all employee bank accounts.
 *
 * scope: `employee_payment_methods:read`
 */
export declare function useEmployeePaymentMethodsGetBankAccountsSuspense(request: operations.GetV1EmployeesEmployeeIdBankAccountsRequest, options?: SuspenseQueryHookOptions<EmployeePaymentMethodsGetBankAccountsQueryData>): UseSuspenseQueryResult<EmployeePaymentMethodsGetBankAccountsQueryData, Error>;
export declare function prefetchEmployeePaymentMethodsGetBankAccounts(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdBankAccountsRequest): Promise<void>;
export declare function setEmployeePaymentMethodsGetBankAccountsData(client: QueryClient, queryKeyBase: [
    employeeId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeePaymentMethodsGetBankAccountsQueryData): EmployeePaymentMethodsGetBankAccountsQueryData | undefined;
export declare function invalidateEmployeePaymentMethodsGetBankAccounts(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeePaymentMethodsGetBankAccounts(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeePaymentMethodsGetBankAccountsQuery(client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdBankAccountsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeePaymentMethodsGetBankAccountsQueryData>;
};
export declare function queryKeyEmployeePaymentMethodsGetBankAccounts(employeeId: string, parameters: {
    page?: number | undefined;
    per?: number | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeePaymentMethodsGetBankAccounts.d.ts.map