import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeeBenefitsGetYtdAmountsFromDifferentCompanyQueryData = Array<components.YtdBenefitAmountsFromDifferentCompany>;
/**
 * Get year-to-date benefit amounts from a different company
 *
 * @remarks
 * Retrieves year-to-date benefit amounts that were contributed at a different company for the specified employee.
 * Returns benefit amounts for the requested tax year (defaults to current year if not specified).
 *
 * This endpoint only supports retrieving outside contributions for 401(k) benefits.
 *
 * scope: `employee_benefits:read`
 */
export declare function useEmployeeBenefitsGetYtdAmountsFromDifferentCompany(request: operations.GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest, options?: QueryHookOptions<EmployeeBenefitsGetYtdAmountsFromDifferentCompanyQueryData>): UseQueryResult<EmployeeBenefitsGetYtdAmountsFromDifferentCompanyQueryData, Error>;
/**
 * Get year-to-date benefit amounts from a different company
 *
 * @remarks
 * Retrieves year-to-date benefit amounts that were contributed at a different company for the specified employee.
 * Returns benefit amounts for the requested tax year (defaults to current year if not specified).
 *
 * This endpoint only supports retrieving outside contributions for 401(k) benefits.
 *
 * scope: `employee_benefits:read`
 */
export declare function useEmployeeBenefitsGetYtdAmountsFromDifferentCompanySuspense(request: operations.GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest, options?: SuspenseQueryHookOptions<EmployeeBenefitsGetYtdAmountsFromDifferentCompanyQueryData>): UseSuspenseQueryResult<EmployeeBenefitsGetYtdAmountsFromDifferentCompanyQueryData, Error>;
export declare function prefetchEmployeeBenefitsGetYtdAmountsFromDifferentCompany(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest): Promise<void>;
export declare function setEmployeeBenefitsGetYtdAmountsFromDifferentCompanyData(client: QueryClient, queryKeyBase: [
    employeeId: string,
    parameters: {
        taxYear?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeeBenefitsGetYtdAmountsFromDifferentCompanyQueryData): EmployeeBenefitsGetYtdAmountsFromDifferentCompanyQueryData | undefined;
export declare function invalidateEmployeeBenefitsGetYtdAmountsFromDifferentCompany(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeId: string,
    parameters: {
        taxYear?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeeBenefitsGetYtdAmountsFromDifferentCompany(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeeBenefitsGetYtdAmountsFromDifferentCompanyQuery(client$: GustoEmbeddedCore, request: operations.GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeeBenefitsGetYtdAmountsFromDifferentCompanyQueryData>;
};
export declare function queryKeyEmployeeBenefitsGetYtdAmountsFromDifferentCompany(employeeId: string, parameters: {
    taxYear?: number | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeeBenefitsGetYtdAmountsFromDifferentCompany.d.ts.map