import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeePaymentMethodGetAllQueryData = Array<components.EmployeeBankAccount>;
/**
 * Get all employee bank accounts
 *
 * @remarks
 * Returns all employee bank accounts.
 *
 * scope: `employee_payment_methods:read`
 */
export declare function useEmployeePaymentMethodGetAll(request: operations.GetV1EmployeesEmployeeIdBankAccountsRequest, options?: QueryHookOptions<EmployeePaymentMethodGetAllQueryData>): UseQueryResult<EmployeePaymentMethodGetAllQueryData, Error>;
/**
 * Get all employee bank accounts
 *
 * @remarks
 * Returns all employee bank accounts.
 *
 * scope: `employee_payment_methods:read`
 */
export declare function useEmployeePaymentMethodGetAllSuspense(request: operations.GetV1EmployeesEmployeeIdBankAccountsRequest, options?: SuspenseQueryHookOptions<EmployeePaymentMethodGetAllQueryData>): UseSuspenseQueryResult<EmployeePaymentMethodGetAllQueryData, Error>;
export declare function prefetchEmployeePaymentMethodGetAll(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdBankAccountsRequest): Promise<void>;
export declare function setEmployeePaymentMethodGetAllData(client: QueryClient, queryKeyBase: [
    employeeId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeePaymentMethodGetAllQueryData): EmployeePaymentMethodGetAllQueryData | undefined;
export declare function invalidateEmployeePaymentMethodGetAll(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeePaymentMethodGetAll(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeePaymentMethodGetAllQuery(client$: GustoEmbeddedCore, request: operations.GetV1EmployeesEmployeeIdBankAccountsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeePaymentMethodGetAllQueryData>;
};
export declare function queryKeyEmployeePaymentMethodGetAll(employeeId: string, parameters: {
    page?: number | undefined;
    per?: number | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeePaymentMethodGetAll.d.ts.map