import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type ContractorFormsGetQueryData = operations.GetV1ContractorFormResponse;
/**
 * Get a contractor form
 *
 * @remarks
 * Get a contractor form
 *
 * scope: `contractor_forms:read`
 */
export declare function useContractorFormsGet(request: operations.GetV1ContractorFormRequest, options?: QueryHookOptions<ContractorFormsGetQueryData>): UseQueryResult<ContractorFormsGetQueryData, Error>;
/**
 * Get a contractor form
 *
 * @remarks
 * Get a contractor form
 *
 * scope: `contractor_forms:read`
 */
export declare function useContractorFormsGetSuspense(request: operations.GetV1ContractorFormRequest, options?: SuspenseQueryHookOptions<ContractorFormsGetQueryData>): UseSuspenseQueryResult<ContractorFormsGetQueryData, Error>;
export declare function prefetchContractorFormsGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1ContractorFormRequest): Promise<void>;
export declare function setContractorFormsGetData(client: QueryClient, queryKeyBase: [
    contractorUuid: string,
    formId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: ContractorFormsGetQueryData): ContractorFormsGetQueryData | undefined;
export declare function invalidateContractorFormsGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    contractorUuid: string,
    formId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllContractorFormsGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildContractorFormsGetQuery(client$: GustoEmbeddedCore, request: operations.GetV1ContractorFormRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ContractorFormsGetQueryData>;
};
export declare function queryKeyContractorFormsGet(contractorUuid: string, formId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=contractorFormsGet.d.ts.map