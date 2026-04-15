import { InvalidateQueryFilters, QueryClient, QueryFunctionContext, QueryKey, UseQueryResult, UseSuspenseQueryResult } from "@tanstack/react-query";
import { GustoEmbeddedCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { QueryHookOptions, SuspenseQueryHookOptions, TupleToPrefixes } from "./_types.js";
export type EmployeeBenefitsGetYtdBenefitAmountsFromDifferentCompanyQueryData = operations.GetEmployeeYtdBenefitAmountsFromDifferentCompanyResponse;
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
export declare function useEmployeeBenefitsGetYtdBenefitAmountsFromDifferentCompany(request: operations.GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest, options?: QueryHookOptions<EmployeeBenefitsGetYtdBenefitAmountsFromDifferentCompanyQueryData>): UseQueryResult<EmployeeBenefitsGetYtdBenefitAmountsFromDifferentCompanyQueryData, Error>;
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
export declare function useEmployeeBenefitsGetYtdBenefitAmountsFromDifferentCompanySuspense(request: operations.GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest, options?: SuspenseQueryHookOptions<EmployeeBenefitsGetYtdBenefitAmountsFromDifferentCompanyQueryData>): UseSuspenseQueryResult<EmployeeBenefitsGetYtdBenefitAmountsFromDifferentCompanyQueryData, Error>;
export declare function prefetchEmployeeBenefitsGetYtdBenefitAmountsFromDifferentCompany(queryClient: QueryClient, client$: GustoEmbeddedCore, request: operations.GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest): Promise<void>;
export declare function setEmployeeBenefitsGetYtdBenefitAmountsFromDifferentCompanyData(client: QueryClient, queryKeyBase: [
    employeeId: string,
    parameters: {
        taxYear?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
], data: EmployeeBenefitsGetYtdBenefitAmountsFromDifferentCompanyQueryData): EmployeeBenefitsGetYtdBenefitAmountsFromDifferentCompanyQueryData | undefined;
export declare function invalidateEmployeeBenefitsGetYtdBenefitAmountsFromDifferentCompany(client: QueryClient, queryKeyBase: TupleToPrefixes<[
    employeeId: string,
    parameters: {
        taxYear?: number | undefined;
        xGustoAPIVersion?: components.VersionHeader | undefined;
    }
]>, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function invalidateAllEmployeeBenefitsGetYtdBenefitAmountsFromDifferentCompany(client: QueryClient, filters?: Omit<InvalidateQueryFilters, "queryKey" | "predicate" | "exact">): Promise<void>;
export declare function buildEmployeeBenefitsGetYtdBenefitAmountsFromDifferentCompanyQuery(client$: GustoEmbeddedCore, request: operations.GetEmployeeYtdBenefitAmountsFromDifferentCompanyRequest, options?: RequestOptions): {
    queryKey: QueryKey;
    queryFn: (context: QueryFunctionContext) => Promise<EmployeeBenefitsGetYtdBenefitAmountsFromDifferentCompanyQueryData>;
};
export declare function queryKeyEmployeeBenefitsGetYtdBenefitAmountsFromDifferentCompany(employeeId: string, parameters: {
    taxYear?: number | undefined;
    xGustoAPIVersion?: components.VersionHeader | undefined;
}): QueryKey;
//# sourceMappingURL=employeeBenefitsGetYtdBenefitAmountsFromDifferentCompany.d.ts.map