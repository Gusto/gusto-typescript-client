import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeesListByCompanyQueryData = Array<components.Employee>;
/**
 * Get employees of a company
 *
 * @remarks
 * Get all of the employees, onboarding, active and terminated, for a given company.
 *
 * scope: `employees:read`
 */
export declare function useEmployeesListByCompany(request: operations.GetV1CompaniesCompanyIdEmployeesRequest, options?: QueryHookOptions<EmployeesListByCompanyQueryData>): UseQueryResult<EmployeesListByCompanyQueryData, Error>;
/**
 * Get employees of a company
 *
 * @remarks
 * Get all of the employees, onboarding, active and terminated, for a given company.
 *
 * scope: `employees:read`
 */
export declare function useEmployeesListByCompanySuspense(request: operations.GetV1CompaniesCompanyIdEmployeesRequest, options?: SuspenseQueryHookOptions<EmployeesListByCompanyQueryData>): UseSuspenseQueryResult<EmployeesListByCompanyQueryData, Error>;
export declare function prefetchEmployeesListByCompany(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdEmployeesRequest): Promise<void>;
export declare function setEmployeesListByCompanyData(client: QueryClient, queryKeyBase: [
    companyId: string,
    parameters: {
        terminated?: boolean | undefined;
        include?: Array<operations.Include> | undefined;
        page?: number | undefined;
        per?: number | undefined;
        searchTerm?: string | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeesListByCompanyQueryData): EmployeesListByCompanyQueryData | undefined;
export declare function invalidateEmployeesListByCompany(client: QueryClient, queryKeyBase: TupleToPrefixes<[
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
export declare function invalidateAllEmployeesListByCompany(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeesListByCompanyQuery(client$: GustoEmbeddedCore, request: operations.GetV1CompaniesCompanyIdEmployeesRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeesListByCompanyQueryData>;
};
export declare function queryKeyEmployeesListByCompany(companyId: string, parameters: {
    terminated?: boolean | undefined;
    include?: Array<operations.Include> | undefined;
    page?: number | undefined;
    per?: number | undefined;
    searchTerm?: string | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeesListByCompany.d.ts.map