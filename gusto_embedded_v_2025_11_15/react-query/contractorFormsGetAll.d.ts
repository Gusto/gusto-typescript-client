import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type ContractorFormsGetAllQueryData = Array<components.Form1099>;
/**
 * Get all contractor forms
 *
 * @remarks
 * Get a list of all contractor's forms
 *
 * scope: `contractor_forms:read`
 */
export declare function useContractorFormsGetAll(request: operations.GetV1ContractorFormsRequest, options?: QueryHookOptions<ContractorFormsGetAllQueryData>): UseQueryResult<ContractorFormsGetAllQueryData, Error>;
/**
 * Get all contractor forms
 *
 * @remarks
 * Get a list of all contractor's forms
 *
 * scope: `contractor_forms:read`
 */
export declare function useContractorFormsGetAllSuspense(request: operations.GetV1ContractorFormsRequest, options?: SuspenseQueryHookOptions<ContractorFormsGetAllQueryData>): UseSuspenseQueryResult<ContractorFormsGetAllQueryData, Error>;
export declare function prefetchContractorFormsGetAll(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1ContractorFormsRequest): Promise<void>;
export declare function setContractorFormsGetAllData(client: QueryClient, queryKeyBase: [
    contractorUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: ContractorFormsGetAllQueryData): ContractorFormsGetAllQueryData | undefined;
export declare function invalidateContractorFormsGetAll(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    contractorUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllContractorFormsGetAll(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildContractorFormsGetAllQuery(client$: GustoEmbeddedCore, request: operations.GetV1ContractorFormsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ContractorFormsGetAllQueryData>;
};
export declare function queryKeyContractorFormsGetAll(contractorUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=contractorFormsGetAll.d.ts.map