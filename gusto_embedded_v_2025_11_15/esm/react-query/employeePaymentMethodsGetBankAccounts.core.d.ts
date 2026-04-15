import { QueryClient, QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { VersionHeader } from "../models/components/versionheader.js";
import { GetV1EmployeesEmployeeIdBankAccountsRequest, GetV1EmployeesEmployeeIdBankAccountsResponse } from "../models/operations/getv1employeesemployeeidbankaccounts.js";
export type EmployeePaymentMethodsGetBankAccountsQueryData = GetV1EmployeesEmployeeIdBankAccountsResponse;
export declare function prefetchEmployeePaymentMethodsGetBankAccounts(queryClient: QueryClient, client$: GustoEmbeddedCore, request: GetV1EmployeesEmployeeIdBankAccountsRequest, options?: RequestOptions): Promise<void>;
export declare function buildEmployeePaymentMethodsGetBankAccountsQuery(client$: GustoEmbeddedCore, request: GetV1EmployeesEmployeeIdBankAccountsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeePaymentMethodsGetBankAccountsQueryData>;
};
export declare function queryKeyEmployeePaymentMethodsGetBankAccounts(employeeId: string, parameters: {
    page?: number | undefined;
    per?: number | undefined;
    xGustoAPIVersion?: VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeePaymentMethodsGetBankAccounts.core.d.ts.map