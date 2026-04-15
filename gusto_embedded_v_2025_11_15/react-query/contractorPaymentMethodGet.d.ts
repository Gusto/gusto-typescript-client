import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type ContractorPaymentMethodGetQueryData = operations.GetV1ContractorsContractorUuidPaymentMethodResponse;
/**
 * Get a contractor's payment method
 *
 * @remarks
 * Fetches a contractor's payment method. A contractor payment method
 * describes how the payment should be split across the contractor's associated
 * bank accounts.
 *
 * scope: `contractor_payment_methods:read`
 */
export declare function useContractorPaymentMethodGet(request: operations.GetV1ContractorsContractorUuidPaymentMethodRequest, options?: QueryHookOptions<ContractorPaymentMethodGetQueryData>): UseQueryResult<ContractorPaymentMethodGetQueryData, Error>;
/**
 * Get a contractor's payment method
 *
 * @remarks
 * Fetches a contractor's payment method. A contractor payment method
 * describes how the payment should be split across the contractor's associated
 * bank accounts.
 *
 * scope: `contractor_payment_methods:read`
 */
export declare function useContractorPaymentMethodGetSuspense(request: operations.GetV1ContractorsContractorUuidPaymentMethodRequest, options?: SuspenseQueryHookOptions<ContractorPaymentMethodGetQueryData>): UseSuspenseQueryResult<ContractorPaymentMethodGetQueryData, Error>;
export declare function prefetchContractorPaymentMethodGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1ContractorsContractorUuidPaymentMethodRequest): Promise<void>;
export declare function setContractorPaymentMethodGetData(client: QueryClient, queryKeyBase: [
    contractorUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: ContractorPaymentMethodGetQueryData): ContractorPaymentMethodGetQueryData | undefined;
export declare function invalidateContractorPaymentMethodGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    contractorUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllContractorPaymentMethodGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildContractorPaymentMethodGetQuery(client$: GustoEmbeddedCore, request: operations.GetV1ContractorsContractorUuidPaymentMethodRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ContractorPaymentMethodGetQueryData>;
};
export declare function queryKeyContractorPaymentMethodGet(contractorUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=contractorPaymentMethodGet.d.ts.map