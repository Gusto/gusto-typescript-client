import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type FederalTaxDetailsGetQueryData = operations.GetV1CompaniesCompanyIdFederalTaxDetailsResponse;
/**
 * Get Federal Tax Details
 *
 * @remarks
 * Fetches attributes relevant for a company's federal taxes.
 *
 * scope: `company_federal_taxes:read`
 */
export declare function useFederalTaxDetailsGet(request: operations.GetV1CompaniesCompanyIdFederalTaxDetailsRequest, options?: QueryHookOptions<FederalTaxDetailsGetQueryData>): UseQueryResult<FederalTaxDetailsGetQueryData, Error>;
/**
 * Get Federal Tax Details
 *
 * @remarks
 * Fetches attributes relevant for a company's federal taxes.
 *
 * scope: `company_federal_taxes:read`
 */
export declare function useFederalTaxDetailsGetSuspense(request: operations.GetV1CompaniesCompanyIdFederalTaxDetailsRequest, options?: SuspenseQueryHookOptions<FederalTaxDetailsGetQueryData>): UseSuspenseQueryResult<FederalTaxDetailsGetQueryData, Error>;
export declare function prefetchFederalTaxDetailsGet(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdFederalTaxDetailsRequest): Promise<void>;
export declare function setFederalTaxDetailsGetData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: FederalTaxDetailsGetQueryData): FederalTaxDetailsGetQueryData | undefined;
export declare function invalidateFederalTaxDetailsGet(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllFederalTaxDetailsGet(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildFederalTaxDetailsGetQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdFederalTaxDetailsRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<FederalTaxDetailsGetQueryData>;
};
export declare function queryKeyFederalTaxDetailsGet(companyId: string, parameters: {
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=federalTaxDetailsGet.d.ts.map