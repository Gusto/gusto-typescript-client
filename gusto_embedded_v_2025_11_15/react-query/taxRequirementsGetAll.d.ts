import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type TaxRequirementsGetAllQueryData = operations.GetV1CompaniesCompanyUuidTaxRequirementsResponse;
/**
 * Get All Tax Requirement States
 *
 * @remarks
 * Returns objects describing the states that have tax requirements for the company
 *
 * scope: `company_tax_requirements:read`
 */
export declare function useTaxRequirementsGetAll(request: operations.GetV1CompaniesCompanyUuidTaxRequirementsRequest, options?: QueryHookOptions<TaxRequirementsGetAllQueryData>): UseQueryResult<TaxRequirementsGetAllQueryData, Error>;
/**
 * Get All Tax Requirement States
 *
 * @remarks
 * Returns objects describing the states that have tax requirements for the company
 *
 * scope: `company_tax_requirements:read`
 */
export declare function useTaxRequirementsGetAllSuspense(request: operations.GetV1CompaniesCompanyUuidTaxRequirementsRequest, options?: SuspenseQueryHookOptions<TaxRequirementsGetAllQueryData>): UseSuspenseQueryResult<TaxRequirementsGetAllQueryData, Error>;
export declare function prefetchTaxRequirementsGetAll(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyUuidTaxRequirementsRequest): Promise<void>;
export declare function setTaxRequirementsGetAllData(client: QueryClient, queryKeyBase: [
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: TaxRequirementsGetAllQueryData): TaxRequirementsGetAllQueryData | undefined;
export declare function invalidateTaxRequirementsGetAll(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyUuid: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllTaxRequirementsGetAll(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildTaxRequirementsGetAllQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyUuidTaxRequirementsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<TaxRequirementsGetAllQueryData>;
};
export declare function queryKeyTaxRequirementsGetAll(companyUuid: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=taxRequirementsGetAll.d.ts.map