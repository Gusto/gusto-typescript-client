import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type ContractorPaymentGroupsGetQueryData = operations.GetV1ContractorPaymentGroupsContractorPaymentGroupIdResponse;
/**
 * Fetch a contractor payment group
 *
 * @remarks
 * Returns a contractor payment group with all associated contractor payments.
 *
 * scope: `payrolls:read`
 */
export declare function useContractorPaymentGroupsGet(request: operations.GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest, options?: QueryHookOptions<ContractorPaymentGroupsGetQueryData>): UseQueryResult<ContractorPaymentGroupsGetQueryData, Error>;
/**
 * Fetch a contractor payment group
 *
 * @remarks
 * Returns a contractor payment group with all associated contractor payments.
 *
 * scope: `payrolls:read`
 */
export declare function useContractorPaymentGroupsGetSuspense(request: operations.GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest, options?: SuspenseQueryHookOptions<ContractorPaymentGroupsGetQueryData>): UseSuspenseQueryResult<ContractorPaymentGroupsGetQueryData, Error>;
export declare function prefetchContractorPaymentGroupsGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest): Promise<void>;
export declare function setContractorPaymentGroupsGetData(client: QueryClient, queryKeyBase: [
    contractorPaymentGroupUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: ContractorPaymentGroupsGetQueryData): ContractorPaymentGroupsGetQueryData | undefined;
export declare function invalidateContractorPaymentGroupsGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    contractorPaymentGroupUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllContractorPaymentGroupsGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildContractorPaymentGroupsGetQuery(client$: GustoEmbeddedCore, request: operations.GetV1ContractorPaymentGroupsContractorPaymentGroupIdRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ContractorPaymentGroupsGetQueryData>;
};
export declare function queryKeyContractorPaymentGroupsGet(contractorPaymentGroupUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=contractorPaymentGroupsGet.d.ts.map