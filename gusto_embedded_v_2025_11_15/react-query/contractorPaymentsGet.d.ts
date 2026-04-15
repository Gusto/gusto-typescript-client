import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type ContractorPaymentsGetQueryData = operations.GetV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse;
/**
 * Get a single contractor payment
 *
 * @remarks
 * Returns a single contractor payment.
 * scope: `payrolls:read`
 */
export declare function useContractorPaymentsGet(request: operations.GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest, options?: QueryHookOptions<ContractorPaymentsGetQueryData>): UseQueryResult<ContractorPaymentsGetQueryData, Error>;
/**
 * Get a single contractor payment
 *
 * @remarks
 * Returns a single contractor payment.
 * scope: `payrolls:read`
 */
export declare function useContractorPaymentsGetSuspense(request: operations.GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest, options?: SuspenseQueryHookOptions<ContractorPaymentsGetQueryData>): UseSuspenseQueryResult<ContractorPaymentsGetQueryData, Error>;
export declare function prefetchContractorPaymentsGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest): Promise<void>;
export declare function setContractorPaymentsGetData(client: QueryClient, queryKeyBase: [
    companyId: string,
    contractorPaymentId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: ContractorPaymentsGetQueryData): ContractorPaymentsGetQueryData | undefined;
export declare function invalidateContractorPaymentsGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    contractorPaymentId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllContractorPaymentsGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildContractorPaymentsGetQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ContractorPaymentsGetQueryData>;
};
export declare function queryKeyContractorPaymentsGet(companyId: string, contractorPaymentId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=contractorPaymentsGet.d.ts.map