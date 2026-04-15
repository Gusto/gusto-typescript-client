import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeesListQueryData = operations.GetV1CompaniesCompanyIdEmployeesResponse;
/**
 * Get employees of a company
 *
 * @remarks
 * Get all of the employees, onboarding, active and terminated, for a given company.
 *
 * scope: `employees:read`
 */
export declare function useEmployeesList(request: operations.GetV1CompaniesCompanyIdEmployeesRequest, options?: QueryHookOptions<EmployeesListQueryData>): UseQueryResult<EmployeesListQueryData, Error>;
/**
 * Get employees of a company
 *
 * @remarks
 * Get all of the employees, onboarding, active and terminated, for a given company.
 *
 * scope: `employees:read`
 */
export declare function useEmployeesListSuspense(request: operations.GetV1CompaniesCompanyIdEmployeesRequest, options?: SuspenseQueryHookOptions<EmployeesListQueryData>): UseSuspenseQueryResult<EmployeesListQueryData, Error>;
export declare function prefetchEmployeesList(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdEmployeesRequest): Promise<void>;
export declare function setEmployeesListData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        terminated?: boolean | undefined;
        include?: Array<operations.Include> | undefined;
        page?: number | undefined;
        per?: number | undefined;
        searchTerm?: string | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeesListQueryData): EmployeesListQueryData | undefined;
export declare function invalidateEmployeesList(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    companyId: string,
    parameters: {
        terminated?: boolean | undefined;
        include?: Array<operations.Include> | undefined;
        page?: number | undefined;
        per?: number | undefined;
        searchTerm?: string | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeesList(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeesListQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdEmployeesRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeesListQueryData>;
};
export declare function queryKeyEmployeesList(companyId: string, parameters: {
    terminated?: boolean | undefined;
    include?: Array<operations.Include> | undefined;
    page?: number | undefined;
    per?: number | undefined;
    searchTerm?: string | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeesList.d.ts.map