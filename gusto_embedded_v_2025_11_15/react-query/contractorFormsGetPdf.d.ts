import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type ContractorFormsGetPdfQueryData = operations.GetV1ContractorFormPdfResponse;
/**
 * Get the contractor form pdf
 *
 * @remarks
 * Get the link to the form PDF
 *
 * scope: `contractor_forms:read`
 */
export declare function useContractorFormsGetPdf(request: operations.GetV1ContractorFormPdfRequest, options?: QueryHookOptions<ContractorFormsGetPdfQueryData>): UseQueryResult<ContractorFormsGetPdfQueryData, Error>;
/**
 * Get the contractor form pdf
 *
 * @remarks
 * Get the link to the form PDF
 *
 * scope: `contractor_forms:read`
 */
export declare function useContractorFormsGetPdfSuspense(request: operations.GetV1ContractorFormPdfRequest, options?: SuspenseQueryHookOptions<ContractorFormsGetPdfQueryData>): UseSuspenseQueryResult<ContractorFormsGetPdfQueryData, Error>;
export declare function prefetchContractorFormsGetPdf(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1ContractorFormPdfRequest): Promise<void>;
export declare function setContractorFormsGetPdfData(client: QueryClient, queryKeyBase: [
    contractorUuid: string,
    formId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: ContractorFormsGetPdfQueryData): ContractorFormsGetPdfQueryData | undefined;
export declare function invalidateContractorFormsGetPdf(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    contractorUuid: string,
    formId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllContractorFormsGetPdf(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildContractorFormsGetPdfQuery(client$: GustoEmbeddedCore, request: operations.GetV1ContractorFormPdfRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<ContractorFormsGetPdfQueryData>;
};
export declare function queryKeyContractorFormsGetPdf(contractorUuid: string, formId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=contractorFormsGetPdf.d.ts.map