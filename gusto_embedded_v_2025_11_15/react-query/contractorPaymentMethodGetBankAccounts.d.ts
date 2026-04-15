import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type ContractorPaymentMethodGetBankAccountsQueryData = operations.GetV1ContractorsContractorUuidBankAccountsResponse;
/**
 * Get all contractor bank accounts
 *
 * @remarks
 * Returns all contractor bank accounts.
 *
 * scope: `contractor_payment_methods:read`
 */
export declare function useContractorPaymentMethodGetBankAccounts(request: operations.GetV1ContractorsContractorUuidBankAccountsRequest, options?: QueryHookOptions<ContractorPaymentMethodGetBankAccountsQueryData>): UseQueryResult<ContractorPaymentMethodGetBankAccountsQueryData, Error>;
/**
 * Get all contractor bank accounts
 *
 * @remarks
 * Returns all contractor bank accounts.
 *
 * scope: `contractor_payment_methods:read`
 */
export declare function useContractorPaymentMethodGetBankAccountsSuspense(request: operations.GetV1ContractorsContractorUuidBankAccountsRequest, options?: SuspenseQueryHookOptions<ContractorPaymentMethodGetBankAccountsQueryData>): UseSuspenseQueryResult<ContractorPaymentMethodGetBankAccountsQueryData, Error>;
export declare function prefetchContractorPaymentMethodGetBankAccounts(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1ContractorsContractorUuidBankAccountsRequest): Promise<void>;
export declare function setContractorPaymentMethodGetBankAccountsData(client: QueryClient, queryKeyBase: [
    contractorUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: ContractorPaymentMethodGetBankAccountsQueryData): ContractorPaymentMethodGetBankAccountsQueryData | undefined;
export declare function invalidateContractorPaymentMethodGetBankAccounts(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    contractorUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllContractorPaymentMethodGetBankAccounts(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildContractorPaymentMethodGetBankAccountsQuery(client$: GustoEmbeddedCore, request: operations.GetV1ContractorsContractorUuidBankAccountsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ContractorPaymentMethodGetBankAccountsQueryData>;
};
export declare function queryKeyContractorPaymentMethodGetBankAccounts(contractorUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=contractorPaymentMethodGetBankAccounts.d.ts.map