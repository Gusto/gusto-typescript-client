import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type PaymentConfigsGetQueryData = operations.GetV1CompanyPaymentConfigsResponse;
/**
 * Get a company's payment configs
 *
 * @remarks
 * Get payment speed for the company and fast payment limit (1-day is only applicable to partners that opt in).
 *
 * scope: `company_payment_configs:read`
 */
export declare function usePaymentConfigsGet(request: operations.GetV1CompanyPaymentConfigsRequest, options?: QueryHookOptions<PaymentConfigsGetQueryData>): UseQueryResult<PaymentConfigsGetQueryData, Error>;
/**
 * Get a company's payment configs
 *
 * @remarks
 * Get payment speed for the company and fast payment limit (1-day is only applicable to partners that opt in).
 *
 * scope: `company_payment_configs:read`
 */
export declare function usePaymentConfigsGetSuspense(request: operations.GetV1CompanyPaymentConfigsRequest, options?: SuspenseQueryHookOptions<PaymentConfigsGetQueryData>): UseSuspenseQueryResult<PaymentConfigsGetQueryData, Error>;
export declare function prefetchPaymentConfigsGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompanyPaymentConfigsRequest): Promise<void>;
export declare function setPaymentConfigsGetData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: PaymentConfigsGetQueryData): PaymentConfigsGetQueryData | undefined;
export declare function invalidatePaymentConfigsGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllPaymentConfigsGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildPaymentConfigsGetQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompanyPaymentConfigsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<PaymentConfigsGetQueryData>;
};
export declare function queryKeyPaymentConfigsGet(companyUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=paymentConfigsGet.d.ts.map