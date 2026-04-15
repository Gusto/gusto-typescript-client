import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type PayrollsGetReceiptQueryData = operations.GetV1PaymentReceiptsPayrollsPayrollUuidResponse;
/**
 * Get a single payroll receipt
 *
 * @remarks
 * Returns a payroll receipt.
 *
 * Notes:
 * * Hour and dollar amounts are returned as string representations of numeric decimals.
 * * Dollar amounts are represented to the cent.
 * * If no data has yet be inserted for a given field, it defaults to “0.00” (for fixed amounts).
 *
 * scope: `payrolls:read`
 */
export declare function usePayrollsGetReceipt(request: operations.GetV1PaymentReceiptsPayrollsPayrollUuidRequest, options?: QueryHookOptions<PayrollsGetReceiptQueryData>): UseQueryResult<PayrollsGetReceiptQueryData, Error>;
/**
 * Get a single payroll receipt
 *
 * @remarks
 * Returns a payroll receipt.
 *
 * Notes:
 * * Hour and dollar amounts are returned as string representations of numeric decimals.
 * * Dollar amounts are represented to the cent.
 * * If no data has yet be inserted for a given field, it defaults to “0.00” (for fixed amounts).
 *
 * scope: `payrolls:read`
 */
export declare function usePayrollsGetReceiptSuspense(request: operations.GetV1PaymentReceiptsPayrollsPayrollUuidRequest, options?: SuspenseQueryHookOptions<PayrollsGetReceiptQueryData>): UseSuspenseQueryResult<PayrollsGetReceiptQueryData, Error>;
export declare function prefetchPayrollsGetReceipt(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1PaymentReceiptsPayrollsPayrollUuidRequest): Promise<void>;
export declare function setPayrollsGetReceiptData(client: QueryClient, queryKeyBase: [
    payrollUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: PayrollsGetReceiptQueryData): PayrollsGetReceiptQueryData | undefined;
export declare function invalidatePayrollsGetReceipt(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    payrollUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllPayrollsGetReceipt(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildPayrollsGetReceiptQuery(client$: GustoEmbeddedCore, request: operations.GetV1PaymentReceiptsPayrollsPayrollUuidRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<PayrollsGetReceiptQueryData>;
};
export declare function queryKeyPayrollsGetReceipt(payrollUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=payrollsGetReceipt.d.ts.map