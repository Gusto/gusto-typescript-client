import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type ContractorsGetPaymentMethodQueryData = components.ContractorPaymentMethod;
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
export declare function useContractorsGetPaymentMethod(request: operations.GetV1ContractorsContractorUuidPaymentMethodRequest, options?: QueryHookOptions<ContractorsGetPaymentMethodQueryData>): UseQueryResult<ContractorsGetPaymentMethodQueryData, Error>;
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
export declare function useContractorsGetPaymentMethodSuspense(request: operations.GetV1ContractorsContractorUuidPaymentMethodRequest, options?: SuspenseQueryHookOptions<ContractorsGetPaymentMethodQueryData>): UseSuspenseQueryResult<ContractorsGetPaymentMethodQueryData, Error>;
export declare function prefetchContractorsGetPaymentMethod(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1ContractorsContractorUuidPaymentMethodRequest): Promise<void>;
export declare function setContractorsGetPaymentMethodData(client: QueryClient, queryKeyBase: [
    contractorUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: ContractorsGetPaymentMethodQueryData): ContractorsGetPaymentMethodQueryData | undefined;
export declare function invalidateContractorsGetPaymentMethod(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    contractorUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllContractorsGetPaymentMethod(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildContractorsGetPaymentMethodQuery(client$: GustoEmbeddedCore, request: operations.GetV1ContractorsContractorUuidPaymentMethodRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ContractorsGetPaymentMethodQueryData>;
};
export declare function queryKeyContractorsGetPaymentMethod(contractorUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=contractorsGetPaymentMethod.d.ts.map