import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type BankAccountsGetCompanyAccountsQueryData = Array<components.CompanyBankAccount>;
/**
 * Get all company bank accounts
 *
 * @remarks
 * Returns company bank accounts. Currently, we only support a single default bank account per company.
 *
 * scope: `company_bank_accounts:read`
 */
export declare function useBankAccountsGetCompanyAccounts(request: operations.GetV1CompaniesCompanyIdBankAccountsRequest, options?: QueryHookOptions<BankAccountsGetCompanyAccountsQueryData>): UseQueryResult<BankAccountsGetCompanyAccountsQueryData, Error>;
/**
 * Get all company bank accounts
 *
 * @remarks
 * Returns company bank accounts. Currently, we only support a single default bank account per company.
 *
 * scope: `company_bank_accounts:read`
 */
export declare function useBankAccountsGetCompanyAccountsSuspense(request: operations.GetV1CompaniesCompanyIdBankAccountsRequest, options?: SuspenseQueryHookOptions<BankAccountsGetCompanyAccountsQueryData>): UseSuspenseQueryResult<BankAccountsGetCompanyAccountsQueryData, Error>;
export declare function prefetchBankAccountsGetCompanyAccounts(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdBankAccountsRequest): Promise<void>;
export declare function setBankAccountsGetCompanyAccountsData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: BankAccountsGetCompanyAccountsQueryData): BankAccountsGetCompanyAccountsQueryData | undefined;
export declare function invalidateBankAccountsGetCompanyAccounts(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllBankAccountsGetCompanyAccounts(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildBankAccountsGetCompanyAccountsQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdBankAccountsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<BankAccountsGetCompanyAccountsQueryData>;
};
export declare function queryKeyBankAccountsGetCompanyAccounts(companyId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=bankAccountsGetCompanyAccounts.d.ts.map