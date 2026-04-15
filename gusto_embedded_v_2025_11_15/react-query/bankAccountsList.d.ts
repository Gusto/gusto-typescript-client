import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type BankAccountsListQueryData = Array<components.CompanyBankAccount>;
/**
 * Get all company bank accounts
 *
 * @remarks
 * Returns company bank accounts. Currently, we only support a single default bank account per company.
 *
 * scope: `company_bank_accounts:read`
 */
export declare function useBankAccountsList(request: operations.GetV1CompaniesCompanyIdBankAccountsRequest, options?: QueryHookOptions<BankAccountsListQueryData>): UseQueryResult<BankAccountsListQueryData, Error>;
/**
 * Get all company bank accounts
 *
 * @remarks
 * Returns company bank accounts. Currently, we only support a single default bank account per company.
 *
 * scope: `company_bank_accounts:read`
 */
export declare function useBankAccountsListSuspense(request: operations.GetV1CompaniesCompanyIdBankAccountsRequest, options?: SuspenseQueryHookOptions<BankAccountsListQueryData>): UseSuspenseQueryResult<BankAccountsListQueryData, Error>;
export declare function prefetchBankAccountsList(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdBankAccountsRequest): Promise<void>;
export declare function setBankAccountsListData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: BankAccountsListQueryData): BankAccountsListQueryData | undefined;
export declare function invalidateBankAccountsList(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllBankAccountsList(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildBankAccountsListQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdBankAccountsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<BankAccountsListQueryData>;
};
export declare function queryKeyBankAccountsList(companyId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=bankAccountsList.d.ts.map