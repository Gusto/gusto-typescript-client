import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type ContractorPaymentsGetReceiptQueryData = operations.GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse;
/**
 * Get a single contractor payment receipt
 *
 * @remarks
 * Returns a contractor payment receipt.
 *
 * Notes:
 * * Receipts are only available for direct deposit payments and are only available once those payments have been funded.
 * * Payroll Receipt requests for payrolls which do not have receipts available (e.g. payment by check) will return a 404 status.
 * * Hour and dollar amounts are returned as string representations of numeric decimals.
 * * Dollar amounts are represented to the cent.
 * * If no data has yet be inserted for a given field, it defaults to “0.00” (for fixed amounts).
 *
 * scope: `payrolls:read`
 */
export declare function useContractorPaymentsGetReceipt(request: operations.GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest, options?: QueryHookOptions<ContractorPaymentsGetReceiptQueryData>): UseQueryResult<ContractorPaymentsGetReceiptQueryData, Error>;
/**
 * Get a single contractor payment receipt
 *
 * @remarks
 * Returns a contractor payment receipt.
 *
 * Notes:
 * * Receipts are only available for direct deposit payments and are only available once those payments have been funded.
 * * Payroll Receipt requests for payrolls which do not have receipts available (e.g. payment by check) will return a 404 status.
 * * Hour and dollar amounts are returned as string representations of numeric decimals.
 * * Dollar amounts are represented to the cent.
 * * If no data has yet be inserted for a given field, it defaults to “0.00” (for fixed amounts).
 *
 * scope: `payrolls:read`
 */
export declare function useContractorPaymentsGetReceiptSuspense(request: operations.GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest, options?: SuspenseQueryHookOptions<ContractorPaymentsGetReceiptQueryData>): UseSuspenseQueryResult<ContractorPaymentsGetReceiptQueryData, Error>;
export declare function prefetchContractorPaymentsGetReceipt(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest): Promise<void>;
export declare function setContractorPaymentsGetReceiptData(client: QueryClient, queryKeyBase: [
    contractorPaymentUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: ContractorPaymentsGetReceiptQueryData): ContractorPaymentsGetReceiptQueryData | undefined;
export declare function invalidateContractorPaymentsGetReceipt(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    contractorPaymentUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllContractorPaymentsGetReceipt(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildContractorPaymentsGetReceiptQuery(client$: GustoEmbeddedCore, request: operations.GetV1ContractorPaymentsContractorPaymentUuidReceiptRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ContractorPaymentsGetReceiptQueryData>;
};
export declare function queryKeyContractorPaymentsGetReceipt(contractorPaymentUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=contractorPaymentsGetReceipt.d.ts.map