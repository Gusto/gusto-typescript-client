import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type ContractorPaymentsGetByIdQueryData = components.ContractorPayment;
/**
 * Get a single contractor payment
 *
 * @remarks
 * Returns a single contractor payment.
 * scope: `payrolls:read`
 */
export declare function useContractorPaymentsGetById(request: operations.GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest, options?: QueryHookOptions<ContractorPaymentsGetByIdQueryData>): UseQueryResult<ContractorPaymentsGetByIdQueryData, Error>;
/**
 * Get a single contractor payment
 *
 * @remarks
 * Returns a single contractor payment.
 * scope: `payrolls:read`
 */
export declare function useContractorPaymentsGetByIdSuspense(request: operations.GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest, options?: SuspenseQueryHookOptions<ContractorPaymentsGetByIdQueryData>): UseSuspenseQueryResult<ContractorPaymentsGetByIdQueryData, Error>;
export declare function prefetchContractorPaymentsGetById(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest): Promise<void>;
export declare function setContractorPaymentsGetByIdData(client: QueryClient, queryKeyBase: [
    companyId: string,
    contractorPaymentId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: ContractorPaymentsGetByIdQueryData): ContractorPaymentsGetByIdQueryData | undefined;
export declare function invalidateContractorPaymentsGetById(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    contractorPaymentId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllContractorPaymentsGetById(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildContractorPaymentsGetByIdQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdContractorPaymentContractorPaymentRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ContractorPaymentsGetByIdQueryData>;
};
export declare function queryKeyContractorPaymentsGetById(companyId: string, contractorPaymentId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=contractorPaymentsGetById.d.ts.map