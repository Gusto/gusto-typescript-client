import { InvalidateQueryFilters, QueryClient, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { VersionHeader } from "../models/components/versionheader.js";
import { GustoEmbeddedError } from "../models/errors/gustoembeddederror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { GetV1EmployeesEmployeeIdBankAccountsRequest } from "../models/operations/getv1employeesemployeeidbankaccounts.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
import { buildEmployeePaymentMethodsGetBankAccountsQuery, EmployeePaymentMethodsGetBankAccountsQueryData, prefetchEmployeePaymentMethodsGetBankAccounts, queryKeyEmployeePaymentMethodsGetBankAccounts } from "./employeePaymentMethodsGetBankAccounts.core.js";
export { buildEmployeePaymentMethodsGetBankAccountsQuery, type EmployeePaymentMethodsGetBankAccountsQueryData, prefetchEmployeePaymentMethodsGetBankAccounts, queryKeyEmployeePaymentMethodsGetBankAccounts, };
export type EmployeePaymentMethodsGetBankAccountsQueryError = GustoEmbeddedError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError;
/**
 * Get all employee bank accounts
 *
 * @remarks
 * Returns all employee bank accounts.
 *
 * scope: `employee_payment_methods:read`
 */
export declare function useEmployeePaymentMethodsGetBankAccounts(request: GetV1EmployeesEmployeeIdBankAccountsRequest, options?: QueryHookOptions<EmployeePaymentMethodsGetBankAccountsQueryData, EmployeePaymentMethodsGetBankAccountsQueryError>): UseQueryResult<EmployeePaymentMethodsGetBankAccountsQueryData, EmployeePaymentMethodsGetBankAccountsQueryError>;
/**
 * Get all employee bank accounts
 *
 * @remarks
 * Returns all employee bank accounts.
 *
 * scope: `employee_payment_methods:read`
 */
export declare function useEmployeePaymentMethodsGetBankAccountsSuspense(request: GetV1EmployeesEmployeeIdBankAccountsRequest, options?: SuspenseQueryHookOptions<EmployeePaymentMethodsGetBankAccountsQueryData, EmployeePaymentMethodsGetBankAccountsQueryError>): UseSuspenseQueryResult<EmployeePaymentMethodsGetBankAccountsQueryData, EmployeePaymentMethodsGetBankAccountsQueryError>;
export declare function setEmployeePaymentMethodsGetBankAccountsData(client: QueryClient, queryKeyBase: [
    employeeId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: VersionHeader | undefined;
    }
], data: EmployeePaymentMethodsGetBankAccountsQueryData): EmployeePaymentMethodsGetBankAccountsQueryData | undefined;
export declare function invalidateEmployeePaymentMethodsGetBankAccounts(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeId: string,
    parameters: {
        page?: number | undefined;
        per?: number | undefined;
        xGustoAPIVersion?: VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeePaymentMethodsGetBankAccounts(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
//# sourceMappingURL=employeePaymentMethodsGetBankAccounts.d.ts.map