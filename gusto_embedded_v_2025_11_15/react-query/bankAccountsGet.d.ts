import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type BankAccountsGetQueryData = operations.GetV1CompaniesCompanyIdBankAccountsResponse;
/**
 * Get all company bank accounts
 *
 * @remarks
 * Returns company bank accounts. Currently, we only support a single default bank account per company.
 *
 * scope: `company_bank_accounts:read`
 */
export declare function useBankAccountsGet(request: operations.GetV1CompaniesCompanyIdBankAccountsRequest, options?: QueryHookOptions<BankAccountsGetQueryData>): UseQueryResult<BankAccountsGetQueryData, Error>;
/**
 * Get all company bank accounts
 *
 * @remarks
 * Returns company bank accounts. Currently, we only support a single default bank account per company.
 *
 * scope: `company_bank_accounts:read`
 */
export declare function useBankAccountsGetSuspense(request: operations.GetV1CompaniesCompanyIdBankAccountsRequest, options?: SuspenseQueryHookOptions<BankAccountsGetQueryData>): UseSuspenseQueryResult<BankAccountsGetQueryData, Error>;
export declare function prefetchBankAccountsGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdBankAccountsRequest): Promise<void>;
export declare function setBankAccountsGetData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: BankAccountsGetQueryData): BankAccountsGetQueryData | undefined;
export declare function invalidateBankAccountsGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllBankAccountsGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildBankAccountsGetQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdBankAccountsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<BankAccountsGetQueryData>;
};
export declare function queryKeyBankAccountsGet(companyId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=bankAccountsGet.d.ts.map