import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type ContractorFormsListQueryData = operations.GetV1ContractorFormsResponse;
/**
 * Get all contractor forms
 *
 * @remarks
 * Get a list of all contractor's forms
 *
 * scope: `contractor_forms:read`
 */
export declare function useContractorFormsList(request: operations.GetV1ContractorFormsRequest, options?: QueryHookOptions<ContractorFormsListQueryData>): UseQueryResult<ContractorFormsListQueryData, Error>;
/**
 * Get all contractor forms
 *
 * @remarks
 * Get a list of all contractor's forms
 *
 * scope: `contractor_forms:read`
 */
export declare function useContractorFormsListSuspense(request: operations.GetV1ContractorFormsRequest, options?: SuspenseQueryHookOptions<ContractorFormsListQueryData>): UseSuspenseQueryResult<ContractorFormsListQueryData, Error>;
export declare function prefetchContractorFormsList(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1ContractorFormsRequest): Promise<void>;
export declare function setContractorFormsListData(client: QueryClient, queryKeyBase: [
    contractorUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: ContractorFormsListQueryData): ContractorFormsListQueryData | undefined;
export declare function invalidateContractorFormsList(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    contractorUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllContractorFormsList(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildContractorFormsListQuery(client$: GustoEmbeddedCore, request: operations.GetV1ContractorFormsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ContractorFormsListQueryData>;
};
export declare function queryKeyContractorFormsList(contractorUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=contractorFormsList.d.ts.map